const SchoolCard = ({ schoolCourses }) => {
  return (
    <>
      {schoolCourses.map((school) => (
        <article
          key={school.schoolName}
          className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <h2 className="text-xl font-bold text-slate-900">
            {school.schoolName}
          </h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {school.coursesOffered.map((course) => (
              <span
                key={`${school.schoolName}-${course}`}
                className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-800"
              >
                {course}
              </span>
            ))}
          </div>
        </article>
      ))}
    </>
  )
}

export default SchoolCard
