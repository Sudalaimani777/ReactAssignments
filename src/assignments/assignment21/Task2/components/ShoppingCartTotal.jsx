import { useState, useMemo } from 'react';

const ShoppingCartTotal = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Wireless Mouse', price: 25, quantity: 2 },
    { id: 2, name: 'Mechanical Keyboard', price: 90, quantity: 1 },
    { id: 3, name: 'HDMI Cable', price: 12, quantity: 3 },
  ]);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Memoized calculation: Only runs when cartItems changes
  const grandTotal = useMemo(() => {
    console.log('Calculating grand total...');
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, parseInt(newQuantity) || 0) } : item
      )
    );
  };

  return (
    <div className={`p-6 rounded-xl border transition-all duration-300 ${
      isDarkTheme 
        ? 'bg-gray-900 text-white border-gray-800' 
        : 'bg-gray-50 text-gray-800 border-gray-200 shadow-sm'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold tracking-tight">Shopping Cart Total Calculator</h2>
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            isDarkTheme 
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' 
              : 'bg-white hover:bg-gray-100 text-gray-700 shadow-sm border border-gray-200'
          }`}
        >
          Toggle Theme ({isDarkTheme ? 'Light' : 'Dark'})
        </button>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className={`border-b text-sm font-semibold uppercase tracking-wider opacity-60 ${
              isDarkTheme ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <th className="pb-3 pr-4">Item</th>
              <th className="pb-3 px-4">Price</th>
              <th className="pb-3 px-4">Quantity</th>
              <th className="pb-3 pl-4 text-right">Total</th>
            </tr>
          </thead>
          <tbody className={`divide-y text-sm font-medium ${
            isDarkTheme ? 'divide-gray-800' : 'divide-gray-200'
          }`}>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td className="py-4 pr-4 font-semibold">{item.name}</td>
                <td className="py-4 px-4">${item.price}</td>
                <td className="py-4 px-4">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                    className={`w-16 px-2 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 text-center ${
                      isDarkTheme 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    min="0"
                  />
                </td>
                <td className="py-4 pl-4 text-right">${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`pt-4 border-t flex justify-between items-center ${
        isDarkTheme ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <span className="text-base font-medium opacity-80">Grand Total:</span>
        <span className="text-2xl font-black text-blue-600 dark:text-blue-400">${grandTotal}</span>
      </div>
    </div>
  );
};

export default ShoppingCartTotal;