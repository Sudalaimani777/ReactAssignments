import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserRegisterContext = createContext();

export const UserRegisterProvider = ({ children }) => {

    const [userDataInputs, setUserDataInputs] = useState({ userName: "", userEmail: "", userPassword: "" });
    const [allUserData, setAllUserData] = useState(() => {
        try {
            const getAllUserData = JSON.parse(localStorage.getItem("allUserData"));
            return getAllUserData ? getAllUserData : []
        } catch (e) {
            return []
        }
    })

    const navigate = useNavigate();

    const handleUserInputChange = (e) => {
        const { name, value } = e.target;
        setUserDataInputs({ ...userDataInputs, [name]: value })
    }

    const handleUserRegister = (e) => {
        e.preventDefault();
        const checkEmailExists = allUserData.some(user => user.userEmail === userDataInputs.userEmail);

        if (checkEmailExists) {
            alert("This Email is already registered");
            return
        }

        setAllUserData(prevUser => [...prevUser, userDataInputs]);
        setUserDataInputs({ userName: "", userEmail: "", userPassword: "" })
        console.log(allUserData)
        navigate("/assignment/12/authentication/login")
    }

    useEffect(() => {
        localStorage.setItem("allUserData", JSON.stringify(allUserData))
    })

    return (
        <UserRegisterContext.Provider value={{ handleUserInputChange, userDataInputs, handleUserRegister }}>
            {children}
        </UserRegisterContext.Provider>
    )
}

export default UserRegisterContext;

