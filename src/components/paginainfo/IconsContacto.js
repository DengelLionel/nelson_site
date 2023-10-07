import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHover } from '@/hooks/useHover'
const IconsContacto = ({ icon, color, colorhover }) => {
    const [hoverRef, isHovered] = useHover()
    return (
        <div
            ref={hoverRef}
            className={`${
                isHovered ? 'bg-gray-200' : 'bg-' + colorhover
            } text-blue-500 rounded-full w-12 h-12 flex items-center justify-center mr-4 transition-colors`}>
            <FontAwesomeIcon
                icon={icon}
                style={{ color: isHovered ? color : '#DFE0E2' }}
            />
        </div>
    )
}

export default IconsContacto
