import { createContext, useState } from "react";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {

    const [userData] = useState({
        name: "Sudalaimani",
        email: "sudalaimani5112007@gmail.com",
        role: "Student"
    })

    return (
        <UserDataContext.Provider value={{ userData }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataContext;