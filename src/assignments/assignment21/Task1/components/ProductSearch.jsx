import { useState, useMemo } from 'react';

const ProductSearch = () => {
  const [products] = useState([
    { id: 1, name: 'Apple iPhone 15' },
    { id: 2, name: 'Samsung Galaxy S24' },
    { id: 3, name: 'Google Pixel 8' },
    { id: 4, name: 'MacBook Pro' },
    { id: 5, name: 'Dell XPS 13' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Memoized filtering: Only runs when products or searchTerm changes
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <div className={`p-6 rounded-xl border transition-all duration-300 ${
      isDarkTheme 
        ? 'bg-gray-800 text-white border-gray-700' 
        : 'bg-white text-gray-800 border-gray-200 shadow-sm'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold tracking-tight">Product Search System</h2>
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            isDarkTheme 
              ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          Toggle Theme ({isDarkTheme ? 'Light' : 'Dark'})
        </button>
      </div>

      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium mb-2 opacity-80">
          Search Products
        </label>
        <input
          id="search"
          type="text"
          placeholder="Type to filter..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full max-w-md px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
            isDarkTheme 
              ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500' 
              : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
          }`}
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider opacity-60 mb-3">
          Results ({filteredProducts.length})
        </h3>
        {filteredProducts.length > 0 ? (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredProducts.map(product => (
              <li key={product.id} className="py-2.5 font-medium">
                {product.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm opacity-60 italic">No products found match your search.</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;