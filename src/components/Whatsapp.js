import React from 'react'
import IconWhatsapp from './icons/IconWhatsapp'

const Whatsapp = () => {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <a
                href="https://wa.me/message/IRPE6QC6OGYMK1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 rounded-full p-3 shadow-lg transition-transform transform hover:scale-110 hover:bg-green-600">
                <IconWhatsapp />
            </a>
        </div>
    )
}

export default Whatsapp
