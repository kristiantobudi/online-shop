import Image from "next/image"

interface CoinNameRowProps {
    name: string,
    icon: string,
    clicked: () => void
}

export const CoinNameRow: React.FC<CoinNameRowProps> = ({ name, icon }) => {
    return (
        <div className="flex">
            <Image className="w-4 h-4" src={icon} alt="coin"/>
            <p className="text-black dark:text-white">{name}</p>
        </div>
    )
}