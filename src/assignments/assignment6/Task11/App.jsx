import { useState } from "react";
import CourseSelection from "./CourseSelection";

const App = () => {
  const [course, setCourse] = useState("MERN");

  const handleCourseChange = () => {
    setCourse("React Native");
  };

  return <CourseSelection course={course} handleCourseChange={handleCourseChange} />;
};

export default App;
