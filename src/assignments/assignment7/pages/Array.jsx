import { useState } from "react"

const initialSkills = ["HTML", "CSS", "JavaScript"]

const Array = () => {
  const [skills, setSkills] = useState(initialSkills)

  const addSkill = () => {
    setSkills((currentSkills) => [...currentSkills, `React ${currentSkills.length - 1}`])
  }

  const updateSecondSkill = () => {
    setSkills((currentSkills) =>
      currentSkills.map((skill, index) => (index === 1 ? "Tailwind CSS" : skill))
    )
  }

  const removeFirstSkill = () => {
    setSkills((currentSkills) => currentSkills.slice(1))
  }

  const resetSkills = () => {
    setSkills(initialSkills)
  }

  return (
    <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <article className="rounded-[1.75rem] border border-emerald-100 bg-emerald-50/70 p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-700">
          Array State
        </p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900">
          Store a list and update it immutably
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          This example adds, edits, removes, and resets values from a simple string array using useState.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={addSkill} className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">
            Add Skill
          </button>
          <button onClick={updateSecondSkill} className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Update 2nd Skill
          </button>
          <button onClick={removeFirstSkill} className="rounded-2xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-400">
            Remove 1st Skill
          </button>
          <button onClick={resetSkills} className="rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">
            Reset
          </button>
        </div>
      </article>

      <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h4 className="text-lg font-bold text-slate-900">Current Skills</h4>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            {skills.length} items
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {skills.map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
            >
              <span className="text-sm font-medium text-slate-500">Skill {index + 1}</span>
              <span className="text-base font-semibold text-slate-900">{skill}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

export default Array
