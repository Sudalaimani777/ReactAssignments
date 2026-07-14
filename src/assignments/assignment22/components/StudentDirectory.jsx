
import { useState } from 'react';
import { useSearch } from '../hooks/useSearch';

export const StudentDirectory = () => {
  const [students] = useState([
    { id: 'S101', name: 'Alice Smith', major: 'Computer Science' },
    { id: 'S102', name: 'Bob Jones', major: 'Electrical Engineering' },
    { id: 'S103', name: 'Charlie Brown', major: 'Mathematics' },
    { id: 'S104', name: 'Diana Prince', major: 'Data Science' },
    { id: 'S105', name: 'Evan Wright', major: 'Physics' },
  ]);

  const { searchTerm, setSearchTerm, filteredItems } = useSearch(students, 'name');

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Student Directory</h2>
      <input
        type="text"
        placeholder="Search students by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md px-4 py-2 mb-4 border rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none"
      />
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b dark:border-gray-700 text-sm font-semibold text-gray-500 uppercase">
              <th className="pb-2">ID</th>
              <th className="pb-2">Name</th>
              <th className="pb-2">Major</th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-gray-700 text-sm text-gray-700 dark:text-gray-300">
            {filteredItems.length > 0 ? (
              filteredItems.map(student => (
                <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="py-3 font-semibold text-amber-600">{student.id}</td>
                  <td className="py-3 font-medium">{student.name}</td>
                  <td className="py-3 opacity-80">{student.major}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-4 text-center italic text-gray-400">No student records match your inquiry.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};