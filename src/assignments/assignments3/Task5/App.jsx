import UserInformationCard from "./UserInformationCard"


const App = () => {

    const userData = {
        userName: "Sudalaimani Kannan",
        userEmail: "sudalaimani5112007@gmail.com",
        mobileNumber: "1234567890",
        native: "Ettaiyapuram"
    }

    return (
        <>
            <UserInformationCard userData={userData} />
        </>
    )
}

export default App