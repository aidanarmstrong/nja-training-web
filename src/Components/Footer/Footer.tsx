import { FaFacebookF, FaInstagram, FaTiktok} from 'react-icons/fa';
import { Logo } from '../../assets';
import FullTiltLogo from '../../assets/images/FTT_LOGO.png';

export const Footer = () => {

    return (
        <footer className="bg-slate-800 text-slate-300 py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    {/* Logo Block */}
                    <div className="flex items-center justify-start mb-3">
                        <img className="h-12 w-auto" src={Logo} alt="NJA Training Solutions Logo" />
                    </div>

                    <h4 className="text-white font-semibold">NJA Training Solutions</h4>

                    <p className="mt-2 text-sm text-slate-300">
                        Practical, hands-on training for plant operators. Experienced trainers, flexible delivery, and industry-ready skills.
                    </p>

                   <div className="flex flex-col items-center sm:items-start mt-10 text-center sm:text-left md:mt-2">
                        <img 
                            src={FullTiltLogo}
                            alt="Full Tilt Training Solutions Logo"
                            className="max-w-[250px] w-full opacity-90 mb-2"
                        />

                        <p className="text-xs text-slate-400 leading-tight max-w-xs">
                            NJA Training Solutions delivers training and assessment on behalf of  
                            <span className="font-semibold text-slate-200"> Full Tilt Training Solutions (RTO 52793)</span>,  
                            the issuing RTO for all nationally recognised Statements of Attainment.
                        </p>
                    </div>

                </div>



                <div>
                    <h4 className="text-white font-semibold">Quick links</h4>
                    <ul className="mt-2 text-sm space-y-2">
                        <li><a href="#courses" className="underline">Courses</a></li>
                        <li><a href="#about" className="underline">About</a></li>
                        <li><a href="#contact" className="underline">Contact</a></li>
                    </ul>
                </div>
                {/* Social Links */}
                <div className="text-sm flex">
                    <div>
                        <h4 className="text-white font-semibold">Socials</h4>
                        <ul className="space-y-1">
                            <li>
                                <a
                                    className="flex items-center text-gray-100 hover:text-primary/90 transition duration-150 ease-in-out"
                                    href="https://www.facebook.com/njatrainingsolutions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebookF className="mr-2" /> Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    className="flex items-center text-gray-100 hover:text-primary/90 transition duration-150 ease-in-out"
                                    href="https://www.instagram.com/njatrainingsolutions/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className="mr-2" /> Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    className="flex items-center text-gray-100 hover:text-primary/90 transition duration-150 ease-in-out"
                                    href="https://www.instagram.com/njatrainingsolutions/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTiktok className="mr-2" /> TikTok
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold">Subscribe</h4>
                    <p className="text-sm mt-2">Get course updates and exclusive offers.</p>
                    <form className="mt-3 flex gap-2" onSubmit={(e) => { e.preventDefault(); alert('Subscribed — replace with real handler'); }}>
                        <input aria-label="Email" placeholder="Email address" className="flex-1 rounded px-3 py-2 text-sm bg-slate-700 border border-slate-600 text-white" />
                        <button className="bg-primary text-white px-4 py-2 rounded">Sign up</button>
                    </form>
                </div>
            </div>

            <div className="mt-8 text-center text-xs text-primary">© {new Date().getFullYear()} NJA Training Solutions. Registered training provider. All rights reserved.</div>
        </footer>
    )
};
