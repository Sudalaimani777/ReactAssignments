import { useState } from "react"
import LoginStatus from "./LoginStatus"


const App = () => {

    const [login, setLogin] = useState(false);
    const handleLoginStatusChange = () => setLogin(prevStatus => !prevStatus)

    return (
        <>
            <LoginStatus login={login} handleLoginStatusChange={handleLoginStatusChange}/>
        </>
    )
}

export default App