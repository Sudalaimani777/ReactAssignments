import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const UserLoginContext = createContext();

export const UserLoginProvider = ({children}) => {

    const [loginUserData, setLoginUserData] = useState({userEmail: "", userPassword: "" });
    const [currentUserData, setCurrentUserData] = useState(
        JSON.parse(localStorage.getItem("currentUserData")) || null
    )

    const navigate = useNavigate();

    const handleUserLoginInputChange = e => {
        const {name, value} = e.target;
        setLoginUserData({...loginUserData, [name]:value});
        console.log(loginUserData);
    }

    const handleUserLogin = e => {
        e.preventDefault();
        // Get All User from the local Storage
        const getAllUserData = JSON.parse(localStorage.getItem("allUserData")) || [];

        // Check the login inputs values to the all user data from the LS:-
        const matchedUser = getAllUserData.find(user => user.userEmail === loginUserData.userEmail && user.userPassword === loginUserData.userPassword);

        // Now login
        if(matchedUser){
            localStorage.setItem("currentUserData", JSON.stringify(matchedUser))
            setCurrentUserData(matchedUser)
            setLoginUserData({userEmail: "", userPassword: "" })
            navigate("/assignment/12/authentication/dashboard");
            return
        }else{
            alert("Invalid Email or password");
            return
        }
    }



    return(
        <UserLoginContext.Provider value={{handleUserLogin, handleUserLoginInputChange, loginUserData, currentUserData}}>
            {children}
        </UserLoginContext.Provider>
    )
}

export default UserLoginContext;
