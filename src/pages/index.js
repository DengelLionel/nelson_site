import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import Hero from '@/components/paginainfo/Hero'
import About from '@/components/paginainfo/About'
import Features from '@/components/paginainfo/Features'
import Pricing from '@/components/paginainfo/Pricing'
import Services from '@/components/paginainfo/Services'
import ContactSection from '@/components/paginainfo/ContactSection'
import Footer from '@/components/paginainfo/Footer'
import Whatsapp from '@/components/paginainfo/Whatsapp'
export default function Home() {
    return (
        <>
            <Head>
                <title>Firmas Electrónicas - InvoExpressEc</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white">
                <Hero />
                <About />
                <Features />
                <Pricing />
                <Services />
                <ContactSection />
                <Whatsapp />
                {/*    <Servicios />
                <Info />
                <NuestrasAreas />
                <ProductosDestacados />
              
                <ConocePromocines />
                <Marcas />
                */}
            </main>
            <Footer />
        </>
    )
}
