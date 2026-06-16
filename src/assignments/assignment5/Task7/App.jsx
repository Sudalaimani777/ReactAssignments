import { useState } from "react"
import { schools } from "./data/data.js"
import SchoolCard from "./SchoolCard.jsx"

const App = () => {

    const [school, setSchool] = useState(schools);

    

    return (
        <>
            <main>
                <section onClick={() => setSchool(prevData => console.log(prevData))}>
                    <h1>Arrays of Object in useState</h1>
                </section>
                <SchoolCard schools={school} />
            </main>
        </>
    )
}

export default App