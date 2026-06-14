
const Employee = ({ companyDetails }) => {
    const { companyName, employeeName, employeeRole, employeeSalary } = companyDetails;

    const detailItems = [
        { label: "Company Name", value: companyName },
        { label: "Employee Name", value: employeeName },
        { label: "Role", value: employeeRole },
        { label: "Salary", value: `Rs. ${employeeSalary}` },
    ];

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
            <section className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
                <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                        Company Employee
                    </p>
                    <h1 className="mt-2 text-3xl font-bold text-slate-900">
                        {employeeName}
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Employee summary with company, role, and salary information.
                    </p>
                </div>

                <div className="space-y-4">
                    {detailItems.map(({ label, value }) => (
                        <div
                            key={label}
                            className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                        >
                            <span className="text-sm font-medium text-slate-500">
                                {label}
                            </span>
                            <span className="text-base font-semibold text-slate-900">
                                {value}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Employee
