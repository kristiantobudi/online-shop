import { ProductEndpoint } from "../app/utilities/network/constants"
import { axiosInstance } from "../app/utilities/network/network"

export const getAllProducts = async () => {
    return axiosInstance.get(ProductEndpoint, {
        params: {
            product_id: true,
        }
    })
}

export const getProductById = async (product_id: string) => {
    return axiosInstance.get(`${ProductEndpoint}/${product_id}`)
}