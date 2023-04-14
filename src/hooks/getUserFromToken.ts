import { getUserFromToken } from "@/services/getUserFromTokenService"

export const GetUserFromToken = async (token: string) => {
    return await getUserFromToken(token)
}