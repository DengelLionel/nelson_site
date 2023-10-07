import React from 'react'
import { useHover } from '@/hooks/useHover'
import Link from 'next/link'
const IconosHover = ({ IconComponet, enlace }) => {
    const [hoverRef, isHovered] = useHover()
    return (
        <div ref={hoverRef} className="flex items-center">
            <Link className="text-gray-500 hover:text-gray-700" href={enlace}>
                <IconComponet fill={isHovered ? '#274C77' : '#888B8E'} />
            </Link>
        </div>
    )
}

export default IconosHover
