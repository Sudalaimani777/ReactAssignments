import useTimer from "../hooks/useTimer";

const Timer = () => {
  const { timer } = useTimer();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-lg rounded-2xl px-10 py-8 text-center border border-slate-200">
        <h1 className="text-2xl font-semibold text-slate-700 mb-4">
          ⏱️ Timer
        </h1>

        <p className="text-6xl font-bold text-indigo-600 tracking-wider">
          {timer}
        </p>

        <p className="mt-4 text-sm text-slate-500">
          Seconds elapsed
        </p>
      </div>
    </div>
  );
};

export default Timer;