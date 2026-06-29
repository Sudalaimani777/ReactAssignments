import { useContext, useState } from "react";
import  StudentContext  from "../context/StudentContext";

const StudentForm = () => {
  const { addStudent } = useContext(StudentContext);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    city: "",
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
      !formData.age ||
      !formData.course ||
      !formData.city
    ) {
      return;
    }

    addStudent({
      ...formData,
      id: Date.now(),
    });

    setFormData({
      name: "",
      age: "",
      course: "",
      city: "",
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Student Registration
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
        >
          Register Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;