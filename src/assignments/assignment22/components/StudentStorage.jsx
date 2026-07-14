
import { useLocalStorage } from '../hooks/useLocalStorage';

export const StudentStorage = () => {
  const [studentName, setStudentName] = useLocalStorage('studentName', '');

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm max-w-sm">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Persistence Vault</h2>
      <p className="text-xs text-gray-500 mb-4">Type a name and refresh the page to test persistence.</p>
      
      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Student Name</label>
      <input
        type="text"
        placeholder="Enter student name..."
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
      />
      {studentName && (
        <p className="mt-3 text-sm text-purple-600 dark:text-purple-400 font-medium">
          Saved in LocalStorage: <span className="underline font-bold">{studentName}</span>
        </p>
      )}
    </div>
  );
};