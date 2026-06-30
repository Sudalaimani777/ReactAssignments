import { useContext } from "react"
import ProductsContext from "../context/ProductsContext";
import { ProductCard } from "./index"

const ProductGrid = () => {

  const { filterProducts } = useContext(ProductsContext);
  console.log(filterProducts);

  return (
    <>
      <main>
        {filterProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </main>
    </>
  )
}

export default ProductGrid