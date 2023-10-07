import React from 'react'
import CuadroAreas from './CuadroAreas'

import EquiposLaboratorio from '../icons/EquiposLaboratorio'
import EquiposVeterinarios from '../icons/EquiposVeterinarios'

import EquiposMedicos from '../icons/EquiposMedicos'
const NuestrasAreas = () => {
    return (
        <div className="flex flex-col items-center mt-[25px]">
            <h2 className="text-negro font-extrabold md:text-[20px] mb-[20px] lg:text-[24px]">
                Nuestras Áreas
            </h2>
            <div className="flex flex-wrap gap-[16px] justify-center items-center w-full">
                <CuadroAreas
                    titulo="EQUIPOS MEDICOS"
                    IconComponent={EquiposMedicos}
                    link={'/coleccion/equipos-medicos'}
                />
                <CuadroAreas
                    titulo="EQUIPOS DE LABORATORIO"
                    IconComponent={EquiposLaboratorio}
                    link={'/coleccion/equipos-de-laboratorio'}
                />
                <CuadroAreas
                    titulo="EQUIPOS VETERINARIOS"
                    IconComponent={EquiposVeterinarios}
                    link={'/coleccion/equipos-veterinarios'}
                />
            </div>
        </div>
    )
}

export default NuestrasAreas
