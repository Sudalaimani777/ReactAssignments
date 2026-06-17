import { useState } from "react"
import Counter from "./Counter"


const App = () => {

    const [count, setCount] = useState(0);

    const handleInc = () => setCount(prevCount => prevCount + 1);
    const handleDec = () => setCount(prevCount => prevCount - 1);
    const handleReset = () => setCount(0);

    return (
        <>
            <Counter 
                count={count} 
                handleInc={handleInc} 
                handleDec={handleDec} 
                handleReset={handleReset} 
            />
        </>
    )
}

export default App