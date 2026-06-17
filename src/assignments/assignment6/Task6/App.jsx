import { useState } from "react"
import ShowHideContent from "./ShowHideContent";


const App = () => {

    const [showContent, setShowContent] = useState(true);
    const handleHideAndShowContent = () => setShowContent(prevContent => !prevContent);

    return (
        <>
            <ShowHideContent showContent={showContent} handleHideAndShowContent={handleHideAndShowContent} />
        </>
    )
}

export default App