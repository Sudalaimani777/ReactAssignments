import { ProductSearchProvider, ProductCategoryProvider, ProductSortByPriceProvider, ProductFilterationsProvider } from "./context/index"
import { Navbar } from "./components/index"
import { ProductPage } from "./pages/index"

const App = () => {
  return (
    <ProductSearchProvider>
      <ProductCategoryProvider>
        <ProductSortByPriceProvider>
          <ProductFilterationsProvider>

            {/* The root layout container */}
            <div className="min-h-screen bg-gray-50/50 text-gray-900 antialiased selection:bg-gray-200">
              <Navbar />

              {/* Main content area with smooth subtle fade-in */}
              <main className="animate-in fade-in duration-500 ease-out">
                <ProductPage />
              </main>
            </div>

          </ProductFilterationsProvider>
        </ProductSortByPriceProvider>
      </ProductCategoryProvider>
    </ProductSearchProvider>
  )
}

export default App