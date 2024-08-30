import { LoginSchema, LoginSchemaType } from './schema';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUser } from "@/client/auth";
import { storeToken } from "@/app/utilities/cookies";

export const useLogin = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
        defaultValues: { email: '', password: '' },
    })


    const onLogin = async (data: LoginSchemaType) => {
        try {
            const response = await loginUser(data);
            if (response.data.data.accessToken) {
                await storeToken(response.data.data.accessToken);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit = () => {
        handleSubmit(data => {
            onLogin(data)
        })();
    }
    
    return {
        onSubmit,
        handleSubmit,
        control,
        errors
    }
}