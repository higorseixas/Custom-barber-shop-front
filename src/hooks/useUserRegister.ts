import { userInterface } from "@/interfaces/userInterface";
import { userRegister } from "@/services/userService";

export const UserRegister = async (user: userInterface) => {
    return await userRegister(user)
}