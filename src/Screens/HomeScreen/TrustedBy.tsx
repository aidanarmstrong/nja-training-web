import AustraliaGov from "@/assets/images/partners/australian-gov.png"
import WAGov from "@/assets/images/partners/wa-government.png"
import NationallyRecognised from "@/assets/images/partners/nationally-recognised-training.png"
import FullTilt from "@/assets/images/partners/FTT_LOGO.png"

export const TrustedBy = () => {
    return (
        <>
            <section 
                id="trustedby"
                className="w-full bg-gray-800 py-16"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                            Trusted By Industry & Training Partners
                        </h2>
                        <p className="mt-3 text-white/70 text-lg max-w-2xl mx-auto">
                            NJA Training Solutions proudly aligns with recognised Australian 
                            training bodies and organisations across Western Australia.
                        </p>
                    </div>

                    {/* Logo Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-10 items-center justify-center">

                        {/* Government of Western Australia Logo */}
                        <div className="flex justify-center opacity-80 hover:opacity-100 transition">
                            <img 
                                src={WAGov}
                                alt="Government of Western Australia"
                                className="h-16 object-contain invert brightness-0 saturate-0"
                            />
                        </div>
                        {/* Full Tilt */}
                        <div className="flex justify-center opacity-80 hover:opacity-100 transition">
                            <img 
                                src={FullTilt}
                                alt="Full Tilt Training Solutions"
                                className="h-[100px] object-contain invert brightness-0 saturate-0"
                                
                            />
                        </div>

                        {/* Australian Government – Education / Skills */}
                        <div className="flex justify-center opacity-80 hover:opacity-100 transition">
                            <img 
                                src={AustraliaGov}
                                alt="Australian Government Training"
                                className="h-16 object-contain invert brightness-0 saturate-0"
                                
                            />
                        </div>

                        {/* RTO / Training Compliance Logo */}
                        <div className="flex justify-center opacity-80 hover:opacity-100 transition">
                            <img 
                                src={NationallyRecognised}
                                alt="Nationally Recognised Training"
                                className="h-16 object-contain invert brightness-0 saturate-0"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
