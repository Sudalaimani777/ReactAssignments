import { useContext, useState } from "react";
import  EmployeeContext  from "../context/EmployeeContext";

const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    department: "",
    salary: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.employeeId ||
      !formData.department ||
      !formData.salary
    ) {
      return;
    }

    addEmployee({
      ...formData,
      id: Date.now(),
    });

    setFormData({
      name: "",
      employeeId: "",
      department: "",
      salary: "",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Employee Management
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
          className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <button className="md:col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;