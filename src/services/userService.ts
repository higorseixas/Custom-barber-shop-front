import customBackAPI from "@/connectors/customBackAPI";
import { userInterface } from "@/interfaces/userInterface";

export async function userRegister(user: userInterface) {
    return await customBackAPI
        .post('/user/createUser', user)
        .then((response) => {
            return response.data;
        })
        .catch((error) =>{
            throw new Error('Erro ao criar usuário', error);
        })

}