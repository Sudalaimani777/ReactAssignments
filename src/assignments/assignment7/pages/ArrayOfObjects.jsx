import { useState } from "react"

const initialProjects = [
  { id: 1, name: "Portfolio", status: "In Progress", mentor: "Riya" },
  { id: 2, name: "Weather App", status: "Pending", mentor: "Kabir" },
  { id: 3, name: "Dashboard UI", status: "Completed", mentor: "Sara" },
]

const ArrayOfObjects = () => {
  const [projects, setProjects] = useState(initialProjects)

  const updateFirstProject = () => {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === 1
          ? { ...project, status: "Completed" }
          : project
      )
    )
  }

  const changeMentor = () => {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === 2
          ? { ...project, mentor: "Anaya", status: "In Review" }
          : project
      )
    )
  }

  const addProject = () => {
    setProjects((currentProjects) => [
      ...currentProjects,
      {
        id: currentProjects.length + 1,
        name: "E-commerce Cart",
        status: "New",
        mentor: "Dev",
      },
    ])
  }

  const resetProjects = () => {
    setProjects(initialProjects)
  }

  return (
    <section className="mt-8 grid gap-6">
      <article className="rounded-[1.75rem] border border-violet-100 bg-violet-50/70 p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-violet-700">
              Array Of Objects
            </p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900">
              Update one object inside a collection
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              This pattern uses map() and object spread syntax so we can update only the matching item inside the array.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button onClick={updateFirstProject} className="rounded-2xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500">
              Complete Project 1
            </button>
            <button onClick={changeMentor} className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Update Project 2
            </button>
            <button onClick={addProject} className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">
              Add Project
            </button>
            <button onClick={resetProjects} className="rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-100">
              Reset List
            </button>
          </div>
        </div>
      </article>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
                Project {project.id}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {project.status}
              </span>
            </div>

            <h4 className="mt-4 text-xl font-black tracking-tight text-slate-900">
              {project.name}
            </h4>
            <p className="mt-2 text-sm text-slate-500">Mentor: {project.mentor}</p>

            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Current Status
              </p>
              <p className="mt-2 text-lg font-bold text-slate-900">{project.status}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ArrayOfObjects
