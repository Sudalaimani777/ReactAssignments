import { EmployeeProvider } from "./context/EmployeeContext"
import { EmployeeGrid, Navbar } from "./components/index"

const App = () => {
    return (
        <>
            <EmployeeProvider>
                <Navbar />
                <EmployeeGrid />
            </EmployeeProvider>
        </>
    )
}

export default App