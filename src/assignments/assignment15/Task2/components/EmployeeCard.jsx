const EmployeeCard = ({ employee }) => {
  const fullName = `${employee.firstName} ${employee.lastName}`;
  const location = `${employee.address.city}, ${employee.address.country}`;

  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white via-rose-50 to-amber-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-24 sm:h-28 bg-gradient-to-r from-rose-300 via-orange-200 to-amber-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.75),_transparent_38%)]" />
      </div>

      <div className="relative px-4 pb-5 sm:px-6 sm:pb-6">
        <div className="-mt-12 flex flex-col gap-3 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <img
            src={employee.image}
            alt={fullName}
            className="h-20 w-20 rounded-2xl border-4 border-white object-cover shadow-md sm:h-24 sm:w-24"
          />
          <span className="w-fit rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm sm:text-xs">
            {employee.role}
          </span>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
              {fullName}
            </h2>
            <p className="mt-1 text-sm font-medium text-rose-600">
              {employee.company.title}
            </p>
            <p className="text-sm text-slate-500">{employee.company.name}</p>
          </div>

          <div className="grid grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-100">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                Email
              </p>
              <p className="mt-1 break-all font-medium text-slate-700">
                {employee.email}
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-100">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                Phone
              </p>
              <p className="mt-1 break-words font-medium text-slate-700">{employee.phone}</p>
            </div>

            <div className="rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-100 sm:col-span-2 lg:col-span-1">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                Location
              </p>
              <p className="mt-1 font-medium text-slate-700">{location}</p>
            </div>

            <div className="rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-100 sm:col-span-2 lg:col-span-1">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                Department
              </p>
              <p className="mt-1 font-medium text-slate-700">
                {employee.company.department}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
              Age {employee.age}
            </span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
              {employee.bloodGroup}
            </span>
            <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700">
              {employee.eyeColor} eyes
            </span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              {employee.hair.color} hair
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EmployeeCard;
