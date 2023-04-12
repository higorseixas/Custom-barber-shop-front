import customBackAPI from "@/connectors/customBackAPI";
import { userInterface } from "@/interfaces/userInterface";

export async function userRegister(user: userInterface) {
    return await customBackAPI
        .post('/user/createUser', user)
            .then((response) => {
                const userJWT = response.data
                console.log(userJWT)
            })
            .catch((error) =>{
                console.error(error)
            })

}