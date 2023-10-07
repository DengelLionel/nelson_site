import Image from 'next/legacy/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return (
        <section
            id="nosotros"
            className="mt-10 bg-gray-100 pl-[16px] pr-[16px] py-16 lg:px-12 px-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div
                    className="relative h-64 lg:h-auto lg:w-[400px] xl:w-[500px] flex justify-center items-center overflow-hidden"
                    data-aos="zoom-in">
                    <Image
                        src="/img/about.jpg"
                        alt="About us"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <div
                    className="flex flex-col justify-center pl-[16px] pr-[16px] "
                    data-aos="fade-left">
                    <div className="pt-4 lg:pt-0">
                        <h3 className="text-xl lg:text-2xl font-normal text-gray-700 mb-4 font-poppins">
                            Acerca de Nosotros
                        </h3>
                        <p className="italic text-sm lg:text-base mb-4">
                            Somos una empresa dedicada al desarrollo,
                            distribución y comercialización de software de
                            facturación electrónica, y firmas electrónicas,
                            enfocado al crecimiento empresarial de nuestros
                            clientes.
                        </p>
                        <ul className="list-none pl-0 mb-4 text-sm lg:text-base">
                            <li className="mb-2 flex items-center gap-[10px]">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    style={{ color: '#06ea87' }}
                                />
                                Nuestra empresa esta legalmente constituida en
                                el Ecuador.
                            </li>
                            <li className="mb-2 flex items-center gap-[10px]">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    style={{ color: '#06ea87' }}
                                />
                                Contamos con profesionales capacitados, para las
                                respectivas implementaciones y actualizaciones.
                            </li>
                            <li className="mb-2 flex items-center gap-[10px]">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    style={{ color: '#06ea87' }}
                                />
                                Está dedicado para personas naturales y personas
                                jurídicas.
                            </li>
                        </ul>
                        <p className="text-sm lg:text-base mb-0">
                            Como Empresa, garantizamos nuestro servicios, nos
                            convertimos en un pilar fundamental, para acelerar
                            el crecimiento de tu negocio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
