
import { useFetch } from '../hooks/useFetch';

export const ProductDisplay = () => {
  // Utilizing a dummy API endpoint containing simulated dummy JSON items
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products?limit=3');

  if (loading) return <div className="text-blue-600 font-semibold animate-pulse">Loading amazing products...</div>;
  if (error) return <div className="text-red-600 p-4 border border-red-200 bg-red-50 rounded-lg font-medium">Error: {error}</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Product Catalog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {products?.map(product => (
          <div key={product.id} className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col justify-between shadow-sm">
            <div>
              <img src={product.image} alt={product.title} className="h-32 w-full object-contain mb-3" />
              <h3 className="font-bold text-sm text-gray-800 dark:text-gray-200 line-clamp-2">{product.title}</h3>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-extrabold text-blue-600 dark:text-blue-400">${product.price}</span>
              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded capitalize">{product.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};