import { createContext, useState } from "react"
import useFetchProduct from "../hooks/useFetchProduct"


const ProductCategoryContext = createContext();

export const ProductCategoryProvider = ({ children }) => {

    const { products } = useFetchProduct();
    console.log(products)
    const [selectedCategory, setSelectedCategory] = useState("All Products");

    const handleCategoryChange = (e) => {
        const { value } = e.target;
        setSelectedCategory(value);
    }

    const uniqueProductCategory = [
        "All Products",
        ...new Set(
            products.map(product => {
                const cat = product.category;
                if (!cat || typeof cat !== "string") return cat; // Safety check
                return cat.charAt(0).toUpperCase() + cat.slice(1);
            })
        )
    ];

    return (
        <ProductCategoryContext.Provider value={{ handleCategoryChange, selectedCategory, uniqueProductCategory }}>
            {children}
        </ProductCategoryContext.Provider>
    )
}

export default ProductCategoryContext;