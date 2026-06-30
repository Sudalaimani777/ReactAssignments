import { useContext } from "react"
import ProductsContext from "../context/ProductsContext";
import { ProductCard } from "./index"

const ProductGrid = () => {
  const { filterProducts } = useContext(ProductsContext);
  console.log(filterProducts);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Responsive Grid Container */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {filterProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  )
}

export default ProductGrid