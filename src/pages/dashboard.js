import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import CreandoInformacion from '@/components/CreandoInformacion'
import ListaInformacion from '@/components/ListaInformacion'
const Dashboard = () => {
    return (
        <AppLayout
            header={
                <div>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight" />
                </div>
            }>
            <Head>
                <title>Dashboard Nexomedic</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" />
                <CreandoInformacion />
                <ListaInformacion />
            </div>
        </AppLayout>
    )
}

export default Dashboard
