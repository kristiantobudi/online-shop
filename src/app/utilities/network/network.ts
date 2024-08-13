import AxiosInstance  from "axios";

export const axiosInstance = AxiosInstance.create({
    baseURL: 'http://localhost:4000/',
    timeout: 10000
})