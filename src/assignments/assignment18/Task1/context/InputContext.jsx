import { createContext, useRef } from "react";


const InputContext = createContext();

export const InputProvider = ({ children }) => {

    const inputRef = useRef();
    const textRef = useRef();

    const handleChangeText = () => {
        textRef.current.textContent = inputRef.current.value;
    }

    return (
        <InputContext.Provider value={{ handleChangeText, inputRef, textRef }}>
            {children}
        </InputContext.Provider>
    )
}

export default InputContext