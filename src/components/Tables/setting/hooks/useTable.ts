import { useCallback, useEffect, useState, createContext } from "react";
import { TableType } from "../types/airdropType";
import { getListingsLatest } from "../cryptocurrency/getCryptoFromApi";

export const AirdropTables = createContext({
    airdropDetails: {} as TableType | undefined
})

export const useAirdropTable = (id: string) => {
    const [data, setData] = useState<TableType>()

    const fetchData = useCallback(async () => {
        try {
            const response = await getListingsLatest();
            if (response.data.data && response.data.data.length > 0) {
                setData(response.data.data[0])
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return {
        airdropDetails: data
    }
}

