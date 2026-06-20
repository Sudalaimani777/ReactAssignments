import { useState } from "react"

const initialStudent = {
  name: "Aarav",
  course: "Frontend Development",
  city: "Pune",
}

const Object = () => {
  const [student, setStudent] = useState(initialStudent)

  const updateName = () => {
    setStudent((currentStudent) => ({
      ...currentStudent,
      name: "Meera",
    }))
  }

  const updateCourse = () => {
    setStudent((currentStudent) => ({
      ...currentStudent,
      course: "React and Tailwind",
    }))
  }

  const updateCity = () => {
    setStudent((currentStudent) => ({
      ...currentStudent,
      city: "Bengaluru",
    }))
  }

  const resetStudent = () => {
    setStudent(initialStudent)
  }

  return (
    <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <article className="rounded-[1.75rem] border border-cyan-100 bg-cyan-50/70 p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">
          Object State
        </p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900">
          Update specific properties with spread syntax
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Each action keeps the previous object values and replaces only the property we want to change.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button onClick={updateName} className="rounded-2xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500">
            Change Name
          </button>
          <button onClick={updateCourse} className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Change Course
          </button>
          <button onClick={updateCity} className="rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-400">
            Change City
          </button>
          <button onClick={resetStudent} className="rounded-2xl border border-cyan-200 bg-white px-4 py-3 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-100">
            Reset Profile
          </button>
        </div>
      </article>

      <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h4 className="text-lg font-bold text-slate-900">Student Preview</h4>
        <div className="mt-5 space-y-4">
          <div className="rounded-3xl bg-slate-950 p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Live Object Data
            </p>
            <h5 className="mt-3 text-3xl font-black">{student.name}</h5>
            <p className="mt-2 text-slate-300">{student.course}</p>
          </div>

          <div className="grid gap-3">
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <span className="text-sm font-medium text-slate-500">Name</span>
              <span className="font-semibold text-slate-900">{student.name}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <span className="text-sm font-medium text-slate-500">Course</span>
              <span className="font-semibold text-slate-900">{student.course}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <span className="text-sm font-medium text-slate-500">City</span>
              <span className="font-semibold text-slate-900">{student.city}</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Object
