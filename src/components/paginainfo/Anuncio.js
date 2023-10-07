import { useContext } from 'react'
import IconTelefono from '../icons/IconTelefono'
import IconFacebook from '../icons/IconFacebook'
import IconInstagram from '../icons/IconInstagram'
import IconYoutuve from '../icons/IconYoutuve'
import Link from 'next/link'
import ItemBuscadorTwo from '../icons/ItemBuscadorTwo'
import IconClose from '../icons/IconClose'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import { useRedesSociales } from '@/hooks/useOtrosDatos'
import IconTwiter from '../icons/IconTwiter'
const Anuncio = () => {
    const { openSearch, setOpenSearch } = useContext(PaginaContextValue)
    const { facebook, youtube, instagram, twiter } = useRedesSociales()
    return (
        <div className="hidden md:flex md:flex-row md:h-[38px] md:w-full  md:justify-between md:items-center md:bg-plomo md:text-white md:pl-[90px] md:pr-[32px] md:font-medium">
            <span className="block lg:hidden">
                Siguenos en nuestras redes sociales
            </span>
            <span className="hidden lg:block ">/ ventas@nexomedic.com.pe/</span>
            <div className="md:flex md:flex-row md:items-center md:gap-[14px]">
                <div className="hidden lg:block lg:cursor-pointer">
                    {openSearch ? (
                        <IconClose open={() => setOpenSearch(!openSearch)} />
                    ) : (
                        <ItemBuscadorTwo
                            open={() => setOpenSearch(!openSearch)}
                        />
                    )}
                </div>
                <Link
                    target="_blank"
                    href={facebook !== undefined ? facebook : '#'}>
                    <IconFacebook fill="#EEEFF3" />
                </Link>
                <Link
                    target="_blank"
                    href={instagram !== undefined ? instagram : '#'}>
                    {' '}
                    <IconInstagram fill="#EEEFF3" />
                </Link>

                <Link
                    target="_blank"
                    href={youtube !== undefined ? youtube : '#'}>
                    {' '}
                    <IconYoutuve fill="#EEEFF3" />
                </Link>
                <Link
                    target="_blank"
                    href={twiter !== undefined ? twiter : '#'}>
                    {' '}
                    <IconTwiter fill="#EEEFF3" />
                </Link>
            </div>
            <Link
                href={'tel:+51017583872'}
                className="md:flex md:flex-row md:items-center md:gap-[14px] xl:hidden">
                <IconTelefono fill="#fafafa" />
                (511) 758-3872
            </Link>
        </div>
    )
}

export default Anuncio
