import Image from 'next/legacy/image'
const AdjuntarDoc = ({ label, handleChange, imagen_preview, pdf_preview }) => {
    return (
        <div className="flex items-center justify-center w-full px-6 py-6 bg-white border border-gray-300 border-dashed rounded-md shadow-sm hover:bg-gray-100 transition-all duration-300 ease-in-out">
            <div className="text-center flex flex-col items-center">
                {pdf_preview && (
                    <p>
                        Archivo seleccionado: {pdf_preview.name}, tamaño:{' '}
                        {pdf_preview.size} bytes
                    </p>
                )}
                {imagen_preview ? (
                    <div className=" flex flex-col justify-center items-center relative w-[180px] h-[180px]">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            alt="imagen"
                            src={imagen_preview}
                        />
                    </div>
                ) : (
                    <svg
                        className="w-12 h-12 mx-auto mb-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 48 48"
                        aria-hidden="true">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 32l6-6m-6 0l6 6m-6-6h36"
                        />
                    </svg>
                )}
                {/* {pdf ? (<p>Archivo seleccionado: {pdf.name}, tamaño: {pdf.size} bytes</p>):(
  <h2 className="mb-2 text-sm font-medium text-gray-600">Imagen</h2>
)} */}
                <p className="text-xs font-semibold text-gray-500">{label}</p>
                <div className="mt-4">
                    <label className="cursor-pointer max-w-[200px] bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-200">
                        <span>Seleccionar un archivo</span>
                        <input
                            type="file"
                            onChange={handleChange}
                            className="hidden"
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default AdjuntarDoc
