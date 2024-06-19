import React from 'react'
import IconWhatsapp from '../icons/IconWhatsapp'
import Link from 'next/link'
const Whatsapp = () => {
    return (
        <Link
            target="_blank"
            href="https://wa.me/message/IRPE6QC6OGYMK1"
            className="transition-all duration-[500ms] w-[60px] h-[60px] lg:w-[65px] lg:h-[65px] shadow-lg fixed bottom-[20px] z-[9999] left-[10px] lg:bottom-[10px] flex items-center justify-center rounded-full bg-verde hover:bg-verde_hover">
            <IconWhatsapp />
        </Link>
    )
}

export default Whatsapp
