import { useState } from "react"
import StudentNameChange from "./StudentNameChange";


const App = () => {

    const [studentName, setStudentName] = useState("Sudalaimani");

    const handleStudentNameChange = () => setStudentName(prevStdName => prevStdName === "Sudalaimani" ? "Sudalaimani Kannan" : "Sudalaimani")


    return (
        <>
            <StudentNameChange studentName={studentName} handleStudentNameChange={handleStudentNameChange} />
        </>
    )
}

export default App