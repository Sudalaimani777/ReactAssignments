import { useEffect, useState } from "react"




const useFetchAPI = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetUsers = async () => {
            try {
                const response = await fetch("https://dummyjson.com/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch the user data");
                }
                const data = await response.json();
                setEmployees(data.users)
            } catch (err) {
                return err.message
            }
        }
        fetUsers();
    }, []);

    return {
        employees
    }
}

export default useFetchAPI