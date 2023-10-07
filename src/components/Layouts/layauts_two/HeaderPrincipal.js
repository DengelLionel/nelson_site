import { useState, memo, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import IconMenuOne from '@/components/icons/IconMenuOne'
import IconClose from '@/components/icons/IconClose'
import IconFacebook from '@/components/icons/IconFacebook'
import IconInstagram from '@/components/icons/IconInstagram'
import IconYoutuve from '@/components/icons/IconYoutuve'
import IconosHover from './IconosHover'
const HeaderPrincipal = () => {
    const [active, setActive] = useState(false)
    const [selectedLink, setSelectedLink] = useState(null)
    const router = useRouter()
    const [error, setError] = useState(null)
    const Scroll = elemento => {
        // Verifica si estás en la página correcta
        if (
            router.pathname === '/solicitud_firma' ||
            router.pathname === '/requisitos'
        ) {
            // Navega a la página principal y espera a que se complete
            router
                .push('/')
                .then(() => {
                    // Una vez que se ha completado el enrutamiento, verifica si el window está definido
                    if (typeof window !== 'undefined') {
                        const destino = document.querySelector(elemento)
                        if (destino) {
                            // Realiza el desplazamiento
                            destino.scrollIntoView({ behavior: 'smooth' })
                            setSelectedLink(elemento)
                        }
                    }
                })
                .catch(err => setError(err)) // Captura cualquier error que pueda ocurrir durante el enrutamiento
        } else {
            // Si ya estás en la página principal, solo realiza el desplazamiento
            if (typeof window !== 'undefined') {
                const destino = document.querySelector(elemento)
                if (destino) {
                    destino.scrollIntoView({ behavior: 'smooth' })
                    setSelectedLink(elemento)
                }
            }
        }
    }

    const handleClick = () => {
        setActive(!active)
    }

    const menu = [
        { name: 'Inicio', enlace: '#inicio', link: false },
        { name: 'Nosotros', enlace: '#nosotros', link: false },
        { name: 'Planes', enlace: '#planes', link: false },
        { name: 'Distribuidores', enlace: '#distribuidores', link: false },
        {
            name: 'Factura Electrónica',
            enlace: 'https://invoexpress.com/',
            link: true,
        },
        { name: 'Contacto', enlace: '#contacto', link: false },
    ]

    useEffect(() => {
        const handleScroll = () => {
            menu.forEach(item => {
                if (item.link === false) {
                    if (typeof window !== 'undefined') {
                        const element = document.querySelector(item.enlace)
                        if (element) {
                            const rect = element.getBoundingClientRect()
                            if (
                                rect.top < window.innerHeight &&
                                rect.bottom >= 0
                            ) {
                                setSelectedLink(item.enlace)
                            }
                        }
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [error])

    return (
        <header className="fixed top-0 z-[9999] w-full flex flex-wrap shadow-md items-center justify-between p-5 bg-white">
            <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
                <Link
                    className="text-2xl font-bold leading-relaxed inline-block mr-[5px] py-2 whitespace-no-wrap  text-gray-800"
                    href="/">
                    InvoExpress Ec
                </Link>
                <div className="flex gap-[10px] lg:hidden">
                    <IconosHover IconComponet={IconFacebook} enlace="#" />
                    <IconosHover IconComponet={IconInstagram} enlace="#" />
                    <IconosHover IconComponet={IconYoutuve} enlace="#" />
                </div>

                <div className="lg:hidden" onClick={handleClick}>
                    {active ? (
                        <IconClose color={'#222222'} />
                    ) : (
                        <IconMenuOne color={'#222222'} />
                    )}
                </div>
            </div>
            <div
                className={`lg:flex flex-grow items-center ${
                    active ? ' flex' : ' hidden'
                }`}
                id="example-navbar-danger">
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    {menu?.map((name, index) => {
                        return (
                            <li className="nav-item" key={index}>
                                {name.link === true ? (
                                    <Link
                                        className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-500 hover:text-blueOne `}
                                        target={
                                            name.name === 'Factura Electrónica'
                                                ? '_blank'
                                                : '_self'
                                        }
                                        href={name.enlace}>
                                        {name.name}
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => Scroll(name.enlace)}
                                        className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug ${
                                            selectedLink === name.enlace
                                                ? 'font entrabold text-blueOne'
                                                : 'text-gray-500'
                                        } 
                                hover:text-blueOne  `}>
                                        {name.name}
                                    </button>
                                )}
                            </li>
                        )
                    })}
                    <li className=" gap-[10px] hidden lg:flex ">
                        <IconosHover IconComponet={IconFacebook} enlace="#" />
                        <IconosHover IconComponet={IconInstagram} enlace="#" />
                        <IconosHover IconComponet={IconYoutuve} enlace="#" />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default memo(HeaderPrincipal)
