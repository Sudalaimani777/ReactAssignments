import  { ScrollProvider } from "./context/ScrollContext"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";


const App = () => {



  return (
    <>
      <ScrollProvider>
        <Navbar />
        <Home />
        <About />
        <Contact />
      </ScrollProvider>
    </>
  )
}

export default App