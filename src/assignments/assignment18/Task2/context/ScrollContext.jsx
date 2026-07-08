import { createContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {

    const homeRef = useRef();
    const aboutRef = useRef();
    const contactRef = useRef();

    const handleHomeScroll = () => {
        homeRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    const handleAboutScroll = () => {
        aboutRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    const handleContactScroll = () => {
        contactRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    return (
        <ScrollContext.Provider value={{ homeRef, handleHomeScroll, aboutRef, handleAboutScroll, contactRef, handleContactScroll }}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollContext;