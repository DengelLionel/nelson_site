import { useContext, useState, useEffect } from 'react'
import MenuItems from './MenuItems'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import { useDatosMenu } from '@/hooks/useDatosMenu'
import Image from 'next/legacy/image'
import IconTelefono from '@/components/icons/IconTelefono'
import Link from 'next/link'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import IconBuscador from '@/components/icons/IconBuscador'
import FondoOscurecido from '@/components/paginainfo/FondoOscurecido'
const NavBar = () => {
    const { datos } = useDatosMenu()
    const router = useRouter()
    const {
        isOopen,
        setOpenSearch,
        openSearch,
        setSearch,
        setErrorSearch,
        datobuscar,
        setDatobuscar,
    } = useContext(PaginaContextValue)
    const [isHovered, setIsHovered] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [bgColor, setBgColor] = useState('lg:bg-transparent')
    const [topPosition, setTopPosition] = useState('top-[40px]')
    const handleInputChange = event => {
        setDatobuscar(event.target.value)
    }

    const handleSearch = () => {
        // Aquí es donde deberías hacer la petición al servidor.
        // Por ejemplo, puedes hacerlo con Axios de esta manera:
        axios
            .get(`/api/search?query=${datobuscar}`)
            .then(res => setSearch(res.data))
            .catch(err => setErrorSearch(err))
        setOpenSearch(false)
        router.push('/search')
    }

    const updateScrollPosition = () => {
        const position = window.scrollY || document.documentElement.scrollTop
        setScrollPosition(position)
        setBgColor(
            position > 50
                ? 'lg:bg-plomo'
                : isHovered
                ? 'lg:bg-white'
                : 'lg:bg-transparent',
        )
        setTopPosition(position > 50 ? 'top-0' : 'top-[40px]')
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', updateScrollPosition)
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', updateScrollPosition)
            }
        }
    }, [isHovered])

    const handleMouseEnter = () => {
        setIsHovered(true)
        setBgColor('lg:bg-white')
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        setBgColor(scrollPosition > 50 ? 'lg:bg-plomo' : 'lg:bg-transparent')
    }

    return (
        <nav
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${bgColor} ${topPosition} 
                    hidden lg:fixed lg:z-[999] lg:transition-all lg:duration-[800ms] lg:shadow  lg:flex 
                    lg:justify-between lg:items-center lg:h-[80px] lg:w-full 
                    lg:border-b-[0.5px] lg:pr-[40px] lg:shadow-xl lg:pl-[40px] xl:pr-[78px] xl:pl-[78px]
                    lg:border-white lg:border-opacity-25`}>
            <div className="flex justify-between items-center">
                <div className="relative w-[266px] h-[60px] ">
                    <Link href={'/'}>
                        <Image
                            layout="fill"
                            quality={100}
                            objectFit="contain"
                            src={`${
                                bgColor === 'lg:bg-white'
                                    ? 'https://res.cloudinary.com/dxvqyh8ib/image/upload/v1688609786/NEXOMEDIC/LOGO_DE_COLOR_unovda.png'
                                    : 'https://res.cloudinary.com/dxvqyh8ib/image/upload/v1688609786/NEXOMEDIC/TRANSPARANTE_tzfj6x.png'
                            }`}
                            alt="Nexomedic"
                        />
                    </Link>
                </div>
            </div>

            <div className={`${isOopen ? 'block' : 'hidden'} md:block`}>
                <ul className="md:flex  list-none p-0 m-0 md:gap-[30px]">
                    {datos?.map((menu, index) => {
                        const depthLevel = 0
                        return (
                            <MenuItems
                                items={menu}
                                key={index}
                                depthLevel={depthLevel}
                                isHovered={isHovered}
                            />
                        )
                    })}
                </ul>
                {/* BUSCANDO */}
                <FondoOscurecido open={openSearch} />
                {openSearch && (
                    <div
                        className={`absolute right-0 w-full h-[150px] z-[555] bg-white`}>
                        <div
                            className={` w-full h-[150px]  bg-white ${
                                openSearch ? 'opacity-100' : 'opacity-0'
                            }`}>
                            <div className="pt-[50px] pl-[20px] pr-[20px] flex flex-row gap-[20px] items-center justify-center text-gray-600 relative">
                                <input
                                    className="border-2 w-[600px] border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                    type="search"
                                    name="search"
                                    value={datobuscar}
                                    onChange={handleInputChange}
                                    placeholder="Buscar"
                                />
                                <button
                                    onClick={handleSearch}
                                    type="button"
                                    className="absolute cursor-pointer top-[75%] md:right-[30%] lg:right-[24%] transform -translate-y-1/2 bg-transparent w-[30px] h-[30px]">
                                    <IconBuscador fill="#2F6AAD" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Link
                href={'tel:+517583872'}
                className={`${
                    isHovered
                        ? 'lg:text-black hover:text-blueOne'
                        : 'lg:text-white'
                }  hidden xl:flex xl:flex-row xl:items-center font-notosans font-medium lg:gap-[8px] lg:transiton-all lg:duration-[800ms]`}>
                <IconTelefono fill={`${isHovered ? '#222222' : '#EEEFF3'}`} />
                (511) 758-3872
            </Link>
        </nav>
    )
}

export default NavBar
