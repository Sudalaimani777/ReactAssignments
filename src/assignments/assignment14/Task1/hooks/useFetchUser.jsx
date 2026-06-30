import { useEffect, useState } from "react"


const useFetchUser = (apiURL) => {

    const [userData, fetchUserData] = useState([])

    useEffect(() =>{
        const fetchUser = async () => {
            try{
                const response = await fetch(apiURL);
                const data = await response.json();
                fetchUserData(data);
            }catch(err){
                return err;
            }
        }
        fetchUser()
    }, [apiURL]);

  return {
    userData
  }
}

export default useFetchUser