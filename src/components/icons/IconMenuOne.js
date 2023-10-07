import React from 'react'

const IconMenuOne = ({ open, color }, props) => {
    return (
        <svg
            onClick={open}
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={21}
            fill="none"
            {...props}>
            <path
                fill={color}
                d="M.857 3.857h22.286A.857.857 0 0 0 24 3V.857A.857.857 0 0 0 23.143 0H.857A.857.857 0 0 0 0 .857V3c0 .473.384.857.857.857Zm0 8.572h22.286A.857.857 0 0 0 24 11.57V9.43a.857.857 0 0 0-.857-.858H.857A.857.857 0 0 0 0 9.43v2.142c0 .474.384.858.857.858Zm0 8.571h22.286a.857.857 0 0 0 .857-.857V18a.857.857 0 0 0-.857-.857H.857A.857.857 0 0 0 0 18v2.143c0 .473.384.857.857.857Z"
            />
        </svg>
    )
}

export default IconMenuOne
