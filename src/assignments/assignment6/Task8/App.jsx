import { useState } from "react";
import ProductDetails from "./ProductDetails";

const App = () => {
  const [product, setProduct] = useState(undefined);

  const handleAddProduct = () => {
    setProduct({
      name: "Wireless Headphones",
      brand: "SoundMax",
      price: "₹2,499",
    });
  };

  return <ProductDetails product={product} handleAddProduct={handleAddProduct} />;
};

export default App;
