import { useContext } from "react"
import { ProductSortByPriceContext } from "../context/index"

const SearchProductByPrice = () => {
  const { productPrice, handleSelectPriceRange } = useContext(ProductSortByPriceContext);

  return (
    <div className="relative w-full sm:w-52 group">
      {/* Custom Sorting/Chevron Icon */}
      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </svg>
      </div>

      <select
        onChange={handleSelectPriceRange}
        value={productPrice}
        className="w-full pl-4 pr-10 py-2.5 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-xl appearance-none cursor-pointer focus:outline-none focus:bg-white focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 ease-in-out"
      >
        <option value="Select Price Range" className="text-gray-400 bg-white">Select Price Range</option>
        <option value="Low to High" className="text-gray-800 bg-white">Low to High</option>
        <option value="High to Low" className="text-gray-800 bg-white">High to Low</option>
      </select>
    </div>
  )
}

export default SearchProductByPrice