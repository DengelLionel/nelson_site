import { useState, useEffect, useContext, useRef } from 'react'
import Dropdawn from './Dropdawn'
import Link from 'next/link'
import IconSub from '@/components/icons/IconSub'
import { PaginaContextValue } from '@/context/contextpaginaifno'
const MenuItems = ({ items, depthLevel, isHovered }) => {
    const [dropdawn, setDropdawn] = useState(false)
    let ref = useRef()
    const { setOpenSearch } = useContext(PaginaContextValue)
    useEffect(() => {
        const handler = event => {
            if (
                dropdawn &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setDropdawn(false)
            }
        }
        document.addEventListener('mousedown', handler)
        document.addEventListener('touchstart', handler)
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handler)
            document.removeEventListener('touchstart', handler)
        }
    }, [dropdawn])

    const onMouseEnter = () => {
        if (window.innerWidth > 960) {
            setDropdawn(true)
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth > 960) {
            setDropdawn(false)
        }
    }
    return (
        <li
            className="relative font-normal text-md text-white "
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {items.submenu ? (
                <>
                    <Link
                        className={`${
                            isHovered
                                ? 'text-black text-md hover:text-blueOne'
                                : 'text-white text-md'
                        } ${
                            depthLevel > 0 &&
                            ' hover:text-blancoOne text-blueOne hover:bg-blueOne'
                        }  transition-all duration-[800ms] font-notosans text-md font-medium flex flex-row items-center justify-between text-left px-[10px] py-[15px] w-full `}
                        type="button"
                        href={`${
                            items.coleccion.length > 0
                                ? '/coleccion' + items.enlace
                                : items.enlace === '/servicios'
                                ? '#'
                                : items.enlace
                        }`}
                        aria-haspopup="menu"
                        aria-expanded={dropdawn ? 'true' : 'false'}
                        onClick={() => {
                            setDropdawn(prev => !prev)
                            setOpenSearch(false)
                        }}>
                        {items.nombre}{' '}
                        {items.submenu &&
                            items.submenu.length > 0 &&
                            depthLevel > 0 && (
                                <IconSub
                                    status={dropdawn}
                                    clase={`rotate-360   transition-all duration-[500ms]`}
                                />
                            )}
                    </Link>
                    <Dropdawn
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdawn={dropdawn}
                    />
                </>
            ) : (
                <Link
                    className={`${
                        isHovered
                            ? 'text-black'
                            : 'text-blueOne font-notosans font-medium hover:bg-blueOne hover:text-blancoOne'
                    }   block text-left text-md px-2 py-1 w-full`}
                    href={`${
                        items.coleccion.length > 0
                            ? '/coleccion' + items.enlace
                            : items.enlace
                    }`}>
                    {items.nombre}
                </Link>
            )}
        </li>
    )
}

export default MenuItems
