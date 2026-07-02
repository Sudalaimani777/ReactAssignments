const ProductCard = ({ products }) => {
  // Guard clause just in case the product data hasn't loaded yet
  if (!products) return null;

  const { title, thumbnail, category, price, rating } = products;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0,04)]">
      
      {/* Aspect ratio locked image container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Subtle Category Tag on top of the image */}
        <span className="absolute left-2.5 top-2.5 rounded-lg bg-white/80 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-gray-600 backdrop-blur-md border border-white/40 shadow-sm">
          {category}
        </span>
      </div>

      {/* Product Information Block */}
      <div className="flex flex-1 flex-col pt-3.5 pb-1 px-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-gray-900 transition-colors duration-200">
            {title}
          </h3>
          <span className="text-base font-semibold text-gray-900 shrink-0">
            ${price}
          </span>
        </div>

        {/* Dynamic bottom layout helper (pushes rating down perfectly) */}
        <div className="mt-auto pt-3 flex items-center justify-between">
          {/* Subtle star rating setup */}
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-amber-400">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium text-gray-500">
              {rating || "4.5"}
            </span>
          </div>

          {/* Quick CTA visual cue */}
          <span className="text-xs font-medium text-gray-400 group-hover:text-gray-900 transition-colors duration-200 flex items-center gap-0.5">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard