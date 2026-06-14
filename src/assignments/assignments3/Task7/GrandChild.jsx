

const GrandChild = ({ data }) => {
    const { name, course } = data

    const detailItems = [
        { label: "Student Name", value: name },
        { label: "Course", value: course },
    ];

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
            <section className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
                <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
                        Prop Drilling
                    </p>
                    <h1 className="mt-2 text-3xl font-bold text-slate-900">
                        {name}
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Final component receiving data passed through parent and child components.
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

export default GrandChild
