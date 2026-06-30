import useFetchTime from "../hooks/useFetchTime";

const Clock = () => {
    const { currentTime } = useFetchTime();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="bg-slate-950 text-white px-10 py-8 rounded-2xl shadow-2xl border border-slate-700 text-center">
                <h2 className="text-xl font-medium text-slate-400 mb-4">
                    🕒 Digital Clock
                </h2>

                <h1 className="text-6xl font-bold tracking-widest text-cyan-400 font-mono">
                    {currentTime}
                </h1>

                <p className="mt-5 text-sm text-slate-500">
                    Current Local Time
                </p>
            </div>
        </div>
    );
};

export default Clock;