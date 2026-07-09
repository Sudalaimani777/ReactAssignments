import { createContext, useState } from "react";

const ProductCardsContext = createContext();

export const ProductCardsProvider = ({ children }) => {

    const [productData] = useState([
        {
            id: 1,
            title: "Laptop",
            price: 50000
        },
        {
            id: 2,
            title: "Mobile",
            price: 20000
        }
    ])

    return (
        <ProductCardsContext.Provider value={{ productData }}>
            {children}
        </ProductCardsContext.Provider>
    )
}

export default ProductCardsContext;