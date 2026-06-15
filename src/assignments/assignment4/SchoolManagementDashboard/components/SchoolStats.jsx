const SchoolStats = ({ schools }) => {
    const totalSchools = schools.length
    const totalStudents = schools.reduce(
        (sum, school) => sum + school.totalStudents,
        0
    )
    const totalTeachers = schools.reduce(
        (sum, school) => sum + school.totalTeachers,
        0
    )

    return (
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-md">
                <p className="text-sm font-medium text-slate-500">Total Schools</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    {totalSchools}
                </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md">
                <p className="text-sm font-medium text-slate-500">Total Students</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    {totalStudents}
                </h2>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md">
                <p className="text-sm font-medium text-slate-500">Total Teachers</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    {totalTeachers}
                </h2>
            </div>
        </section>
    )
}

export default SchoolStats
