import { deleteToken } from "@/app/utilities/cookies";
import { logout } from "@/client/auth";

export const useLogout = () => {
    const onLogout = async () => {
        try {
            const response = await logout();
            if (response.status === 204) {
                await deleteToken();
            }
        } catch (error) {
            console.log(error)
        }
    }

    return {
        onLogout
    }
}