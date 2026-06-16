import { useState } from "react"


const App = () => {

    const userInfo = {
        userName:"Sudalaimani",
        age:23,
        language:"Tamil"
    }
    const [userData, setUserData] = useState(userInfo);

  return (
    <>
        <main>
            <section>
                <h1>Objects in State</h1>
                <p>{userData.userName}</p>
                <p>{userData.age}</p>
                <p>{userData.language}</p>
            </section>
        </main>
    </>
  )
}

export default App