import { useContext } from 'react';
import  EmployeeContext  from '../context/EmployeeContext';

const EmployeeForm = () => {
  const { employeeForm, handleChange, handleSubmit } = useContext(EmployeeContext);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Employee Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Employee Name</label>
          <input 
            type="text" 
            name="employeeName" 
            value={employeeForm.employeeName} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            placeholder="Jane Doe"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label>
          <input 
            type="text" 
            name="employeeId" 
            value={employeeForm.employeeId} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            placeholder="EMP-1042"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Department</label>
          <input 
            type="text" 
            name="department" 
            value={employeeForm.department} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            placeholder="Engineering"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Salary</label>
          <input 
            type="number" 
            name="salary" 
            value={employeeForm.salary} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            placeholder="85000"
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 shadow-sm"
        >
          Generate Card
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;