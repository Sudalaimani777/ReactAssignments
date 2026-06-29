import { useContext } from "react";
import  EmployeeContext  from "../context/EmployeeContext";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);

  return (
    <div className="mt-10 bg-white shadow-lg rounded-xl p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-5">
        Employee Records
      </h2>

      {employees.length === 0 ? (
        <p className="text-center text-gray-500">
          No employees added yet.
        </p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="p-3 text-left">Employee ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Salary</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className="border-b hover:bg-gray-100"
              >
                <td className="p-3">{employee.employeeId}</td>
                <td className="p-3">{employee.name}</td>
                <td className="p-3">{employee.department}</td>
                <td className="p-3">₹ {employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;