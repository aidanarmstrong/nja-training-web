import Pipeline from "@/assets/images/partners/pipeline-technics.png";
import NationallyRecognised from "@/assets/images/partners/nationally-recognised-training.png";
import FullTilt from "@/assets/images/partners/FTT_LOGO.png";
import SMGCivil from "@/assets/images/partners/smg-civil.png";

export const TrustedBy = () => {
    const logos = [
        {
            src: Pipeline,
            alt: "Pipeline Technics",
            mobileHeight: "h-28 sm:h-36", // custom mobile height
            desktopHeight: "lg:h-[120px]", // custom desktop height
            website_url: "https://www.pipelinetechnics.com.au"
        },
        {
            src: SMGCivil,
            alt: "SMG Civil",
            mobileHeight: "h-28 sm:h-36", // custom mobile height
            desktopHeight: "lg:h-[120px]", // custom desktop height
        },
        {
            src: FullTilt,
            alt: "Full Tilt Training Solutions",
            mobileHeight: "h-28 sm:h-36",
            desktopHeight: "lg:h-[120px]",
            website_url: "https://fulltilttraining.com.au/"
        },
        {
            src: NationallyRecognised,
            alt: "Nationally Recognised Training",
            mobileHeight: "h-16",
            desktopHeight: "lg:h-20",
            website_url: "https://training.gov.au/"
        },
    ];

    return (
        <section id="trustedby" className="w-full bg-gray-800 py-16">
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

                {/* Logos */}
                {logos.length === 3 ? (
                // Reversed Pyramid layout for 3 logos
                    <div className="flex flex-col items-center gap-8">

                        {/* Top row - two smaller logos */}
                        <div className="flex gap-10">
                            {[logos[0], logos[1]].map((logo, index) => (
                                <div key={index} className="flex justify-center opacity-80 hover:opacity-100 transition">
                                    <img 
                                        src={logo.src} 
                                        alt={logo.alt} 
                                        className={`object-contain invert brightness-0 saturate-0 ${logo.mobileHeight} ${logo.desktopHeight}`} 
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Bottom row - largest logo */}
                        <div className="flex justify-center opacity-80 hover:opacity-100 transition">
                            <img 
                                src={logos[2].src} 
                                alt={logos[2].alt} 
                                className={`object-contain invert brightness-0 saturate-0 ${logos[2].mobileHeight} ${logos[2].desktopHeight}`} 
                            />
                        </div>

                    </div>
                ) : (
                    // Default grid for even number of logos
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-center">
                        {logos.map((logo, index) => (
                            <a 
                                key={index} 
                                className="flex justify-center opacity-80 hover:opacity-100 transition"
                                href={logo.website_url}
                                target="_blank"
                            >
                                <img 
                                    src={logo.src} 
                                    alt={logo.alt} 
                                    className={`object-contain invert brightness-0 saturate-0 ${logo.mobileHeight} ${logo.desktopHeight}`} 
                                />
                            </a>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};
