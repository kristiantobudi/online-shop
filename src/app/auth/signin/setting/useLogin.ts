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
            console.log(response)
            if (response.data.data.token) {
                await storeToken(response.data.data.token);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit = () => {
        console.log('onSubmit')
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