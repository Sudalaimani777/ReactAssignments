import { schools } from "../data/schoolDatas"
import SchoolCard from "./SchoolCard"


const App = () => {
    return (
        <main className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-8 text-3xl font-bold text-slate-900 text-center">
                    School Management
                </h1>
                <SchoolCard schools={schools} />
            </div>
        </main>
    )
}

export default App
