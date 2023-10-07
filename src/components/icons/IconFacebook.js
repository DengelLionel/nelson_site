import React from 'react'

const IconFacebook = ({ fill, ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="none"
            {...props}>
            <path
                fill={fill}
                d="M17 8.5C17 3.804 13.196 0 8.5 0A8.499 8.499 0 0 0 0 8.5a8.503 8.503 0 0 0 7.172 8.397v-5.94h-2.16V8.5h2.16V6.627c0-2.13 1.268-3.307 3.21-3.307.93 0 1.903.166 1.903.166v2.091h-1.072c-1.055 0-1.385.655-1.385 1.328V8.5h2.357l-.377 2.457h-1.98v5.94A8.503 8.503 0 0 0 17 8.5Z"
            />
        </svg>
    )
}

export default IconFacebook
