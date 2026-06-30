import { useEffect, useState } from "react"


const useFetchTime = () => {

    
    const getTime = () => {
        const currentDate = new Date();
        return `Current Time: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    }
    const [currentTime, setCurrentTime] = useState(getTime)

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(getTime()), 1000);

        return () => clearInterval(interval)
    }, [])

    return {
        currentTime
    }
}

export default useFetchTime

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log(`Current Time: ${hours}:${minutes}:${seconds}`);