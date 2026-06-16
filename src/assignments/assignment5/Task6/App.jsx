import { useState } from "react";


const App = () => {

    const animes = ["Naruto", "Bleach", "OnePiece"];

    const [anime, setAnime] = useState(animes);

    return (
        <>
            <main>
                <section>
                    <h1>Arrays  in States</h1>
                    {
                        anime.map(anime => (
                            <p key={anime}>{anime}</p>
                        ))
                    }
                </section>
            </main>
        </>
    )
}

export default App