
import { ProductGrid } from "../components/index"

const ProductPage = () => {


  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      {/* Optional contextual header to make the interface feel alive */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight">
          Our Collection
        </h1>
        <p className="text-xs md:text-sm text-gray-500 mt-1">
          Discover handpicked items tailored to your style.
        </p>
      </div>

      {/* The grid container */}
      <ProductGrid />
    </div>
  )
}

export default ProductPage