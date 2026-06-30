import { useState } from "react";
import { SearchInput, SelectCategory } from "./index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all duration-300 dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between gap-4">
          
          {/* Logo / Brand Name */}
          <div className="flex shrink-0 items-center">
            <a href="#" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Discover<span className="text-indigo-600 dark:text-indigo-400">.</span>
            </a>
          </div>

          {/* Desktop Search & Filters (Hidden on Mobile) */}
          <div className="hidden flex-1 max-w-2xl items-center gap-3 md:flex">
            <div className="w-full max-w-md">
              <SearchInput />
            </div>
            <div className="w-48">
              <SelectCategory />
            </div>
          </div>

          {/* Right Side Actions / CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Sign In
            </button>
            <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu (Sliding/Collapsible Dropdown) */}
      <div 
        className={`md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-4 px-4 py-6">
          <div className="w-full">
            <SearchInput />
          </div>
          <div className="w-full">
            <SelectCategory />
          </div>
          <hr className="border-gray-100 dark:border-gray-800" />
          <div className="flex flex-col gap-3">
            <button className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-900 transition-all">
              Sign In
            </button>
            <button className="w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;