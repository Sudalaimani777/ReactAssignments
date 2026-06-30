import { useContext } from "react"
import ProductContext from "../context/ProductsContext"


const SearchInput = () => {

  const { handleSearchProducts, searchProducts } = useContext(ProductContext);

  return (
    <>
      <input
        type="text"
        value={searchProducts}
        onChange={handleSearchProducts}
      />
    </>
  )
}

export default SearchInput