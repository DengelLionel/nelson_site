import React from 'react'
import Image from 'next/legacy/image'

const Info = () => {
    return (
        <section className="relative mt-[40px] w-full h-[166px] lg:h-[306px]">
            <Image
                className="object-cover"
                layout="fill"
                priority={true}
                quality={75}
                src={
                    'https://res.cloudinary.com/darps1cta/image/upload/v1687643443/nexo/medico-tecnico-laboratorio-analizando-evolucion-virus-tableta-digital-equipo-cientificos-que-llevan-cabo-desarrollo-vacunas-utilizando-alta-tecnologia-investigar-tratamiento-contra-pandem_hykvlk.jpg'
                }
            />
            <div className="w-full h-full z-[20] absolute top-0 bg-blueOne opacity-75" />
            <div className="w-full h-full z-[30] flex flex-col justify-end items-center pr-[16px] pl-[16px] pt-[25px] pb-[35px] relative lg:items-start lg:pl-[35px] lg:justify-center lg:items-center">
                <h3 className="text-blancoOne font-roboto font-medium text-center md:text-[20px]font-extrabold text-[20px] lg:text-[24px]">
                    NEXOMEDIC S.A.C.
                </h3>
                <p className="text-blancoOne text-[12px] text-center lg:text-[20px] lg:mt-[35px] lg:w-[756px]">
                    Nos especializamos en la importación y comercialización de
                    Equipos y servicios para el sector de Salud. Nuestro
                    compromiso es proveerle productos de alta tecnología,
                    calidad y un excelente servicio de post venta, para su
                    práctica profesional.
                </p>
                {/* <button className='bg-blueOne w-[216px] h-[47px] text-blancoOne rounded-full flex flex-row items-center justify-center font-semibold hover:bg-blancoOne hover:text-black gap-[10px]'>Ver más información<IconArrow fill={`#D9D9D9`}/></button> */}
            </div>
        </section>
    )
}

export default Info
