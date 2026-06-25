import { EmployeeProvider } from "./context/EmployeeContext"
import EmployeeDetails from "./pages/EmployeeDetails"
import  EmployeeForm  from "./pages/EmployeeForm"

const App = () => {
    return (
        <>
            <EmployeeProvider>
                <EmployeeForm />
                <EmployeeDetails/>
            </EmployeeProvider>
        </>
    )
}

export default App