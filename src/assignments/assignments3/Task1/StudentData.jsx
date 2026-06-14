const StudentData = ({ studentData }) => {
    const { studentName, studentAge, course, city } = studentData;

    const detailItems = [
        { label: "Student Name", value: studentName },
        { label: "Student Age", value: studentAge },
        { label: "Course", value: course },
        { label: "City", value: city },
    ];

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
            <section className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
                <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
                        Student Profile
                    </p>
                    <h1 className="mt-2 text-3xl font-bold text-slate-900">
                        {studentName}
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Quick overview of the student&apos;s academic information.
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

export default StudentData
