import { schools } from "../data/schoolDatas"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SchoolList from "./components/SchoolList"
import SchoolStats from "./components/SchoolStats"


const App = () => {
    return (
        <main className="min-h-screen bg-slate-100">
            <Header />
            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <SchoolStats schools={schools} />
                <SchoolList schools={schools} />
            </section>
            <Footer />
        </main>
    )
}

export default App
