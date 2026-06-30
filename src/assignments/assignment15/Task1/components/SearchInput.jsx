import { useContext } from "react"
import ProductContext from "../context/ProductsContext"

const SearchInput = () => {
  const { handleSearchProducts, searchProducts } = useContext(ProductContext);

  return (
    <div className="relative w-full">
      {/* Decorative Search Icon */}
      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>

      <input
        type="text"
        value={searchProducts}
        onChange={handleSearchProducts}
        placeholder="Search products..."
        className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 hover:bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-100 dark:placeholder-gray-500 dark:hover:bg-gray-900 dark:focus:border-indigo-400 dark:focus:bg-gray-950 dark:focus:ring-indigo-400/10"
      />
    </div>
  )
}

export default SearchInput