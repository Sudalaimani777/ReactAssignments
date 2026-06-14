

const UserInformationCard = ({ userData }) => {
    const { userName, userEmail, mobileNumber, native } = userData;

    const detailItems = [
        { label: "User Name", value: userName },
        { label: "Email", value: userEmail },
        { label: "Mobile Number", value: mobileNumber },
        { label: "Native", value: native },
    ];

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
            <section className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
                <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600">
                        User Profile
                    </p>
                    <h1 className="mt-2 text-3xl font-bold text-slate-900">
                        {userName}
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Contact details and hometown information for the user.
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

export default UserInformationCard
