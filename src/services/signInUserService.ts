import customBackAPI from "@/connectors/customBackAPI";
import { SignInData } from "@/interfaces/signInData";
import { userInterface } from "@/interfaces/userInterface";


export async function signInUser(signinData: SignInData): Promise<{ user: userInterface; token: string }> {
    return await customBackAPI
      .post('/auth/signInUser', signinData)
      .then((response) => {
        const { user, token } = response.data;
        return { user, token };
      })
      .catch((error) => {
        throw new Error('Erro ao fazer login');
      });
}