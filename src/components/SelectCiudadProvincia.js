import React, { useContext } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'
// Asumiendo que tu JSON está en el archivo data.json
const dataApi = [
    {
        provincia: 'Azuay',
        ciudad: [
            'CAMILO PONCE ENRÍQUEZ',
            'CHORDELEG',
            'CUENCA',
            'EL PAN',
            'GIRÓN',
            'GUACHAPALA',
            'GUALACEO',
            'NABÓN',
            'OÑA',
            'PAUTE',
            'PUCARA',
            'SAN FERNANDO',
            'SANTA ISABEL',
            'SEVILLA DE ORO',
            'SIGSIG',
        ],
    },
    {
        provincia: 'Bolivar',
        ciudad: [
            'CALUMA',
            'CHILLANES',
            'CHIMBO',
            'ECHEANDÍA',
            'GUARANDA',
            'LAS NAVES',
            'SAN MIGUEL',
        ],
    },
    {
        provincia: 'Cañar',
        ciudad: [
            'AZOGUES',
            'BIBLIÁN',
            'CAÑAR',
            'DÉLEG',
            'EL TAMBO',
            'LA TRONCAL',
            'SUSCAL',
        ],
    },
    {
        provincia: 'Carchi',
        ciudad: [
            'BOLÍVAR',
            'ESPEJO',
            'MIRA',
            'MONTÚFAR',
            'SAN PEDRO DE HUACA',
            'TULCÁN',
        ],
    },
    {
        provincia: 'Chimborazo',
        ciudad: [
            'ALAUSI',
            'CHAMBO',
            'CHUNCHI',
            'COLTA',
            'CUMANDÁ',
            'GUAMOTE',
            'GUANO',
            'PALLATANGA',
            'PENIPE',
            'RIOBAMBA',
        ],
    },
    {
        provincia: 'Cotopaxi',
        ciudad: [
            'LA MANÁ',
            'LATACUNGA',
            'PANGUA',
            'PUJILI',
            'SALCEDO',
            'SAQUISILÍ',
            'SIGCHOS',
        ],
    },
    {
        provincia: 'El Oro',
        ciudad: [
            'ARENILLAS',
            'ATAHUALPA',
            'BALSAS',
            'CHILLA',
            'EL GUABO',
            'HUAQUILLAS',
            'LAS LAJAS',
            'MACHALA',
            'MARCABELÍ',
            'PASAJE',
            'PIÑAS',
            'PORTOVELO',
            'SANTA ROSA',
            'ZARUMA',
        ],
    },
    {
        provincia: 'Esmeralda',
        ciudad: [
            'ATACAMES',
            'ELOY ALFARO',
            'ESMERALDAS',
            'LA CONCORDIA',
            'MUISNE',
            'QUININDÉ',
            'RIOVERDE',
            'SAN LORENZO',
        ],
    },
    {
        provincia: 'Galapagos',
        ciudad: ['ISABELA', 'SAN CRISTÓBAL', 'SANTA CRUZ'],
    },
    {
        provincia: 'Guayas',
        ciudad: [
            'ALFREDO BAQUERIZO MORENO (JUJÁN)',
            'BALAO',
            'BALZAR',
            'COLIMES',
            'CORONEL MARCELINO MARIDUEÑA (SAN CARLOS)',
            'DAULE',
            'DURÁN',
            'EL EMPALME',
            'EL TRIUNFO',
            'GENERAL ANTONIO ELIZALDE',
            'GUAYAQUIL',
            'ISIDRO AYORA',
            'LOMAS DE SARGENTILLO',
            'MILAGRO',
            'NARANJAL',
            'NARANJITO',
            'NOBOL',
            'PALESTINA',
            'PEDRO CARBO',
            'PLAYAS',
            'SALITRE (URBINA JADO)',
            'SAMBORONDÓN',
            'SAN JACINTO DE YAGUACHI',
            'SANTA LUCÍA',
            'SIMÓN BOLÍVAR',
        ],
    },
    {
        provincia: 'Imbabura',
        ciudad: [
            'ANTONIO ANTE',
            'COTACACHI',
            'IBARRA',
            'OTAVALO',
            'PIMAMPIRO',
            'SAN MIGUEL DE URCUQUÍ',
        ],
    },
    {
        provincia: 'Loja',
        ciudad: [
            'CALVAS',
            'CATAMAYO',
            'CELICA',
            'CHAGUARPAMBA',
            'ESPÍNDOLA',
            'GONZANAMÁ',
            'LOJA',
            'MACARÁ',
            'OLMEDO',
            'PALTAS',
            'PINDAL',
            'PUYANGO',
            'QUILANGA',
            'SARAGURO',
            'SOZORANGA',
            'ZAPOTILLO',
        ],
    },
    {
        provincia: 'Los Rios',
        ciudad: [
            'BABA',
            'BABAHOYO',
            'BUENA FÉ',
            'MOCACHE',
            'MONTALVO',
            'PALENQUE',
            'PUEBLOVIEJO',
            'QUEVEDO',
            'QUINSALOMA',
            'URDANETA',
            'VENTANAS',
            'VÍNCES',
        ],
    },
    {
        provincia: 'Manabi',
        ciudad: [
            '24 DE MAYO',
            'BOLÍVAR',
            'CHONE',
            'EL CARMEN',
            'FLAVIO ALFARO',
            'JAMA',
            'JARAMIJÓ',
            'JIPIJAPA',
            'JUNÍN',
            'MANTA',
            'MONTECRISTI',
            'OLMEDO',
            'PAJÁN',
            'PEDERNALES',
            'PICHINCHA',
            'PORTOVIEJO',
            'PUERTO LÓPEZ',
            'ROCAFUERTE',
            'SAN VICENTE',
            'SANTA ANA',
            'SUCRE',
            'TOSAGUA',
        ],
    },
    {
        provincia: 'Morena Santiago',
        ciudad: [
            'GUALAQUIZA',
            'HUAMBOYA',
            'LIMÓN INDANZA',
            'LOGROÑO',
            'MORONA',
            'PABLO SEXTO',
            'PALORA',
            'SAN JUAN BOSCO',
            'SANTIAGO',
            'SUCÚA',
            'TAISHA',
            'TIWINTZA',
        ],
    },
    {
        provincia: 'Napo',
        ciudad: [
            'ARCHIDONA',
            'CARLOS JULIO AROSEMENA TOLA',
            'EL CHACO',
            'QUIJOS',
            'TENA',
        ],
    },
    {
        provincia: 'Orellana',
        ciudad: ['AGUARICO', 'LA JOYA DE LOS SACHAS', 'LORETO', 'ORELLANA'],
    },
    {
        provincia: 'Pastaza',
        ciudad: ['ARAJUNO', 'MERA', 'PASTAZA', 'SANTA CLARA'],
    },
    {
        provincia: 'Pichincha',
        ciudad: [
            'CAYAMBE',
            'MEJIA',
            'PEDRO MONCAYO',
            'PEDRO VICENTE MALDONADO',
            'PUERTO QUITO',
            'QUITO',
            'RUMIÑAHUI',
            'SAN MIGUEL DE LOS BANCOS',
        ],
    },
    {
        provincia: 'Santa Elena',
        ciudad: ['LA LIBERTAD', 'SALINAS', 'SANTA ELENA'],
    },
    {
        provincia: 'Sto. Domingo de los Tsachilas',
        ciudad: ['SANTO DOMINGO'],
    },
    {
        provincia: 'Sucumbios',
        ciudad: [
            'CASCALES',
            'CUYABENO',
            'GONZALO PIZARRO',
            'LAGO AGRIO',
            'PUTUMAYO',
            'SHUSHUFINDI',
            'SUCUMBÍOS',
        ],
    },
    {
        provincia: 'Tungurahua',
        ciudad: [
            'AMBATO',
            'BAÑOS DE AGUA SANTA',
            'CEVALLOS',
            'MOCHA',
            'PATATE',
            'QUERO',
            'SAN PEDRO DE PELILEO',
            'SANTIAGO DE PÍLLARO',
            'TISALEO',
        ],
    },
    {
        provincia: 'Zamora Chinchipe',
        ciudad: [
            'CENTINELA DEL CÓNDOR',
            'CHINCHIPE',
            'EL PANGUI',
            'NANGARITZA',
            'PALANDA',
            'PAQUISHA',
            'YACUAMBI',
            'YANTZAZA (YANZATZA)',
            'ZAMORA',
        ],
    },

    // Más regiones aquí...
]
const SelectCiudadProvincia = ({ errorciudad, errorprovincia }) => {
    const { provincia, setProvincia, setCiudad } = useContext(
        PaginaContextValue,
    )

    const handleProvinciaChange = event => {
        setProvincia(event.target.value)
    }

    const handleCiudadChange = event => {
        setCiudad(event.target.value)
    }

    const ciudades = dataApi.filter(ciudad => ciudad.provincia === provincia)

    return (
        <div>
            <div>
                <label htmlFor="provincia" className="sr-only">
                    Provincia
                </label>
                <select
                    onChange={handleProvinciaChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    name="provincia"
                    id="provincia">
                    <option defaultValue="Seleccione Provincia">
                        Seleccione Provincia
                    </option>
                    {dataApi.map((provincia, index) => (
                        <option key={index} value={provincia.provincia}>
                            {provincia.provincia}
                        </option>
                    ))}
                </select>
            </div>
            {errorprovincia}
            <div>
                <label htmlFor="ciudad" className="sr-only">
                    Ciudad
                </label>
                <select
                    onChange={handleCiudadChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    name="ciudad"
                    id="ciudad">
                    <option defaultValue="Seleccione ciudad">
                        Seleccione ciudad
                    </option>
                    {ciudades?.[0]?.ciudad.map((ciudad, index) => (
                        <option key={index} value={ciudad}>
                            {ciudad}
                        </option>
                    ))}
                </select>
            </div>
            {errorciudad}
        </div>
    )
}

export default SelectCiudadProvincia
