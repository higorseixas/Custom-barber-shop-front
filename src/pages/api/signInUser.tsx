/* eslint-disable @typescript-eslint/ban-types */
import customBackAPI from '@/connectors/customBackAPI'
import { SignInData } from '@/interfaces/signInData'
import type { NextApiRequest, NextApiResponse } from 'next'

function checkNecessaryEnvVariables() {
    if (process.env.NEXT_PUBLIC_CUSTOM_BACK == undefined) {
        throw new Error('Missing env variable')
    }
}

function checkRequest(body: SignInData) {
  if (
      body.cpf == undefined ||
      body.password == undefined
  ) {
      throw new Error('Missing values in request')
  }
}

async function SignInUser(
    userInfo: SignInData
): Promise<Response> {
    checkNecessaryEnvVariables()
    return await fetch(customBackAPI + '/auth/signInUser', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cpf: userInfo.cpf,
          password: userInfo.password,
      }),

    })
      .then((response) => {
          return response
      })
      .catch((err) => {
          throw err
      })
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{}>
) {
    try {
      checkRequest(req.body)
    } catch (err) {
      let message = 'Unknown Error'
      if (err instanceof Error) message = err.message
      return res.status(400).json({ err: message })
    }
    try {
      return await SignInUser(req.body)
        .then((response) => response.text())
        .then((body) => {
            return res.status(200).json({ response: body })
        })
        .catch((err) => {
          let message = 'Unknown Error'
          if (err instanceof Error) message = err.message
          return res.status(500).json({ err: message })
        })
    } catch (err) {
        let message = 'Unknown Error'
        if (err instanceof Error) message = err.message
        return res.status(500).json({ err: message })
    }
}
