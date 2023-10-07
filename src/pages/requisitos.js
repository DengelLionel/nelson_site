import React from 'react'
import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import Footer from '@/components/paginainfo/Footer'
import Breadcrumbs from '@/components/paginainfo/Breadcrumbs'
import Blog from '@/components/paginainfo/Blog'
const requisitos = () => {
    const blog = [
        {
            titulo: 'Persona Natural sin RUC',
            img: '/img/blog/blog-1.jpg',
            lista: [
                {
                    indice:
                        'Foto de cedula o pasaporte a color, anverso y reverso.',
                },
                {
                    indice:
                        'Foto Selfie con la cédula o pasaporte debajo de la barbilla.',
                },
                { indice: 'Sin lentes, gorras, cabello no debe tapar orejas.' },
            ],
        },
        {
            titulo: 'Persona Natural con RUC',
            img: '/img/blog/blog-2.jpg',
            lista: [
                {
                    indice:
                        'Foto de cedula o pasaporte a color, anverso y reverso.',
                },
                {
                    indice:
                        'Foto Selfie con la cédula o pasaporte debajo de la barbilla.',
                },
                {
                    indice:
                        'RUC. en PDF, Sin lentes, gorras, cabello no debe tapar orejas.',
                },
            ],
        },
        {
            titulo: 'Representante Legal / Empresa',
            img: '/img/blog/blog-3.jpg',
            lista: [
                {
                    indice:
                        'Foto de cedula o pasaporte a color, anverso y reverso RL.',
                },
                {
                    indice:
                        'Foto Selfie con la cédula o pasaporte debajo de la barbilla.',
                },
                { indice: 'RUC. en PDF.' },
                { indice: 'Nombramiento vigente del R/L en PDF. (opcional)' },
                {
                    indice:
                        'Constitución de la empresa u organización PDF (opcional).',
                },
            ],
        },
        {
            titulo: 'Miembro de Empresa',
            img: '/img/blog/blog-4.jpg',
            lista: [
                {
                    indice:
                        'Foto de cedula o pasaporte a color, anverso y reverso RL.',
                },
                {
                    indice:
                        'Foto Selfie con la cédula o pasaporte debajo de la barbilla.',
                },
                {
                    indice:
                        'Sin lentes, sin gorras, cabello largo no debe tapar orejas.',
                },
                { indice: 'RUC. en PDF.' },
                { indice: 'Nombramiento vigente del R/L en PDF. (opcional)' },
                {
                    indice:
                        'Constitución de la empresa u organización PDF (opcional).',
                },
                {
                    indice: 'Carta de autorización del representante legal',
                    descargar:
                        '/img/Pdf/Carta Autorizacion Miembro de Empresa.docx',
                },
            ],
        },
    ]
    return (
        <>
            <Head>
                <title>Requisitos - InvoExpressEc</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white">
                <Breadcrumbs actual={'Requisitos'} />
                <section
                    id="blog"
                    className="bg-gray-50 py-8 md:py-12 lg:py-16 w-full">
                    <div
                        className=" mx-auto px-4 md:px-6 lg:px-8"
                        data-aos="fade-up">
                        <div className="flex items-center flex-wrap justify-center gap-[18px] lg:gap-[24px]">
                            {blog?.map((articulo, index) => (
                                <Blog
                                    key={index}
                                    img={articulo.img}
                                    titulo={articulo.titulo}
                                    lista={articulo.lista}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default requisitos
