import React from 'react'
import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import Footer from '@/components/paginainfo/Footer'
import Breadcrumbs from '@/components/paginainfo/Breadcrumbs'
import Link from 'next/link'
const solicitud_firma = () => {
    return (
        <>
            <Head>
                <title>Solicitud firma - InvoExpressEc</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white">
                <Breadcrumbs actual={'Solicitud firma electrónica'} />
                <div className="container mx-auto px-4 md:px-0">
                    <h2 className="text-center text-2xl font-bold my-4">
                        SOLICITUD DE FIRMA ELECTRÓNICA
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                        <Link
                            className="px-4 py-2 text-center text-white bg-blue-500 rounded shadow-md hover:bg-blue-700 transition-colors"
                            href="/personanatural">
                            PERSONA NATURAL
                        </Link>
                        <Link
                            className="px-4 py-2 text-center text-white bg-blue-500 rounded shadow-md hover:bg-blue-700 transition-colors"
                            href="/representantelegals">
                            REPRESENTANTE LEGAL O PERSONA JURIDICA
                        </Link>
                        <Link
                            className="px-4 py-2 text-center text-white bg-blue-500 rounded shadow-md hover:bg-blue-700 transition-colors"
                            href="/miembrodelaempresa">
                            MIEMBRO DE LA EMPRESA
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default solicitud_firma
