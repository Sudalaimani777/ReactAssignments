import { createContext, useContext } from "react"
import useFetchProduct from "../hooks/useFetchProduct"
import { ProductSearchContext, ProductCategoryContext, ProductSortByPriceContext } from "../context/index"

const ProductFilterationsContext = createContext();


export const ProductFilterationsProvider = ({ children }) => {

    const { products } = useFetchProduct();
    const { searchProduct } = useContext(ProductSearchContext);
    const { selectedCategory } = useContext(ProductCategoryContext);
    const { productPrice } = useContext(ProductSortByPriceContext);

    const filtrationProducts = products.filter(product => {
        const productFilterBySearch = product.title.toLowerCase().includes(searchProduct.toLowerCase());

        const productFilterByCategory = selectedCategory === "All Products" || product.category.toLowerCase() === selectedCategory.toLowerCase();
        return productFilterBySearch && productFilterByCategory
    });

    const filtrationProduct = productPrice === "Low to High" ? [...filtrationProducts].sort((a, b) => a.price - b.price) : productPrice === "High to Low" ? [...filtrationProducts].sort((a, b) => b.price - a.price) : filtrationProducts

    return (
        <ProductFilterationsContext.Provider value={{ filtrationProduct }}>
            {children}
        </ProductFilterationsContext.Provider>
    )
}

export default ProductFilterationsContext