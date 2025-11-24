import { Navbar, Footer } from "../../Components";

export const NotFoundScreen = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 font-sans">
                {/* Background orange glow blobs */}
                <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-gradient-to-tr from-primary via-[#FF8C00]/30 to-[#FF6600]/20 animate-blob filter blur-3xl opacity-70"></div>
                    <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-primary via-[#FF6600]/30 to-[#FF8C00]/20 animate-blob animation-delay-2000 filter blur-3xl opacity-60"></div>
                    <div className="absolute bottom-12 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-primary via-[#FF6600]/20 to-[#FF5500]/10 animate-blob animation-delay-4000 filter blur-2xl opacity-50"></div>
                </div>

                <main className="flex-grow flex flex-col justify-center items-center text-center px-6 sm:px-12 max-w-4xl mx-auto">
                    <h1 className="text-[10rem] font-extrabold tracking-tight select-none text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FF8C00] to-[#FF5500] drop-shadow-lg">
                        404
                    </h1>

                    <h2 className="text-4xl sm:text-5xl font-semibold mb-6 tracking-wide text-white">
                        Oops! Page Not Found
                    </h2>

                    <p className="max-w-xl mx-auto text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
                        The page you’re looking for has taken a break from the roster. Let’s
                        get you back on track and back to your FIFO life!
                    </p>

                    <a
                        href="/"
                        className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-[#FF8C00] hover:from-primary hover:to-[#FF7700] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
                        aria-label="Back to Home"
                    >
                        <svg
                            className="w-6 h-6 -ml-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                        <span>Back to FIFO Home</span>
                    </a>
                </main>
                
                <Footer />             
            </div>
        </>
    );
};
