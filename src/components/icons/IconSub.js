import React from 'react'
const IconSub = ({ clase, status, ...props }) => {
    return (
        <svg
            className={clase}
            xmlns="http://www.w3.org/2000/svg"
            width={5}
            height={10}
            fill="none"
            {...props}>
            <path
                fill={status ? '#EEEFF3' : '#2F6AAD'}
                d="M0 8.825 3.09 5 0 1.175.951 0 5 5 .951 10 0 8.825Z"
            />
        </svg>
    )
}

export default IconSub
