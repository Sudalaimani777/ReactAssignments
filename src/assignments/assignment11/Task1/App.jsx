import { StudentProvider } from "./context/StudentRegistrationContext"
import StudentDetails from "./pages/StudentDetails"
import StudentForm from "./pages/StudentForm"


const App = () => {
  return (
    <>
        <StudentProvider>
            <StudentForm/>
            <StudentDetails/>
        </StudentProvider>
    </>
  )
}

export default App