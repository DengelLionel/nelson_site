import React from 'react'

const IconClose = ({ open, color = '#EEEFF3' }, props) => {
    return (
        <svg
            onClick={open}
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={17}
            fill="none"
            {...props}>
            <path
                fill={color}
                d="M19.25 1.704 17.311 0 9.625 6.755 1.939 0 0 1.704l7.686 6.754L0 15.213l1.939 1.704 7.686-6.755 7.686 6.755 1.939-1.704-7.686-6.755 7.686-6.754Z"
            />
        </svg>
    )
}

export default IconClose
