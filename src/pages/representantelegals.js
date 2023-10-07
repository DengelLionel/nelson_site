import React from 'react'
import Head from 'next/head'
import Formulario from '@/components/representantelegal/Formulario'
const representantelegals = () => {
    return (
        <>
            <Head>
                <title>Firmas Electrónicas - InvoExpressEc</title>
            </Head>

            <main>
                <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-lg">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                SOLICITUD DE FIRMA ELECTRONICA
                            </h2>
                            <h5 className="mt-2 text-center text-lg text-gray-600">
                                PARA REPRESENTANTE LEGAL O PERSONA JURÍDICA
                            </h5>
                            <h5 className="mt-6">1.- DATOS DE LA EMPRESA</h5>
                        </div>

                        {/* Aquí irían tus errores, si existen, por ejemplo: */}
                        {/* errors && <div className="alert alert-danger"> { errors } </div> */}
                        <Formulario />

                        {/* Continua con el resto de campos de entrada... */}
                    </div>
                </div>
            </main>
        </>
    )
}

export default representantelegals
