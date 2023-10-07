import Head from 'next/head'
import Informacion from '@/components/personanatural/Informacion'
function Personanatural() {
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
                                Para personas naturales con o sin RUC
                            </h5>
                            <h5 className="mt-6">
                                1.- INFORMACIÓN DE PERSONA NATURAL
                            </h5>
                        </div>

                        {/* Aquí irían tus errores, si existen, por ejemplo: */}
                        {/* errors && <div className="alert alert-danger"> { errors } </div> */}
                        <Informacion />

                        {/* Continua con el resto de campos de entrada... */}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Personanatural
