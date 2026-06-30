import { useContext } from "react"
import ProductContext from "../context/ProductsContext"

const SelectCategory = () => {
  const { handleSearchProductsByCategory, searchProductsByCategory, productCategories } = useContext(ProductContext);

  return (
    <div className="relative w-full">
      <select
        onChange={handleSearchProductsByCategory}
        value={searchProductsByCategory}
        className="block w-full appearance-none rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 pl-4 pr-10 text-sm font-medium text-gray-700 outline-none transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white dark:focus:border-indigo-400 dark:focus:bg-gray-950 dark:focus:ring-indigo-400/10"
      >
        {
          productCategories.map(category => (
            <option value={category} key={category} className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
              {category}
            </option>
          ))
        }
      </select>

      {/* Decorative Custom Dropdown Chevron */}
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
    </div>
  )
}

export default SelectCategory