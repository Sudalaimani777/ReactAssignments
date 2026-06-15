import SchoolCard from "./SchoolCard"


const SchoolList = ({ schoolCourses }) => {
    return (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <SchoolCard schoolCourses={schoolCourses} />
        </section>
    )
}

export default SchoolList
