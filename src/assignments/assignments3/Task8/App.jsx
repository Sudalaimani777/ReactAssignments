import CourseCard from "./components/CourseCard"


const App = () => {

    const studentsCourses = ["MERN Stack", "Python Full Stack", "Java Full Stack"]

    return (
        <>
            <CourseCard studentsCourses={studentsCourses[0]} />
            <CourseCard studentsCourses={studentsCourses[1]} />
            <CourseCard studentsCourses={studentsCourses[2]} />
        </>
    )
}

export default App