import { useState } from 'react'
import Image from 'next/legacy/image'
const Features = () => {
    const [activeTab, setActiveTab] = useState(1)

    const features = [
        {
            id: 1,
            title: 'SERCOP',
            desc: 'Participa en los procesos de contratación del Sercop.',
        },
        {
            id: 2,
            title: 'QUIPUX',
            desc: 'Para el Proceso de la Gestión Documental.',
        },
        {
            id: 3,
            title: 'SRI',
            desc:
                'Autoriza tus documentos electrónicos y para trámites en SRI.',
        },
        {
            id: 4,
            title: 'SERVIDORES PÚBLICOS',
            desc: 'Para todo trámite requerido por la entidad.',
        },
        {
            id: 5,
            title: 'FIRMA EC',
            desc: 'Firma y valida toda la documentación requerida.',
        },
        {
            id: 6,
            title: 'OTROS',
            desc:
                'Supercias, Consejo de la Judicatura, Médicos, PolicÍas, Militares, Profesionales, etc...',
        },
    ]

    return (
        <section id="features" className="features bg-white pt-16 pb-10">
            <div className="container mx-auto px-4 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-6 items-start">
                    <div className="order-2 lg:order-1 mt-2 lg:mt-0">
                        <ul className="space-y-2">
                            {features.map(feature => (
                                <li
                                    key={feature.id}
                                    className={`p-4 rounded-lg shadow-sm bg-white transition-all duration-300 ease-in-out ${
                                        activeTab === feature.id
                                            ? 'border-l-4 border-blue-400 bg-gray-100'
                                            : 'border-l-4 border-transparent'
                                    }`}
                                    data-aos="fade-up"
                                    data-aos-delay={`${feature.id * 100}`}
                                    onClick={() => setActiveTab(feature.id)}>
                                    <div className="flex flex-col cursor-pointer">
                                        <h4
                                            className={`text-lg font-semibold transition-all duration-300 ease-in-out ${
                                                activeTab === feature.id
                                                    ? 'text-blue-400'
                                                    : 'text-gray-800'
                                            } mb-2`}>
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-600">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 lg:order-2" data-aos="zoom-in">
                        <div className="tab-content">
                            {features.map(tab => (
                                <div
                                    className={`tab-pane ${
                                        activeTab === tab.id
                                            ? 'block opacity-100 transition-opacity duration-500 ease-out'
                                            : 'hidden'
                                    }`}
                                    id={`tab-${tab.id}`}
                                    key={tab.id}>
                                    <figure className="w-full h-64 lg:h-[500px] relative">
                                        <Image
                                            src={`/img/features-${tab.id}.png`}
                                            alt="feature"
                                            layout="fill"
                                            objectFit="contain"
                                            className="rounded-lg"
                                        />
                                    </figure>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
