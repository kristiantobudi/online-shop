import { useRouter } from "next/navigation";
import { Star } from "../../../../../public/assets/svg/star";
import { CoinNameRow } from "./CoinNameRow";
import { Rate } from "./rate";
import Image from "next/image";
import { More } from "../../../../../public/assets/svg/more";

interface CMCtableRowProps {
    starNum?: number;
    coinName?: string;
    coinIcon?: string;
    coinSymbol?: string;
    showBuy?: boolean
    price?: number;
    hRate?: number;
    dRate?: number;
    hRateIsIncrement?: boolean;
    dRateIsIncrement?: boolean;
    marketCapValue?: number;
    volumeValue?: number;
    volumeCryptoValue?: number;
    circulatingSupply?: number;
}

export const TableRow: React.FC<CMCtableRowProps> = ({
    starNum,
    coinName = "",
    coinIcon = "",
    coinSymbol = "",
    price = 0,
    hRate = 0,
    dRate = 0,
    hRateIsIncrement =  true,
    dRateIsIncrement = true,
    marketCapValue = 0,
    volumeValue = 0,
    volumeCryptoValue = 0,
    circulatingSupply = 0,
}) => {
    const graphImage: string[] = [
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg',
    ];

    const getRandomGraph = (): string => {
        const rndInt = Math.floor(Math.random() * graphImage.length);
        return graphImage[rndInt];
    }

    const router = useRouter()

    const viewCoinDetails = () => {
        router.push(`/currencies/info?symbol=${coinSymbol}&coin=${coinName}&price=${price}`);
    }
    const viewPrice = () => {
        router.push(`/currencies/info?symbol=${coinSymbol}&coin=${coinName}&price=${price}`);
    }

    const formatNumber = (num: number): string => {
        return Number(num.toFixed(2)).toLocaleString()
    }

    return (
        <tbody className="text-black border-b border-gray-800 text-[0.93rem]">
            <tr>
                <td>
                    <Star />
                </td>
                <td>{starNum}</td>
                {coinIcon && (
                    <td className="px-2.5 xl:px-5 cursor-pointer">
                        <CoinNameRow name={coinName} icon={coinIcon} clicked={viewCoinDetails} />
                    </td>
                )}
                <td className="cursor-pointer px-2.5 xl:px-5" onClick={viewPrice}>
                    <p>${formatNumber(price)}</p>
                </td>
                <td className="px-2.5">
                    <Rate isIncrement={hRateIsIncrement} rate={`${formatNumber(hRate)}%`} />
                </td>
                <td  className="px-2.5">
                    <Rate isIncrement={dRateIsIncrement} rate={`${formatNumber(dRate)}%`} />
                </td>
                <td  className="px-2.5">
                    <div>
                        <p>${formatNumber(marketCapValue)}</p>
                    </div>
                </td>
                <td  className="px-2.5">
                    <div>
                        <p>{formatNumber(volumeValue)}</p>
                        <p className='text-gray-400'>
                            {formatNumber(volumeCryptoValue)} {coinSymbol}
                        </p>
                    </div>
                </td>
                <td  className="px-2.5">
                    <div>
                        <p>{formatNumber(circulatingSupply)}</p>
                    </div>
                </td>
                <td  className="px-2.5">
                    <Image src={getRandomGraph()} width={150} height={60} alt='' />
                </td>
                <td>
                    <More />
                </td>
            </tr>
        </tbody>
    )
}