import { useContext } from "react"
import ProductCardsContext from "../context/ProductDataContext"


const ProductCards = () => {

  const { productData } = useContext(ProductCardsContext);

  return (
    <>
      <section>
        {
          productData?.map(product => (
            <div key={product.id}>
              <h1>{product.title}</h1>
              <h3>{product.price}</h3>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default ProductCards