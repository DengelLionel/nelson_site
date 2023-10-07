import React from 'react'
import CuadroProductos from './CuadroProductos'
import useSWR from 'swr'
import axios from '@/lib/axios'
const ProductosDestacados = () => {
    const data = useSWR('/api/producto_destacado', () =>
        axios.get('/api/producto_destacado').then(res => res.data),
    )
    const dato = data.data

    return (
        <div className="flex flex-col items-center mb-[100px] pt-[25px] transition-all duration-[500ms]">
            <h2 className="text-negro font-extrabold md:text-[20px] lg:text-[24px]">
                Productos Destacados
            </h2>
            <div className="flex flex-wrap gap-[16px] justify-center items-center mb-[20px] mt-[20px] w-full">
                {dato?.map((destacados, index) => (
                    <CuadroProductos
                        key={index}
                        imagen={destacados.product_imagen[0].imagen}
                        titulo={destacados.nombre}
                        link={`/producto/${destacados.meta_title_link}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductosDestacados
