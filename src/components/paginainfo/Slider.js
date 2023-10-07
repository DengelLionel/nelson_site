import React from 'react'
import Image from 'next/legacy/image'
import IconArrow from '../icons/IconArrow'
import { useHover } from '@/hooks/useHover'
import Link from 'next/link'
const Slider = ({
    imagen_mobil,
    imagen_desktop,
    titulo,
    mobile,
    nombreenlace,
    subtitulo,
    enlace,
}) => {
    const [hoverRef, isHovered] = useHover()
    return (
        <section
            className={`relative w-full h-[500px] ${
                mobile ? 'md:hidden' : 'hidden md:block md:h-[600px]'
            }`}>
            <Image
                className="brightness-50 "
                objectFit="cover"
                layout="fill"
                alt={titulo}
                src={mobile ? imagen_mobil : imagen_desktop}
                quality={100}
            />
            <div className="w-full h-full z-[20] flex flex-col justify-end items-center gap-[20px] pl-[16px] pr-[16px] pb-[35px] relative lg:items-start lg:pl-[100px] lg:justify-center">
                {titulo !== null && (
                    <h1 className="text-white font-bold text-lg text-center lg:text-2xl">
                        {titulo}
                    </h1>
                )}

                {subtitulo !== null && (
                    <h2 className="text-white font-medium text-md text-center lg:w-[500px] lg:text-left lg:text-lg ">
                        {subtitulo}
                    </h2>
                )}

                {nombreenlace !== null && (
                    <Link
                        target="_blank"
                        href={enlace}
                        ref={hoverRef}
                        className="bg-blueOne w-auto p-[10px] h-[47px] text-blancoOne rounded-full flex flex-row transition-all duration-[500ms] items-center justify-center shadow-md font-semibold hover:bg-blueTwo hover:text-blueOne gap-[10px]">
                        {nombreenlace}
                        <IconArrow fill={isHovered ? '#2F6AAD' : '#fafafa'} />
                    </Link>
                )}
            </div>
        </section>
    )
}

export default Slider
