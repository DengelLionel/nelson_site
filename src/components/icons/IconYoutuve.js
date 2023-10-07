import React from 'react'

const IconYoutuve = ({ fill, ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={12}
            fill="none"
            {...props}>
            <path
                fill={fill}
                d="M16.645 1.87A2.136 2.136 0 0 0 15.142.358C13.816 0 8.5 0 8.5 0S3.184 0 1.858.358A2.136 2.136 0 0 0 .355 1.87C0 3.205 0 5.99 0 5.99s0 2.784.355 4.118a2.104 2.104 0 0 0 1.503 1.489c1.326.357 6.642.357 6.642.357s5.316 0 6.642-.357a2.104 2.104 0 0 0 1.503-1.489C17 8.773 17 5.989 17 5.989s0-2.784-.355-4.119ZM6.76 8.516V3.461l4.443 2.528-4.443 2.527Z"
            />
        </svg>
    )
}

export default IconYoutuve
