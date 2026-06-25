import { useContext } from 'react';
import StudentContext from '../context/StudentRegistrationContext';

const StudentDetails = () => {
  const { submittedData } = useContext(StudentContext);

  if (!submittedData) {
    return (
      <div className="max-w-md mx-auto mt-6 p-4 bg-gray-50 border border-dashed border-gray-300 rounded-xl text-center text-gray-500">
        No student details submitted yet.
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-emerald-50 border border-emerald-200 rounded-xl shadow-sm">
      <h3 className="text-lg font-bold text-emerald-800 mb-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-500 block"></span>
        Submitted Student Details
      </h3>
      <div className="space-y-2.5 text-emerald-950">
        <p><span className="font-semibold text-emerald-800">Name:</span> {submittedData.name}</p>
        <p><span className="font-semibold text-emerald-800">Age:</span> {submittedData.age}</p>
        <p><span className="font-semibold text-emerald-800">Course:</span> {submittedData.course}</p>
        <p><span className="font-semibold text-emerald-800">City:</span> {submittedData.city}</p>
      </div>
    </div>
  );
};

export default StudentDetails;