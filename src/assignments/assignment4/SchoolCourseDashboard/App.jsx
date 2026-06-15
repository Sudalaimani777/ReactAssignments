import { schoolCourses } from "../data/schoolDatas"
import SchoolList from "./components/SchoolList"


const App = () => {
    return (
        <main className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-8 text-3xl font-bold text-slate-900 text-center">
                    School Courses Dashboard
                </h1>
            <SchoolList schoolCourses={schoolCourses} />
            </div>
        </main>
    )
}

export default App
