import { useEffect, useState } from "react"


const useTimer = () => {

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const timing = setInterval(() => setTimer(prevTime => prevTime + 1), 1000)

        return () => clearInterval(timing)
    }, [])

    return {
        timer
    }
}

export default useTimer