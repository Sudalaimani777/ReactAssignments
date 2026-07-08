import { useContext } from "react"
import InputContext from "../context/InputContext"

const Content = () => {
  const { textRef } = useContext(InputContext)
  return (
    <>
      <h1 
        ref={textRef}
        className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl text-center min-h-[1.5em] break-words"
      >
        {/* Text injected dynamically via the ref will automatically inherit these styles */}
      </h1>
    </>
  )
}

export default Content
