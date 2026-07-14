
import ProductSearch from './components/ProductSearch';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Header section */}
        <header className="text-center border-b border-gray-200 dark:border-gray-800 pb-6">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl tracking-tight">
            React useMemo Optimizations
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Demonstrations of preventing unnecessary calculations using the useMemo hook.
          </p>
        </header>

        {/* Task 1: Product Search System Component */}
        <section>
          <ProductSearch />
        </section>
      </div>
    </div>
  );
}

export default App;