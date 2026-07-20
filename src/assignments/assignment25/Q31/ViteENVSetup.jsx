import { useEffect } from "react";


const ViteENVSetup = () => {

    // const apiUrl = import.meta.env.VITE_API_URL;
    // const secret = import.meta.env.SECRET_KEY;

    const fetchUsers = () => fetch(`${import.meta.env.VITE_API_URL}/users`);

    useEffect(() => {
        fetchUsers()
    }, []);

    return (
        <div>ViteENVSetup</div>
    )
}

export default ViteENVSetup