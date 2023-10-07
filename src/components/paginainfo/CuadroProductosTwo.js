import React from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'

const CuadroProductosTwo = ({ imagen, titulo, link, nuevo, oferta }) => {
    return (
        <div className="relative w-[155px] h-[310px] lg:w-[279px] lg:h-[330px] border-[2px] border-gray-400 border-opacity-25 shadow-lg lg:shadow-2xl rounded-md bg-white flex flex-col justify-center items-center p-[10px]">
            {nuevo === 1 && (
                <div className="absolute cursor-pointer z-[700] text-white flex items-center justify-center font-bold text-sm top-0 left-0 bg-red-500 rounded-full w-[45px] h-[45px]">
                    NEW!
                </div>
            )}
            {oferta === 1 && (
                <div className="absolute cursor-pointer z-[700] text-white flex items-center justify-center font-bold text-sm top-0 right-0 bg-green-500 rounded-md w-[60px] h-[40px]">
                    OFERTA!
                </div>
            )}
            <Link
                className="absolute top-0 flex flex-col items-center justify-center"
                href={link}>
                <div className="w-[109px] h-[136px] lg:w-[230px] lg:h-[200px] relative">
                    <Image
                        src={imagen}
                        layout="fill"
                        objectFit="contain"
                        alt={titulo}
                    />
                </div>
                <div className="border-t-[1px] border-blueOne w-full  pt-[5px] ">
                    <h2 className="text-blueOne text-center text-sm font-semibold mb-[14px] lg:text-md">
                        {titulo}
                    </h2>
                </div>
            </Link>

            <Link
                className="absolute bottom-[10px] from-blueOne  to-sky-500 bg-gradient-to-r  text-center w-auto h-[47px] p-[10px] text-[16px] rounded-full  font-semibold  text-white  "
                href={link}>
                Cotizar ahora
            </Link>
        </div>
    )
}

export default CuadroProductosTwo
