import React from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'

const CuadroProductos = ({ imagen, titulo, link, nuevo, oferta }) => {
    return (
        <div className="relative w-[322px] h-[354px] lg:w-[279px] lg:h-[330px] border-[2px] border-gray-400 border-opacity-25 shadow-lg lg:shadow-2xl rounded-md bg-blancoTwo flex flex-col justify-center items-center p-[10px] group">
            {nuevo === 1 && (
                <div className="absolute cursor-pointer z-[700] text-white flex items-center justify-center font-bold text-sm top-0 left-0 bg-red-500 rounded-full w-[50px] h-[50px]">
                    NEW!
                </div>
            )}
            {oferta === 1 && (
                <div className="absolute cursor-pointer z-[700] text-white flex items-center justify-center font-bold text-sm top-0 right-0 bg-green-500 rounded-md w-[70px] h-[40px]">
                    OFERTA!
                </div>
            )}
            <Link
                className="absolute top-0 flex flex-col items-center justify-center"
                href={link}>
                <div className="w-[265px] h-[247px] lg:w-[230px] lg:h-[200px] relative">
                    <Image
                        src={imagen}
                        layout="fill"
                        objectFit="contain"
                        alt={titulo}
                    />
                </div>
                <div className="border-t-[1px] border-blueOne w-full  pt-[10px] ">
                    <h2 className="text-blueOne text-center text-sm font-semibold mb-[14px] lg:text-md">
                        {titulo}
                    </h2>
                </div>
            </Link>

            <Link
                className=" absolute bottom-[10px] from-blueOne  to-sky-500 bg-gradient-to-r  border-[2px] text-center w-auto h-[47px]  text-[16px] rounded-full p-[10px] font-semibold  text-white  "
                href={link}>
                Cotizar ahora
            </Link>
        </div>
    )
}

export default CuadroProductos
