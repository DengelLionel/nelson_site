import React from 'react'
import Link from 'next/link'

function Pricing() {
    return (
        <section id="planes" className="container mx-auto py-6 px-4">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-semibold">
                    Planes de Firma Electrónica
                </h2>
                <p className="text-lg text-gray-600">
                    Elije el plan que más te convenga.
                </p>
            </div>

            <div className="flex flex-wrap justify-center">
                <Plan
                    title="Plan 7 Días"
                    price="8.50"
                    features={[
                        'Vigencia - 7 Días',
                        'Sin Ruc',
                        'Personas Naturales',
                        'Generación de Firma en línea',
                        'Trámites Públicos y Privado',
                        'Tu Firma de 30 a 60 minutos',
                        'Asesoria personalizada',
                    ]}
                    link="/ruta-de-compra"
                />
                <Plan
                    title="Plan 30 Días"
                    price="10.50"
                    features={[
                        'Vigencia - 30 Días',
                        'Con o Sin Ruc',
                        'Personas Naturales',
                        'Generación de Firma en línea',
                        'Trámites Públicos y Privado',
                        'Tu Firma de 30 a 60 minutos',
                        'Asesoria personalizada',
                    ]}
                    link="/ruta-de-compra"
                />
                <Plan
                    title="Plan 1 Año"
                    price="18"
                    features={[
                        'Vigencia - 1 Año',
                        'Con o Sin Ruc',
                        'Personas Naturales',
                        'Personas Jurídicas',
                        'Tu Firma de 30 a 60 minutos',
                        'Opcional Facturacion Electronica:',
                        'Por $5.00 Recibes 100 Facturas',
                    ]}
                    link="/ruta-de-compra"
                />
                <Plan
                    title="Plan 2 Años"
                    price="28"
                    features={[
                        'Vigencia - 2 Años',
                        'Con o Sin Ruc',
                        'Personas Naturales',
                        'Personas Jurídicas',
                        'Tu Firma de 30 a 60 minutos',
                        'Opcional Facturacion Electronica:',
                        'Por $5.00 Recibes 100 Facturas',
                    ]}
                    link="/ruta-de-compra"
                />
                <Plan
                    title="Plan 3 Años"
                    price="38"
                    features={[
                        'Vigencia - 3 Años',
                        'Con o Sin Ruc',
                        'Personas Naturales',
                        'Personas Jurídicas',
                        'Tu Firma de 30 a 60 minutos',
                        'Opcional Facturacion Electronica:',
                        'Por $5.00 Recibes 100 Facturas',
                    ]}
                    link="/ruta-de-compra"
                />
                <Plan
                    title="Plan 4 Años"
                    price="48"
                    features={[
                        'Vigencia - 4 Años',
                        'Con o Sin Ruc',
                        'Personas Naturales',
                        'Personas Jurídicas',
                        'Tu Firma de 30 a 60 minutos',
                        'Opcional Facturacion Electronica:',
                        'Por $5.00 Recibes 100 Facturas',
                    ]}
                    link="/ruta-de-compra"
                />
                <Plan
                    title="Plan 5 Años"
                    price="57"
                    features={[
                        'Vigencia - 5 Años',
                        'Con o Sin Ruc',
                        'Personas Naturales',
                        'Personas Jurídicas',
                        'Tu Firma de 30 a 60 minutos',
                        'Opcional Facturacion Electronica:',
                        'Por $5.00 Recibes 100 Facturas',
                    ]}
                    link="/ruta-de-compra"
                />
            </div>
        </section>
    )
}
const Plan = ({ title, price, features, link }) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="border border-gray-300 rounded p-4 overflow-hidden relative">
                <span className="absolute top-[24px] right-[-40px] transform  rotate-45 bg-blue-500 text-white px-10 py-1 text-sm font-semibold tracking-wider">
                    100% Segura
                </span>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {title}
                </h3>
                <h4 className="text-4xl font-bold text-blue-500 mb-4">
                    <sup className="text-2xl">$</sup>
                    {price}
                    <span className="text-base text-gray-400">
                        {' '}
                        / Incluye Iva
                    </span>
                </h4>
                <ul className="mb-4 flex flex-col items-center">
                    {features.map((feature, i) => (
                        <li key={i} className="text-gray-700 mb-2">
                            {feature}
                        </li>
                    ))}
                </ul>
                <div className="text-center">
                    <Link
                        target="_blank"
                        className="inline-block bg-blue-500 text-white px-8 py-2 rounded"
                        href={link}>
                        Comprar
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing
