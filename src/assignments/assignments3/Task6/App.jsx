import Company from "./Company"


const App = () => {

    const companyDetails = {
        companyName: "TATA",
        employeeName: "Sudalaimani Kannan",
        employeeRole: "Software Developer",
        employeeSalary: 20000
    }

    return (
        <>
            <Company companyDetails={companyDetails} />
        </>
    )
}

export default App