import Link from 'next/link'
import Image from 'next/legacy/image'

export default function Blog({ img, titulo, lista }) {
    return (
        <article className="flex flex-col h-full bg-white shadow-md rounded-lg overflow-hidden">
            <div className=" w-full h-56 md:h-64 relative">
                <Image src={img} alt={titulo} objectFit="cover" layout="fill" />
            </div>
            <div className="p-6 flex flex-col justify-between">
                <div>
                    <h2 className="title text-lg md:text-xl font-semibold mb-4">
                        <Link
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800"
                            href="https://firmaelectronicaec.com/personanatural">
                            {titulo}
                        </Link>
                    </h2>
                    <div className="content text-sm text-gray-600">
                        <ol className="list-disc list-inside">
                            {lista?.map((list, index) => (
                                <li key={index}>
                                    {list.indice}{' '}
                                    {list.descargar && (
                                        <Link
                                            className="text-blue-500"
                                            href={list.descargar}>
                                            Descargar
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className=" mt-4 pt-4 border-t border-gray-200 flex justify-center space-x-4">
                    <Link
                        target="_blank"
                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-xl"
                        href="/img/Pdf/REQUISITOS PERSONA NATURAL SIN RUC FIRMA.pdf">
                        Precio
                    </Link>
                    <Link
                        target="_blank"
                        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-xl"
                        href="https://firmaelectronicaec.com/personanatural">
                        Llenar Formulario
                    </Link>
                    <Link
                        target="_blank"
                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-xl"
                        href="/img/Pdf/PASOS PARA DESCARGAR TU FIRMA.pdf">
                        Descargar Firma
                    </Link>
                </div>
            </div>
        </article>
    )
}
