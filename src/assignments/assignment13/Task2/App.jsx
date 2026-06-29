import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import { EmployeeProvider } from "./context/EmployeeContext";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <EmployeeProvider>
                    <EmployeeForm />
                    <EmployeeList />
                </EmployeeProvider>
            </div>
        </div>
    );
};

export default App;
