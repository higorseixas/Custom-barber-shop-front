import customBackAPI from "@/connectors/customBackAPI";

export async function getUserFromToken(token: string) {
    return await customBackAPI
        .get('/user/getUserFromToken', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
           return response.data
        })
        .catch((error) =>{
            console.error(error)
        })
}