import { useContext } from "react"
import ProductContext from "../context/ProductsContext"


const SelectCategory = () => {

  const { handleSearchProductsByCategory, searchProductsByCategory, productCategories } = useContext(ProductContext);

  return (
    <>
      <select
        onChange={handleSearchProductsByCategory}
        value={searchProductsByCategory}
      >
        {
          productCategories.map(category => (
            <option value={category} key={category}>{category}</option>
          ))
        }
      </select>
    </>
  )
}

export default SelectCategory