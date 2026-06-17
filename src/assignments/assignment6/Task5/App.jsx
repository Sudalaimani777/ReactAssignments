import { useState } from "react"
import ThemeSwitch from "./ThemeSwitch";


const App = () => {

    const [theme, setTheme] = useState(true);

    const handleTheme = () => setTheme(prevTheme => !prevTheme);

    return (
        <>
            <ThemeSwitch theme={theme} handleTheme={handleTheme} />
        </>
    )
}

export default App