import IconosHover from '../Layouts/layauts_two/IconosHover'
import IconFacebook from '@/components/icons/IconFacebook'
import IconInstagram from '@/components/icons/IconInstagram'
import IconYoutuve from '@/components/icons/IconYoutuve'
export default function Footer() {
    return (
        <footer id="footer" className="bg-gray-200 py-8 text-gray-800 text-sm">
            <div className="footer-top bg-white py-16 border-t-2 border-gray-300 border-b-2">
                <div className="container mx-auto">
                    <div className="lg:w-1/4 md:w-1/2 w-full">
                        <div className="footer-info mb-8">
                            <h3 className="text-xl font-bold mb-4 px-2 text-gray-900">
                                InvoExpress-Ec
                            </h3>
                            <div className="social-links mt-3 flex space-x-2 p-[16px]">
                                <IconosHover
                                    IconComponet={IconFacebook}
                                    enlace="#"
                                />

                                <IconosHover
                                    IconComponet={IconInstagram}
                                    enlace="#"
                                />
                                <IconosHover
                                    IconComponet={IconYoutuve}
                                    enlace="#"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Other footer columns go here */}
                </div>
            </div>

            <div className="container mx-auto text-center text-gray-600 py-8">
                <div className="copyright">
                    &copy; Copyright{' '}
                    <strong>
                        <span className="text-blueOne">invoexpress</span>
                    </strong>
                    . All Rights Reserved
                </div>
            </div>
        </footer>
    )
}
