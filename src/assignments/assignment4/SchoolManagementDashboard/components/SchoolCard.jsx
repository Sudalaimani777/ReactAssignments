const SchoolCard = ({ school }) => {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-xl font-bold text-slate-900">{school.schoolName}</h3>
      <p className="mt-2 text-sm text-slate-600">
        <span className="font-semibold">Principal Name:</span>{" "}
        {school.principalName}
      </p>
      <p className="mt-1 text-sm text-slate-600">
        <span className="font-semibold">City:</span> {school.city}
      </p>

      <div className="mt-5">
        <p className="text-sm font-semibold text-slate-700">
          Sports Available
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {school.sportsAvailable.map((sport) => (
            <span
              key={sport}
              className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800"
            >
              {sport}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default SchoolCard
