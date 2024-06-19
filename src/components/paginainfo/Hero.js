import Image from 'next/legacy/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section
            id="inicio"
            className="w-full h-auto bg-right-top bg-no-repeat bg-contain pt-16 pb-16 mt-16 px-4 sm:px-8 md:px-16 lg:px-0 lg:bg-fixed"
            style={{ backgroundImage: 'url(/img/hero-bg.png)' }}>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div
                        className="pt-5 lg:pt-0 lg:pl-[30px] flex flex-col justify-center text-center lg:text-left"
                        data-aos="fade-up">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-none lg:leading-snug text-gray-700 mb-5">
                            Firma Electrónica para Personas Naturales y
                            Jurídicas
                        </h1>
                        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-5">
                            En archivo P12 - En Nube (App)
                        </h2>
                        <h2 className="text-xs sm:text-sm md:text-base lg:text-base text-gray-600 mb-8">
                            Solicita tu firma de manera segura, nuestro sistema
                            esta diseñado para proteger y garantizar el derecho
                            a la protección de tus datos personales.
                        </h2>
                        <div>
                            <Link
                                target="_blank"
                                className="inline-block px-7 py-3 text-sm uppercase tracking-widest text-white bg-blue-500 rounded transition duration-500 hover:bg-blue-600"
                                href="https://partner.invoexpress.com/solicitudes-firmas.php">
                                Requisitos
                            </Link>
                            <Link
                                target="_blank"
                                className="inline-block px-7 py-3 text-sm uppercase tracking-widest text-white bg-blue-500 rounded transition duration-500 hover:bg-blue-600 ml-2"
                                href="https://partner.invoexpress.com/solicitudes-firmas.php">
                                Solicitar
                            </Link>
                        </div>
                        <div id="respuesta" className="mt-2">
                            {/*  
            <div id="respuesta_exito" className="bg-green-500 text-white p-2 m-2">
              {status}
            </div> 
            */}
                        </div>
                    </div>
                    <div
                        className="relative w-full h-64 sm:h-96 md:h-[500px] lg:h-[300px] text-center"
                        data-aos="fade-left">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src="/img/hero-img.png"
                            alt="Hero image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
