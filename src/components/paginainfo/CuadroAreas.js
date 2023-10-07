import React from 'react'
import IconArrow from '@/components/icons/IconArrow'
import { useHover } from '@/hooks/useHover'
import Link from 'next/link'
const CuadroAreas = ({ titulo, IconComponent, link }) => {
    const [hoverRef, isHovered] = useHover()
    return (
        <Link
            href={link}
            className="w-[328px] h-[300px] flex flex-col items-center justify-center ">
            <div
                ref={hoverRef}
                className={`relative w-[328px] h-[232px] lg:h-[280px] lg:p-[20px] rounded-md flex flex-col justify-center items-center transition-all ${
                    isHovered
                        ? 'bg-blueOne text-white shadow-areas'
                        : 'bg-blancoTwo text-negro shadow-md lg:shadow-lg'
                }`}>
                <IconComponent color={isHovered ? '#FAFAFA' : '#2F6AAD'} />
                <h2 className="text-[16px] font-semibold mt-[26px] mb-[14px] lg:text-[20px]">
                    {titulo}
                </h2>
                <button
                    className={`lg:absolute lg:bottom-0 bg-blancoTwo border-[1px] border-blueOne w-[216px] h-[47px] text-blueOne text-[16px] rounded-full flex flex-row items-center justify-center font-semibold text-white gap-[30px] transition-all duration-500 ${
                        isHovered
                            ? 'lg:transform lg:translate-y-[-20px] lg:opacity-100 lg:pointer-events-auto'
                            : 'lg:transform lg:-translate-y-full lg:opacity-0 lg:pointer-events-none'
                    }`}>
                    Ver productos <IconArrow fill={`#2F6AAD`} />
                </button>
            </div>
        </Link>
    )
}

export default CuadroAreas
