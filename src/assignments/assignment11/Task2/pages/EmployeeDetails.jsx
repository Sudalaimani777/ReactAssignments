import { useContext } from 'react';
import  EmployeeContext  from '../context/EmployeeContext';

const EmployeeDetails = () => {
  const { submittedEmployee } = useContext(EmployeeContext);

  if (!submittedEmployee) {
    return (
      <div className="max-w-md mx-auto mt-6 p-4 bg-gray-50 border border-dashed border-gray-300 rounded-xl text-center text-gray-500">
        No employee profile generated yet.
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto mt-6 bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl overflow-hidden border border-indigo-400">
      <div className="p-6 text-white">
        {/* Card Header Badge */}
        <div className="flex justify-between items-center border-b border-indigo-400 pb-4 mb-4">
          <span className="text-xs font-bold tracking-widest uppercase opacity-75">Company ID Pass</span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-semibold">Active</span>
        </div>
        
        {/* Main Details Layout */}
        <div className="space-y-4">
          <div>
            <p className="text-xs opacity-70 uppercase tracking-wider">Name</p>
            <h3 className="text-xl font-bold tracking-wide">{submittedEmployee.employeeName}</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs opacity-70 uppercase tracking-wider">Employee ID</p>
              <p className="font-mono font-medium">{submittedEmployee.employeeId}</p>
            </div>
            <div>
              <p className="text-xs opacity-70 uppercase tracking-wider">Department</p>
              <p className="font-medium">{submittedEmployee.department}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-indigo-400/50 flex justify-between items-end">
            <div>
              <p className="text-xs opacity-70 uppercase tracking-wider">Salary</p>
              <p className="text-lg font-bold">${Number(submittedEmployee.salary).toLocaleString()}</p>
            </div>
            {/* Minimalist Barcode Decal for realism */}
            <div className="h-7 w-20 bg-white/20 rounded opacity-40 flex items-center justify-around px-1">
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`h-full bg-white ${i % 3 === 0 ? 'w-0.5' : 'w-1'}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;