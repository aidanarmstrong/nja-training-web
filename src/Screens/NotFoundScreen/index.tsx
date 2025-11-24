import { Navbar, Footer } from "../../Components";

export const NotFoundScreen = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">

                {/* Primary-colour soft glow */}
                <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full 
                        bg-primary/20 blur-[120px]"></div>
                    <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full 
                        bg-primary/10 blur-[140px]"></div>
                </div>

                <main className="flex-grow flex flex-col justify-center items-center text-center px-6 sm:px-12 max-w-4xl mx-auto h-screen">

                    <h1 className="text-[10rem] font-extrabold tracking-tight select-none 
                        text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                        404
                    </h1>

                    <h2 className="text-4xl sm:text-5xl font-semibold mb-6 tracking-wide text-slate-900">
                        Page Not Found
                    </h2>

                    <p className="max-w-xl mx-auto text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
                        Looks like this page has been moved or no longer exists. 
                        Let’s get you back to the NJA Training home page.
                    </p>

                    <a
                        href="/"
                        className="inline-flex items-center space-x-3 bg-primary hover:bg-primary/80 
                        text-white font-semibold py-3 px-8 rounded-lg shadow-md transition transform 
                        hover:-translate-y-0.5 hover:shadow-lg"
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
                        <span>Back to Home</span>
                    </a>
                </main>

                <Footer />
            </div>
        </>
    );
};
