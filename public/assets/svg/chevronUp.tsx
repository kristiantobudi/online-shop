import React from "react"

interface ChevronUpProps {
    fill?: string
}

export const ChevronUp: React.FC<ChevronUpProps> = ({fill = "#fff"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={fill} className="fill-current w-4 h-4" viewBox="0 0 24 24">
            <path d="M24 22h-24l12-20z" />
        </svg>
    )
}