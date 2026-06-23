import { useContext, useRef } from "react";
import TaskContext from "../context/TaskContext";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DisplayTask = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".task-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  const { allTask, handleEditTask, handleDeleteTask } =
    useContext(TaskContext);

  return (
    <section className="mt-10" ref={container}>
      {allTask.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl text-white font-bold">No Tasks Yet</h2>

          <p className="text-gray-400 mt-3">
            Create your first task and start tracking progress.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6">
          {allTask.map((task, taskIdx) => (
            <article
              key={taskIdx}
              className="task-card group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-violet-500/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {task.taskTitle}
                  </h2>

                  <p className="text-gray-400 mt-3">
                    {task.taskDescription}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => handleEditTask(task, taskIdx)}
                  className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-500/20 text-violet-300 hover:bg-violet-500/30 transition-all"
                >
                  <FaPencilAlt size={16} />
                  Edit
                </button>

                <button
                  onClick={() => handleDeleteTask(taskIdx)}
                  className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/20 text-red-300 hover:bg-red-500/30 transition-all"
                >
                  <FaTrashAlt size={16} />
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default DisplayTask;
