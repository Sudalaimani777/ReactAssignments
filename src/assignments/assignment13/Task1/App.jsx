import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { StudentProvider } from "./context/StudentContext";
const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <StudentProvider>
                    <StudentForm />
                    <StudentList />
                </StudentProvider>
            </div>
        </div>
    );
};

export default App;
