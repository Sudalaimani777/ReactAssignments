import StudentData from "./StudentData"


const App = () => {

    const studentData = {
        studentName: "Sudalaimani Kannan",
        studentAge: 23,
        course: "MERN",
        city: "Chennai"
    }

    

    return (
        <>
            <StudentData studentData={studentData} />
        </>
    )
}

export default App