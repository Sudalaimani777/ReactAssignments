import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const [loginUserInputData, setLoginUserInputData] = useState({ userEmail: "", userPassword: "" });
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser")) || null
    )

    const navigate = useNavigate();

    const loginInputChange = e => {
        const { name, value } = e.target;
        setLoginUserInputData({ ...loginUserInputData, [name]: value });
    }

    const handleUserLogin = e => {
        e.preventDefault();
        // Get All UserData :-
        const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
        // Matched User :-
        const matchedUser = allUsers.find(user => user.userEmail === loginUserInputData.userEmail && user.userPassword === loginUserInputData.userPassword);
        if (matchedUser) {
            localStorage.setItem("currentUser", JSON.stringify(matchedUser));
            setCurrentUser(matchedUser);
            navigate("/assignment/20/dashboard");
        } else {
            alert("Invalid email or password");
            return;
        }
    }

    return (
        <LoginContext.Provider value={{ loginUserInputData, handleUserLogin, loginInputChange, currentUser}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContext;