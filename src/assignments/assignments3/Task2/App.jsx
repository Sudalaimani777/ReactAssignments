import EmployeeCard from "./EmployeeCard"


const App = () => {

    const employeeDetails = {
        employeeName: "Sudalaimani Kannan",
        employeeId: 100,
        workingDepartment: "Software Developer",
        salary: 20000,
        workingExperience: "3 Months"
    }

    return (
        <>
            <EmployeeCard employeeDetails={employeeDetails} />
        </>
    )
}

export default App