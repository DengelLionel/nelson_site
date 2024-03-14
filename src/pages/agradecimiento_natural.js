import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import Footer from '@/components/paginainfo/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>Agradecimiento Persona Natural- InvoExpressEc</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white">
                <p
                    style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        paddingTop: '100px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        paddingBottom: '50px',
                        color: '#274c77',
                    }}>
                    GRACIAS POR ENVIAR AL FORMULARIO DE PERSONA NATURAL, LOS
                    DATOS SE ENVIARON CORRECTAMENTE
                </p>
            </main>
            <Footer />
        </>
    )
}
