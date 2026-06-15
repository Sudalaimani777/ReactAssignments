import SchoolCard from "./SchoolCard"


const SchoolList = ({ schools }) => {
    return (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {schools.map((school) => (
                <SchoolCard key={school.schoolName} school={school} />
            ))}
        </section>
    )
}

export default SchoolList
