import { useContext } from "react"
import TaskContext from "../context/TaskContext"


const TaskForm = () => {

  const {taskData, handleTaskChange, handleAddTask, editTaskId, handleUpdateTask} = useContext(TaskContext);

  return (
    <>
        <section>
          <form>
            <label htmlFor="taskTitle">Enter the Task Title</label>
            <input type="text" name="taskTitle" id="taskTitle" placeholder="Add Task" onChange={handleTaskChange} value={taskData.taskTitle}/>
            <label htmlFor="taskDescription">Enter the Task Description</label>
            <input type="text" name="taskDescription" id="taskDescription" placeholder="Add Task Description" onChange={handleTaskChange} value={taskData.taskDescription}/>
            {
              editTaskId !== null ? <button type="submit" onClick={handleUpdateTask}>Update Task</button> : <button type="submit" onClick={handleAddTask}>Add Task</button>
            }
          </form>
        </section>
    </>
  )
}

export default TaskForm