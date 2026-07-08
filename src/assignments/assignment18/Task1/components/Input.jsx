import { useContext } from "react"
import InputContext from "../context/InputContext"

const Input = () => {
    const { inputRef, handleChangeText } = useContext(InputContext);

    return (
        <>
            <input 
                type="text" 
                ref={inputRef} 
                onChange={handleChangeText} 
                placeholder="Type your message here..."
                className="w-full max-w-md px-4 py-3 text-base text-slate-900 placeholder-slate-400 bg-white border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 dark:focus:ring-blue-400 transition-all duration-200"
            />
        </>
    )
}

export default Input
