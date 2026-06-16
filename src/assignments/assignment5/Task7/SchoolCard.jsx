
const SchoolCard = ({ schools }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {schools.map((school) => (
        <div
          key={school.schoolName}
          className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <h2 className="text-xl font-bold text-slate-800">
            {school.schoolName}
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">
            {school.city}
          </p>

          <div className="mt-5 space-y-2 text-sm text-slate-700">
            <p>
              <span className="font-semibold">Principal :</span>{" "}
              {school.principalName}
            </p>
            <p>
              <span className="font-semibold">Students :</span>{" "}
              {school.totalStudents}
            </p>
            <p>
              <span className="font-semibold">Teachers :</span>{" "}
              {school.totalTeachers}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SchoolCard;
