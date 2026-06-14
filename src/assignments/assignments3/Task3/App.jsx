import ProductDetails from './ProductDetails'

const App = () => {

  const productDetails = {
    productName: "Neckband",
    productPrice:500,
    productCategory:"Electronics",
    productBrand:"Boult"
  }

  return (
    <>
      <ProductDetails productDetails={productDetails}/>
    </>
  )
}

export default App