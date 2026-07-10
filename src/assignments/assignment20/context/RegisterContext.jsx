import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {

    const [userInputs, setUserInputs] = useState({ userName: "", userEmail: "", userPassword: "" });
    const [allUsers, setAllUsers] = useState(() => {
        try {
            const getAllUserData = JSON.parse(localStorage.getItem("allUsers"));
            return getAllUserData ? getAllUserData : [];
        } catch (e) {
            console.log(e);
            return [];
        }
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInputs({ ...userInputs, [name]: value })
    }

    const userRegistration = e => {
        e.preventDefault();
        // Email Validation :-
        const emailExists = allUsers.some(user => user.userEmail === userInputs.userEmail);
        if (emailExists) {
            alert("Email already exists");
            return;
        }
        setAllUsers(prevUser => [...prevUser, userInputs]);
        setUserInputs({ userName: "", userEmail: "", userPassword: "" })
        navigate("/assignment/20/loginandregisterwithprotectedroutes/login");
    }

    useEffect(() => {
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
    })

    return (
        <RegisterContext.Provider value={{ handleInputChange, userRegistration, userInputs }}>
            {children}
        </RegisterContext.Provider>
    )
}

export default RegisterContext;