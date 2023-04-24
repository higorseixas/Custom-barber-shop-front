import { GetUserFromTokenInterface } from "@/interfaces/getUserFromTokenInterface"

export const useGetUserFromToken = async (userInfo: GetUserFromTokenInterface) => {
	return await fetch('api/getUserFromToken', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
		}
	})
}
