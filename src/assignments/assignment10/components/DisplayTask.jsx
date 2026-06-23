import { useContext } from "react"
import TaskContext from "../context/TaskContext"


const DisplayTask = () => {
  const { allTask, handleEditTask, handleDeleteTask } = useContext(TaskContext);
  return (
    <>
      <section>
        {
          allTask.map((task, taskIdx) => (
            <p key={taskIdx}>
              {task.taskTitle} - {task.taskDescription}
              <span onClick={() => handleEditTask(task, taskIdx)}>Edit</span>
              <span onClick={() => handleDeleteTask(taskIdx)}>Delete</span>
            </p>
          ))
        }
      </section>
    </>
  )
}

export default DisplayTask