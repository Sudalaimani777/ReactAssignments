import { createContext, useState } from "react"
import useFetchProducts from "../hooks/useFetchProducts"


const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {

    const { products } = useFetchProducts();

    const [searchProducts, setSearchProducts] = useState("");
    const [searchProductsByCategory, setSearchProductsByCategory] = useState("all");

    const handleSearchProducts = (e) => {
        const { value } = e.target;
        setSearchProducts(value)
    }

    const handleSearchProductsByCategory = (e) => {
        const { value } = e.target;
        setSearchProductsByCategory(value);
    }   

    const productCategories = ["all", ...new Set(products.map(product => product.category))]

    const filterProducts = products.filter(product => {
        const filterBySearch = product.title.toLowerCase().includes(searchProducts.toLowerCase());
        const filterByCategory = searchProductsByCategory === "all" || product.category === searchProductsByCategory;
        return filterByCategory && filterBySearch;
    });

    return (
        <ProductContext.Provider value={{
            filterProducts,
            handleSearchProducts,
            searchProducts,
            handleSearchProductsByCategory,
            searchProductsByCategory,
            productCategories
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;