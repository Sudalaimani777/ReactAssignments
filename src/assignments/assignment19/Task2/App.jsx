import ProductCards from "./components/ProductCards"
import { ProductCardsProvider } from "./context/ProductDataContext"


const App = () => {
  return (
    <>
      <ProductCardsProvider>
        <ProductCards />
      </ProductCardsProvider>
    </>
  )
}

export default App