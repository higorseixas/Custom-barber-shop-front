import { GetUserFromTokenInterface } from "@/interfaces/getUserFromTokenInterface"

export const useGetUserFromTokenHook = async (userToken: GetUserFromTokenInterface) => {
	return await fetch('api/getUserFromToken', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${userToken.token}`
		}
	})
}
