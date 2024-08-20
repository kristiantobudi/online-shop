
import { ChartType } from "./constants";
import { createContext, useCallback, useEffect, useState } from "react";
import { getAllProducts } from "@/client/productFromBE";

export const DetailCharts = createContext({
    dataDetails: {}  as ChartType | undefined
})

export const useDetailCharts = (id: string) => {
    const [data, setData] = useState<ChartType>()

    const fetchData = useCallback(async () => {
        try {
            const response = await getAllProducts();
            if (response.data.data && response.data.data.length > 0) {
                setData(response.data.data[0])
            }
        } catch (error) {
            console.error(error)
        }
    }, [id])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return {
        dataDetails: data
    }
}
