import { useState } from "react"
import AgeIncrement from "./AgeIncrement"


const App = () => {

    const [age, setAge] = useState(18);

    const handleChangeAge = () => setAge(prevAge => prevAge + 1);

    return (
        <>
            <AgeIncrement age={age} handleChangeAge={handleChangeAge} />
        </>
    )
}

export default App