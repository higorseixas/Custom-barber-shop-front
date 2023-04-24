import { SignInData } from "@/interfaces/signInData"

export const useSignInUserHook = async (signinData: SignInData) => {
	return await fetch('api/signInUser', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			cpf: signinData.cpf,
			password: signinData.password,
		}),
	})
}
