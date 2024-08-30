import { CryptocurrencyListingsLatest } from "../../../../app/utilities/network/constants"
import { axiosInstance } from "../../../../app/utilities/network/network"

export const getListingsLatest = async () => {
    return axiosInstance.get(`${CryptocurrencyListingsLatest}/listings/latest`)
}

export const getCryptocurrencyAirdropById = async (id: string) => {
    return axiosInstance.get(`${CryptocurrencyListingsLatest}/airdrop/${id}`, {
        params: {
            cryptocurrency_id: true
        }
    })
}

export const getCryptocurrencyAirdrops = async () => {
    return axiosInstance.get(`${CryptocurrencyListingsLatest}/airdrops`, {
        params: {
            cryptocurrency_id: true
        }
    })
}

export const getListingsCoin = async () => {
    return axiosInstance.get(`${CryptocurrencyListingsLatest}/listings`, {
        params: {
            cryptocurrency_id: true
        }
    })
}

export const getLatestCoin = async () => {
    return axiosInstance.get(`${CryptocurrencyListingsLatest}/listings/latest`, {})
}