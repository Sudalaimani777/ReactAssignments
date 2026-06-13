import { Link } from "react-router-dom";
import { assignments } from "../data/assignmentsList";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">React Assignments</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-3 gap-4">
        {assignments.map((a) => (
          <Link
            key={a.id}
            to={`/${a.id}`}
            className="bg-blue-600 text-white p-4 rounded text-center hover:bg-blue-700"
          >
            {a.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;