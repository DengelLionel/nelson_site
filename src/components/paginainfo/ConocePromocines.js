import React from 'react'
import Link from 'next/link'
const ConocePromociones = () => {
    return (
        <Link
            href={'/contactanos'}
            className="w-[120px] h-[120px] rounded-full bg-plomo flex justify-center items-center fixed bottom-[280px] right-0 z-[9998] mb-4 mr-4">
            <div className="w-[110px] h-[110px] rounded-full bg-plomo border-[1px] border-blancoOne flex justify-center items-center">
                <span className="text-blancoOne text-[14px] text-center">
                    CONOCE nuestras Promociones del mes
                </span>
            </div>
        </Link>
    )
}

export default ConocePromociones
