import { useContext } from "react"
import { ProductCard } from "../components/index"
import { ProductFilterationsContext } from "../context/index"

const ProductGrid = () => {
  const { filtrationProduct } = useContext(ProductFilterationsContext)

  // Peaceful fallback layout if context array is totally empty
  if (!filtrationProduct || filtrationProduct.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center bg-white border border-dashed border-gray-200 rounded-2xl p-6">
        <div className="p-3 bg-gray-50 rounded-full text-gray-400 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>
        </div>
        <h3 className="text-sm font-medium text-gray-900">No products found</h3>
        <p className="text-xs text-gray-500 mt-1 max-w-xs">
          We couldn't find anything matching your current filters. Try tweaking your search or category choice!
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {filtrationProduct.map(products => (
        <ProductCard products={products} key={products.id} />
      ))}
    </div>
  )
}

export default ProductGrid