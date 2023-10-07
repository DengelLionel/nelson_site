import Link from 'next/link'

export default function Breadcrumbs({ actual }) {
    return (
        <div className=" py-3 sm:py-4 md:py-5 bg-gray-200 min-h-10 mt-[100px]">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    {actual === 'requisitos' && (
                        <h3 className="text-sm text-gray-600 sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-0">
                            Enviar requisitos mediante Formulario en línea o
                            WhatsApp
                        </h3>
                    )}
                    <ol className="flex space-x-1 sm:space-x-2 list-none p-0 mb-2 text-xs sm:text-sm">
                        <li>
                            <Link
                                className="text-blue-500 hover:text-blue-700"
                                href="/">
                                Inicio
                            </Link>
                        </li>
                        <li className="pl-2">
                            <span className="pr-2 text-gray-600">/</span>
                            <span className="text-gray-500">{actual}</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
