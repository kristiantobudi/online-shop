import React from "react"

interface ChevronDownProps {
    fill?: string
}

export const ChevronDown: React.FC<ChevronDownProps> = ({fill = "#fff"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={fill} className="fill-current w-4 h-4" viewBox="0 0 24 24"
        width={18}
        height={18}
        >
            <path d="M12 21l-12-18h24z" />
        </svg>
    )
}