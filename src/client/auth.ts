import { getCookies } from "@/app/utilities/cookies"
import { LoginEndpoint, LogoutEndpoint } from "@/app/utilities/network/constants"
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

export const logout = async () => {
    const auth = await getCookies('Authorization')
    return axiosInstance.post(
        LogoutEndpoint,
        {},
        {
            headers: { Authorization: auth }
        }
    )
}