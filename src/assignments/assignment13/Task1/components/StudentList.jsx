import { useContext } from "react";
import  StudentContext  from "../context/StudentContext";

const StudentList = () => {
  const { students } = useContext(StudentContext);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-5">
        Registered Students
      </h2>

      {students.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
          No students registered yet.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">
                {student.name}
              </h3>

              <div className="mt-3 space-y-1 text-gray-600">
                <p>
                  <span className="font-medium">Age:</span> {student.age}
                </p>

                <p>
                  <span className="font-medium">Course:</span>{" "}
                  {student.course}
                </p>

                <p>
                  <span className="font-medium">City:</span> {student.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;