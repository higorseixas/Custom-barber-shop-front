import { SignInData } from "@/interfaces/signInData"
import { signInUser } from "@/services/signInUserService"

export const SignInUser = async (signinData: SignInData) => {
    return await signInUser(signinData)
}