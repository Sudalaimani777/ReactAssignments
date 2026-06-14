import Parent from "./Parent"


const App = () => {

    const name = "Sudalaimani Kannan"
    const course = "MERN"

    return (
        <>
            <Parent data={{ name, course }} />
        </>
    )
}

export default App