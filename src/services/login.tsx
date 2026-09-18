import { useContext } from "react";
import { api } from "../API";

interface DadosLogin {
    email: string
    senha: string
}

export const LoginA = async (email: string): Promise<boolean> => {
    const data: any = await api

    if (email !== data.email) {
        return false
    }

    return true
}