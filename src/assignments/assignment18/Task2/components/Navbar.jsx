import { useContext } from "react"
import ScrollContext from "../context/ScrollContext"

const Navbar = () => {
    const { handleHomeScroll, handleAboutScroll, handleContactScroll } = useContext(ScrollContext)

    return (
        <>
            {/* Sticky navigation wrapper bar */}
            <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80 transition-colors duration-300">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    
                    {/* Brand Logo Anchor */}
                    <div className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                        Portfolio<span className="text-blue-600 dark:text-blue-400">.</span>
                    </div>

                    {/* Navigation Buttons Row */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <button 
                            onClick={handleHomeScroll}
                            className="px-4 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                        >
                            Home
                        </button>
                        
                        <button 
                            onClick={handleAboutScroll}
                            className="px-4 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                        >
                            About
                        </button>
                        
                        <button 
                            onClick={handleContactScroll}
                            className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
                        >
                            Contact
                        </button>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar
