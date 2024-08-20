import { LoginEndpoint } from "@/app/utilities/network/constants"
import { axiosInstance } from "@/app/utilities/network/network"

export type LoginDataProps = {
    email: string,
    password: string
}

export const loginUser = async (data: LoginDataProps) => {
    return axiosInstance.post(LoginEndpoint, data, {
        headers: {'Content-Type': 'application/json'}
    })
}