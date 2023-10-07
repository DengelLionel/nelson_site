import React from 'react'

const IconBuscador = ({ open, fill = '#EEEFF3' }, props) => {
    return (
        <svg
            onClick={open}
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={17}
            fill="none"
            {...props}>
            <path
                fill={fill}
                d="M17.867 10.692h-1.129l-.4-.263c1.4-1.108 2.244-2.546 2.244-4.111 0-3.49-4.16-6.318-9.291-6.318S0 2.828 0 6.318c0 3.49 4.16 6.318 9.291 6.318 2.301 0 4.417-.574 6.046-1.526l.386.272v.768L22.87 17 25 15.552l-7.133-4.86Zm-8.576 0c-3.56 0-6.432-1.954-6.432-4.374S5.732 1.944 9.29 1.944c3.56 0 6.432 1.954 6.432 4.374s-2.873 4.374-6.432 4.374Z"
            />
        </svg>
    )
}

export default IconBuscador
