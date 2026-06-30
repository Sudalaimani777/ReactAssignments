const ProductCard = ({ product }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.08)] dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">

      {/* Aspect Ratio Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content Details */}
      <div className="flex flex-1 flex-col pt-3.5 px-1">

        {/* Category Badge & Rating Row */}
        <div className="flex items-center justify-between gap-2 text-xs font-medium tracking-wide">
          <span className="inline-flex items-center uppercase text-indigo-600 dark:text-indigo-400">
            {product.category}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-500">
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {product.rating}
          </span>
        </div>

        {/* Product Title */}
        <h2 className="mt-2 text-sm font-semibold leading-snug text-gray-800 line-clamp-2 group-hover:text-indigo-600 dark:text-gray-200 dark:group-hover:text-indigo-400 transition-colors duration-200">
          {product.title}
        </h2>

        {/* Price Tag Footer */}
        <div className="mt-auto pt-3 flex items-center justify-between">
          <p className="text-base font-bold text-gray-900 dark:text-white">
            ${product.price}
          </p>

          {/* Decorative Arrow indicator that slides in on card hover */}
          <span className="rounded-lg bg-gray-50 p-1.5 text-gray-400 opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 dark:bg-gray-900 dark:text-gray-500">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>

      </div>
    </div>
  )
}

export default ProductCard