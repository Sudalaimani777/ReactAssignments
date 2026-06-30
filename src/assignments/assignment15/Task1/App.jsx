import { Navbar, ProductGrid } from "./components/index"
import { ProductsProvider } from "./context/ProductsContext"

const App = () => {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <ProductGrid />
      </ProductsProvider>
    </>
  )
}

export default App