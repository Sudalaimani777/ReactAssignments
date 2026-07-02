import { SearchInput, SearchCategory, SearchProductByPrice } from "./index"

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 py-4 md:py-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
        
        {/* Main search input - scales cleanly across devices */}
        <div className="w-full md:flex-1 md:max-w-md">
          <SearchInput />
        </div>

        {/* Filter controls - grouped tightly together on desktop, stacked or wrapped on mobile */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <div className="flex-1 sm:flex-initial">
            <SearchCategory />
          </div>
          <div className="flex-1 sm:flex-initial">
            <SearchProductByPrice />
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navbar