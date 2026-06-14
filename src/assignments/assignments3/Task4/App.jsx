
import UserSkills from './UserSkills'

const App = () => {

    const technicalSkills = ["HTML", "CSS", "JavaScript", "React", "Typescript", "Zusatnd", "Tailwind", "Git"]

    return (
        <>
            <UserSkills technicalSkills={technicalSkills} />
        </>
    )
}

export default App