import useFetchUser from "../hooks/useFetchUser";

const ShowAllUserData = () => {
  const { userData } = useFetchUser(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 text-center mb-2">
          Users
        </h1>

        <p className="text-center text-slate-500 mb-10">
          List of all registered users
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {userData?.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow-md p-6 border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold mb-5">
                {user.name.charAt(0)}
              </div>

              {/* Name */}
              <h2 className="text-xl font-semibold text-slate-800">
                {user.name}
              </h2>

              <p className="text-slate-500 mb-5">@{user.username}</p>

              <div className="space-y-3 text-sm text-slate-700">
                <p>
                  <span className="font-semibold">📧 Email:</span>{" "}
                  {user.email}
                </p>

                <p>
                  <span className="font-semibold">📞 Phone:</span>{" "}
                  {user.phone}
                </p>

                <p>
                  <span className="font-semibold">🌐 Website:</span>{" "}
                  {user.website}
                </p>

                <p>
                  <span className="font-semibold">🏢 Company:</span>{" "}
                  {user.company.name}
                </p>

                <p>
                  <span className="font-semibold">📍 City:</span>{" "}
                  {user.address.city}
                </p>
              </div>

              <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowAllUserData;