import { createContext, useState } from "react";
import useFetchProduct from "../hooks/useFetchProduct"

const ProductSortByPriceContext = createContext();

export const ProductSortByPriceProvider = ({ children }) => {

    const { products } = useFetchProduct();
    const [productPrice, setProductPrice] = useState("Select Price Range");

    const handleSelectPriceRange = (e) => {
        const { value } = e.target;
        setProductPrice(value)
    }

    const sortedProducts = productPrice === "Low to High" ? [...products].sort((a, b) => a.price - b.price) : productPrice === "High to Low" ? [...products].sort((a, b) => b.price - a.price) : [...products]

    return (
        <ProductSortByPriceContext.Provider value={{ sortedProducts, productPrice, handleSelectPriceRange }}>
            {children}
        </ProductSortByPriceContext.Provider>
    )
}

export default ProductSortByPriceContext;