import { userInterface } from "@/interfaces/userInterface";

export const useUserRegister = async (user: userInterface) => {
    return await fetch('api/userRegister', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: user.name,
            cpf: user.cpf,
            password: user.password,
            cellphone: user.cellphone,
            typeId: user.typeId,
        }),
    })
}