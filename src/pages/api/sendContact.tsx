/* eslint-disable @typescript-eslint/ban-types */
import vpsPrismaAPI from '@/connectors/bkpPrismaAPI'
import { ContactInterface } from '@/interface/ContactInterface'
import { ProjectFlagInterface } from '@/interface/ProjectFlagInterface'
import type { NextApiRequest, NextApiResponse } from 'next'

function checkNecessaryEnvVariables() {
    if (process.env.NEXT_PUBLIC_KONG_URL == undefined) {
        throw new Error('Missing env variable')
    }
}

function checkRequest(body: ContactInterface) {
    if (
        body.nome == undefined ||
        body.email == undefined ||
        body.empresa == undefined ||
        body.telefone == undefined ||
        body.mensagem == undefined
    ) {
        throw new Error('Missing values in request')
    }
}

async function SendContactEmail(
    emailInfo: ContactInterface
): Promise<Response> {
    checkNecessaryEnvVariables()
    const projectFlag: ProjectFlagInterface = {
        flag: 'vpsvp',
    }
    return await fetch(vpsPrismaAPI + '/auth/contact', {
        method: 'POST',
        headers: {
            'g-recaptcha-response': emailInfo.recaptchaToken,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: emailInfo.nome,
            email: emailInfo.email,
            telefone: emailInfo.telefone,
            empresa: emailInfo.empresa,
            mensagem: emailInfo.mensagem,
            projectFlag: projectFlag
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
        return await SendContactEmail(req.body)
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
