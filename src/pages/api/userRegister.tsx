/* eslint-disable @typescript-eslint/ban-types */
import customBackAPI from '@/connectors/customBackAPI'
import { userInterface } from '@/interfaces/userInterface'
import type { NextApiRequest, NextApiResponse } from 'next'

function checkNecessaryEnvVariables() {
    if (process.env.NEXT_PUBLIC_CUSTOM_BACK == undefined) {
        throw new Error('Missing env variable')
    }
}

function checkRequest(body: userInterface) {
  if (
      body.cpf == undefined ||
      body.password == undefined
  ) {
      throw new Error('Missing values in request')
  }
}

async function UserRegister(
    userInfo: userInterface
): Promise<Response> {
    checkNecessaryEnvVariables()
    return await fetch(customBackAPI + '/user/createUser', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userInfo.name,
          cpf: userInfo.cpf,
          password: userInfo.password,
          cellphone: userInfo.cellphone,
          typeId: userInfo.typeId,
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
      return await UserRegister(req.body)
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
