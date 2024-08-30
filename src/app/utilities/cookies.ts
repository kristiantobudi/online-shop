'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const storeToken = async (token: string) => {
    cookies().set('Authorization', token, {secure: true})
    redirect('/')
}

export const getCookies = async (key: string) => {
    return cookies().get(key)?.value
}


export const deleteCookies = async (key: string) => {
    return cookies().delete(key);
}

export const deleteToken = async () => {
    cookies().delete('Authorization')
    redirect('/auth/signin')
}

export const resetCookies = () => {
    cookies()
    .getAll()
    .forEach(cookie => {
        deleteCookies(cookie.name)
    })
    redirect('/')
}