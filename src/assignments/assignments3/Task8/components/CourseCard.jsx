

const CourseCard = ({ studentsCourses }) => {
    return (
        <section className="mx-auto my-4 w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
                Course Track
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">
                {studentsCourses}
            </h2>
            <p className="mt-2 text-sm text-slate-500">
                Structured training path designed to build practical full stack development skills.
            </p>
        </section>
    )
}

export default CourseCard
