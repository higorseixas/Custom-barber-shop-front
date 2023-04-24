/* eslint-disable @typescript-eslint/ban-types */
import customBackAPI from '@/connectors/customBackAPI'
import type { NextApiRequest, NextApiResponse } from 'next'

function checkNecessaryEnvVariables() {
    if (process.env.NEXT_PUBLIC_CUSTOM_BACK == undefined) {
        throw new Error('Missing env variable')
    }
}

async function GetUserFromToken(
    userInfo: any
): Promise<Response> {
    checkNecessaryEnvVariables()
    return await fetch(customBackAPI + '/user/getUserFromToken', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: userInfo.authorization
        }
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
        return await GetUserFromToken(req.headers)
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
