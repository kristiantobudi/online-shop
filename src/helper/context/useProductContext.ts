import { ProductType } from "@/types/products";
import { useState, createContext } from "react";

export const DetailsContext = createContext({
    dataDetail: {} as ProductType | undefined
})

export const useDetailContext = (id: string) => {
    const [data, setData] = useState<ProductType>()
}