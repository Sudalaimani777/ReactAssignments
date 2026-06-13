import { useNavigate } from "react-router-dom"


const Register = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/assignment2/task2")
    }
    return (
        <>
            <section className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-blue-300 p-8 rounded-lg shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                    <input type="text" placeholder="Full Name" className="w-full border p-2 rounded mb-4 outline-none focus:border-green-500" />
                    <input type="email" placeholder="Email" className="w-full border p-2 rounded mb-4 outline-none focus:border-green-500" />
                    <input type="password" placeholder="Password" className="w-full border p-2 rounded mb-6 outline-none focus:border-green-500" />
                    <button onClick={handleNavigate} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
                </div>
            </section>
        </>
    )
}

export default Register