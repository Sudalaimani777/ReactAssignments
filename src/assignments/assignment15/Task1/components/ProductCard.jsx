

const ProductCard = ({product}) => {
  return (
    <>
      <div className="rounded-lg border p-4 shadow-md">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="h-48 w-full rounded-md object-cover"
        />

        <h2 className="mt-3 text-lg font-bold">
          {product.title}
        </h2>

        <p className="text-gray-600">
          {product.category}
        </p>

        <p className="mt-2 font-semibold">
          ${product.price}
        </p>

        <p>⭐ {product.rating}</p>
      </div>
    </>
  )
}

export default ProductCard