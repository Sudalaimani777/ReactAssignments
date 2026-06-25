import  { createContext, useState } from 'react';

 const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  // Single object state for employee fields
  const [employeeForm, setEmployeeForm] = useState({
    employeeName: '',
    employeeId: '',
    department: '',
    salary: ''
  });

  // State to hold the submitted data for the employee card
  const [submittedEmployee, setSubmittedEmployee] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedEmployee(employeeForm);
    // Reset form fields after submission
    setEmployeeForm({ employeeName: '', employeeId: '', department: '', salary: '' });
  };

  return (
    <EmployeeContext.Provider value={{ employeeForm, submittedEmployee, handleChange, handleSubmit }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContext;