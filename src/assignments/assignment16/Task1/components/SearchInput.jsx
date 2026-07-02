import { useContext } from "react"
import ProductSearchContext from "../context/ProductSearchContext"

const SearchInput = () => {
  const { searchProduct, handleSearchInputChange } = useContext(ProductSearchContext)

  return (
    <div className="relative w-full group">
      <input
        type="text"
        value={searchProduct}
        onChange={handleSearchInputChange}
        placeholder="Search for products..."
        className="w-full px-5 py-3 text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 hover:border-gray-300"
        aria-label="Search products"
      />
    </div>
  )
}

export default SearchInput