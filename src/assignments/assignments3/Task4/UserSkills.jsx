

const UserSkills = ({ technicalSkills }) => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
            <section className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
                <div className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-600">
                        Skill Set
                    </p>
                    <h1 className="mt-2 text-3xl font-bold text-slate-900">
                        My Technical Skills
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Technologies and tools used across frontend development work.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    {technicalSkills.map((skill) => (
                        <span
                            key={skill}
                            className="rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-2 text-sm font-semibold text-fuchsia-700 shadow-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default UserSkills
