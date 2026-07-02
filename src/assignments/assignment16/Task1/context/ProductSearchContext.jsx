import { createContext, useState } from "react"


const ProductSearchContext = createContext();
export const ProductSearchProvider = ({ children }) => {


    const [searchProduct, setSearchProduct] = useState("");

    const handleSearchInputChange = (e) => {
        const { value } = e.target;
        setSearchProduct(value);
    }


    return (
        <ProductSearchContext.Provider value={{ searchProduct, handleSearchInputChange }}>
            {children}
        </ProductSearchContext.Provider>
    )
}

export default ProductSearchContext;