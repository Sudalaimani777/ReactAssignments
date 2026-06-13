import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";

const Home = () => <Banner title="Welcome Home 🏠" subtitle="This is the Home page" />;
const About = () => <Banner title="About Us 👋" subtitle="Learn more about what we do" />;
const Contact = () => <Banner title="Contact Us 📬" subtitle="Get in touch with our team" />;

const Task1App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Task1App;
