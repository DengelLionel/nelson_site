import React from 'react'
import Image from 'next/legacy/image'
const BannerGeneral = ({ imagen, titulo }) => {
    return (
        <div className="relative w-full h-[400px]">
            <Image
                className="brightness-50"
                quality={100}
                objectFit="cover"
                layout="fill"
                src={imagen}
                alt={titulo}
            />
        </div>
    )
}

export default BannerGeneral
