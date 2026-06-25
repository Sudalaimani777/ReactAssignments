import { createContext, useState } from 'react';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    course: '',
    city: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', age: '', course: '', city: '' }); // Clear form
  };

  return (
    <StudentContext.Provider value={{ formData, submittedData, handleChange, handleSubmit }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext