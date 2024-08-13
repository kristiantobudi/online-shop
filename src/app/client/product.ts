import { axiosInstance, ProductEndpoint } from "../utilities"

export const getAllProducts = async () => {
    return axiosInstance.get(ProductEndpoint, {
        params: {
            current_user_data: true
        }
    })
}

export const getProduct = async (id: string) => {
    return axiosInstance.get(`${ProductEndpoint}/${id}`)
}