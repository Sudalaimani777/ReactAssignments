import { useState } from "react"


const App = () => {

    const [count, setCount] = useState(0);

    const handleInc = () => setCount(prevCount => prevCount + 1);
    const handleDec = () => setCount(prevCount => prevCount - 1);
    const handleReset = () => setCount(0);


  return (
    <>
        <main>
            <section>
                <h1>Counter</h1>
                <h4>{count}</h4>
                <button onClick={handleInc}>+</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleDec}>-</button>
            </section>
        </main>
    </>
  )
}

export default App