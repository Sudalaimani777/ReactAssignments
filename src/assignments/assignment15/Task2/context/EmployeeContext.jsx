import { createContext, useState } from "react";
import useFetchAPI from "../hooks/useFetchAPI";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {

    const { employees } = useFetchAPI();
    const [searchEmployees, setSearchEmployees] = useState("");

    const handleSearchEmployees = (e) => {
        const { value } = e.target;
        setSearchEmployees(value);
    }

    const filterEmployees = employees.filter(user => user.firstName.toLowerCase().includes(searchEmployees.toLowerCase()));

    return (
        <EmployeeContext.Provider value={{ filterEmployees, handleSearchEmployees, searchEmployees }}>
            {children}
        </EmployeeContext.Provider>
    )
}
export default EmployeeContext;