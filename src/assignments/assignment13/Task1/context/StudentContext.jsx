import { createContext, useEffect, useState } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const storedStudents = localStorage.getItem("students");

    return storedStudents ? JSON.parse(storedStudents) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;