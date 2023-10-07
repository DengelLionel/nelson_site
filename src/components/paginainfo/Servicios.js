import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
const Servicios = () => {
    return (
        <div className="flex flex-col items-center pt-[25px]">
            <h2 className="text-negro font-extrabold md:text-[20px] lg:text-[24px]">
                Servicios
            </h2>
            <section className="flex flex-col md:flex-row-reverse md:gap-[75px]">
                <Link
                    href={'/post-venta'}
                    className="flex flex-row items-center gap-[7px] mt-[12px]  lg:gap-[49px] lg:p-[10px] xl:p-[20px] transition-all duration-[500ms] lg:hover:bg-blueTwo lg:hover:shadow-lg">
                    <div className="relative w-[106px] h-[106px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[300px]">
                        <Image
                            src={
                                'https://res.cloudinary.com/dxvqyh8ib/image/upload/v1688609788/NEXOMEDIC/POST_VENTA_2023_NEW_NEW_2023_jlrlez.png'
                            }
                            layout="fill"
                            objectFit="cover"
                            alt="imagen servicio"
                        />
                    </div>
                    <div>
                        <h3 className="text-blueOne text-md font-bold lg:text-[20px]">
                            POST VENTA
                        </h3>
                        <p className="w-[215px] text-negro text-[12px] lg:text-[16px]">
                            “Nuestros clientes son los mas importantes, es por
                            ello que la venta no finaliza con la entrega del
                            producto”
                        </p>
                    </div>
                </Link>

                <Link
                    href={'/servicio-tecnico'}
                    className="flex flex-row items-center gap-[7px] mt-[12px] md:flex-row-reverse lg:gap-[49px] lg:p-[10px] xl:p-[20px] transition-all duration-[500ms] lg:hover:bg-blueTwo lg:hover:shadow-lg">
                    <div>
                        <h3 className="text-blueOne text-md font-bold lg:text-[20px]">
                            SERVICIO TÉCNICO
                        </h3>
                        <p className="w-[215px] text-negro text-[12px] lg:text-[16px]">
                            Contamos con un equipo de profesionales altamente
                            capacitados y preparados para poder brindar
                            asistencia de calidad.
                        </p>
                    </div>
                    <div className="relative w-[106px] h-[106px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[300px]">
                        <Image
                            src={
                                'https://res.cloudinary.com/dxvqyh8ib/image/upload/v1688609787/NEXOMEDIC/servicio_tecnico_NEW_o67z49.png'
                            }
                            layout="fill"
                            objectFit="cover"
                            alt="imagen servicio"
                        />
                    </div>
                </Link>
            </section>
        </div>
    )
}

export default Servicios
