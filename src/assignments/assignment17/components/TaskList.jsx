import useTaskStore from "../store/todoStore";
import { TaskCard } from "./index";

const TaskList = () => {
  const { tasks, searchTerm } = useTaskStore();

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 1. Empty State: No tasks created at all yet
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="rounded-full bg-slate-100 p-4 dark:bg-slate-800 text-slate-400 dark:text-slate-500">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">Your list is clear</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
          Looks like you don't have any tasks planned. Add one above to get organized!
        </p>
      </div>
    );
  }

  // 2. Empty State: Search filter yielded zero matches
  if (filteredTasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="rounded-full bg-slate-50 p-4 dark:bg-slate-950 text-slate-400 dark:text-slate-600">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
        </div>
        <h3 className="mt-4 text-sm font-medium text-slate-900 dark:text-white">No matches found</h3>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          We couldn't find anything matching "<span className="font-semibold text-slate-700 dark:text-slate-300">{searchTerm}</span>".
        </p>
      </div>
    );
  }

  // 3. Active List View
  return (
    <div className="divide-y divide-slate-100 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900/40">
      {filteredTasks.map((task) => (
        <div 
          key={task.id} 
          className="transition-colors duration-150 hover:bg-slate-50/50 dark:hover:bg-slate-800/20"
        >
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;