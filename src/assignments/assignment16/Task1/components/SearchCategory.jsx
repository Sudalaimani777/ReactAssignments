import { useContext } from "react"
import { ProductCategoryContext } from "../context/index"

const SearchCategory = () => {
  const { handleCategoryChange, selectedCategory, uniqueProductCategory } = useContext(ProductCategoryContext);
  console.log(selectedCategory);

  return (
    <div className="relative w-full sm:w-48 group">
      {/* Custom Chevron Arrow */}
      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      <select
        onChange={handleCategoryChange}
        value={selectedCategory}
        className="w-full pl-4 pr-10 py-2.5 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-xl appearance-none cursor-pointer focus:outline-none focus:bg-white focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all duration-200 ease-in-out"
      >
        {uniqueProductCategory.map(category => (
          <option value={category} key={category} className="text-gray-800 bg-white">
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchCategory