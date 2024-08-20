import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const storeToken = async (token: string) => {
    cookies().set('Authorization', token, {secure: true})
    redirect('/')
}

export const getCookies = async (key: string) => {
    return cookies().get(key)?.value
}
