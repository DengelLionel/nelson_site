import React, { useState } from 'react'

const IconTelefono = props => {
    const [hovered, setHovered] = useState(false)

    const toggleHover = () => setHovered(!hovered)

    return (
        <svg
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            xmlns="http://www.w3.org/2000/svg"
            width={21}
            height={16}
            fill="none"
            {...props}>
            <path
                fill={hovered ? 'blue' : props.fill || '#000'}
                d="M4.223 6.924c1.68 2.516 4.387 4.57 7.689 5.858l2.566-1.955c.315-.24.782-.32 1.19-.214 1.307.33 2.719.507 4.165.507.642 0 1.167.4 1.167.889v3.102c0 .489-.525.889-1.167.889C8.878 16 0 9.236 0 .889 0 .4.525 0 1.167 0H5.25c.642 0 1.167.4 1.167.889 0 1.111.233 2.178.665 3.173.128.311.035.658-.292.907L4.223 6.924Z"
            />
        </svg>
    )
}

export default IconTelefono
