import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGlobe,
    faPenToSquare,
    faFileLines,
    faClock,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useHover } from '@/hooks/useHover'
export default function Services() {
    return (
        <section id="distribuidores" className="py-20 bg-gray-200">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-semibold">
                        Forma parte de nuestro equipo de Distribuidores
                    </h2>
                    <p className="text-xl text-gray-600">
                        Solicita los Nuevos Precios para Distribuidores
                    </p>
                </div>

                <div className="flex flex-wrap gap-[15px] justify-center">
                    <ServiceBox
                        color="#f152f4"
                        colorTailwind="border-pinkk"
                        icon={faPenToSquare}
                        title="Distribución de Firmas para Emprendedores"
                        link="/"
                    />

                    <ServiceBox
                        color="#07edea"
                        colorTailwind="border-color2"
                        icon={faFileLines}
                        title="Distribución de Firmas para Contadores"
                        link="#"
                    />

                    <ServiceBox
                        color="#24f057"
                        colorTailwind="border-greenn"
                        icon={faClock}
                        title="Distribución para Emisores de Facturación Electrónica"
                        link="#"
                    />
                    <ServiceBox
                        color="#1a61db"
                        colorTailwind="border-azul"
                        icon={faGlobe}
                        title="Distribución de Firmas para Grupos Empresariales"
                        link="/"
                    />
                </div>
            </div>
        </section>
    )
}

const ServiceBox = ({ color, icon, title, link, colorTailwind }) => {
    useEffect(() => {}, [colorTailwind])
    const [hoverRef, isHovered] = useHover()

    return (
        <div
            ref={hoverRef}
            className={`w-full sm:w-1/2 md:w-1/4 p-4 transform transition-all duration-300 hover:-translate-y-1 rounded-lg text-center shadow-shadownuevo overflow-hidden mb-10 bg-white border-b-[5px] ${
                isHovered ? colorTailwind : 'border-transparent'
            }`}>
            <FontAwesomeIcon
                icon={icon}
                style={{ color: color, width: 35, height: 35 }}
            />
            <h4 className="mb-4 text-lg font-bold">
                <Link className={`text-black`} href={link}>
                    {title}
                </Link>
            </h4>
        </div>
    )
}
