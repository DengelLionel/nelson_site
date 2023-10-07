import React from 'react'

const InputDev = ({ valor, change, nombre }) => {
    return (
        <div>
            <label htmlFor={valor} className="sr-only">
                {nombre}
            </label>
            <input
                value={valor}
                onChange={change}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text"
                placeholder={nombre}
                name={valor}
                id={valor}
            />
        </div>
    )
}

export default InputDev
