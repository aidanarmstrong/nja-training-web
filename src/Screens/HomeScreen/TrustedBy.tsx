import Slider from "react-slick";
import Pipeline from "@/assets/images/partners/pipeline-technics.png";
import NationallyRecognised from "@/assets/images/partners/nationally-recognised-training.png";
import FullTilt from "@/assets/images/partners/FTT_LOGO.png";
import SMGCivil from "@/assets/images/partners/smg-civil.png";
import DelacyCivil from "@/assets/images/partners/delacy-civil.png";

export const TrustedBy = () => {
    const logos = [
        {
            src: Pipeline,
            alt: "Pipeline Technics",
            website_url: "https://www.pipelinetechnics.com.au",
        },
        {
            src: SMGCivil,
            alt: "SMG Civil",
        },
        {
            src: FullTilt,
            alt: "Full Tilt Training Solutions",
            website_url: "https://fulltilttraining.com.au/",
        },
        {
            src: DelacyCivil,
            alt: "Delacy Civil",
        },
        {
            src: NationallyRecognised,
            alt: "Nationally Recognised Training",
            website_url: "https://training.gov.au/",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 10000,
        arrows: false, 
        slidesToShow: 4, // number of logos visible
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // continuous scroll
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

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

                {/* Carousel */}
                <Slider {...settings} className="flex items-center">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex justify-center px-4">
                            {logo.website_url ? (
                                <a href={logo.website_url} target="_blank" rel="noopener noreferrer">
                                    <img 
                                        src={logo.src} 
                                        alt={logo.alt} 
                                        className="h-28 sm:h-36 lg:h-32 object-contain invert brightness-0 saturate-0 opacity-80 hover:opacity-100"
                                    />
                                </a>
                            ) : (
                                <img 
                                    src={logo.src} 
                                    alt={logo.alt} 
                                    className="h-28 sm:h-36 lg:h-32 object-contain invert brightness-0 saturate-0 opacity-80 hover:opacity-100"
                                />
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};
