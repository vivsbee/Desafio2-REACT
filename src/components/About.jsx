import React from "react";
import aboutImage from "../assets/habitacionGamer.jfif";

export function About() {
    return(
        <>
            <div className="w-3/5 h-auto m-2 p-3">
                <h1 className="text-center text-colorDreambyte font-tipographyTexto">
                ¡Bienvenido a GameVerse News, el rincón definitivo para todos los amantes de los videojuegos!
                Aquí compartimos noticias, reseñas, curiosidades y experiencias de los títulos que nos hacen vibrar, desde clásicos retro hasta los últimos lanzamientos. Únete a nuestra comunidad gamer y revive tu pasión por jugar, explorar y competir. ¡Porque aquí, los videojuegos no son solo un pasatiempo... son una forma de vida! 🎮🔥

                En GameVerse News, cada partida cuenta y cada jugador tiene voz. Ya sea que seas fan de los RPGs, ames los shooters, te encanten los indies o te dediques al competitivo, encontrarás un espacio para compartir tus opiniones, descubrir nuevas joyas y conectar con otros jugadores como tú. Además, nuestros foros están llenos de debates, memes, guías, recomendaciones y eventos exclusivos para nuestra comunidad. 💬 Comparte tus logros, 🎥 sube tus clips, 🧠 aprende de otros, y sobre todo...
                ¡Haz de GameVerse tu segundo hogar digital! 🌍🕹️
                </h1>
            </div>
            <div className="w-2/5 h-auto m-2 p-3">
                <img className="justify-center items-center w-auto h-max rounded-2xl" src={aboutImage} alt="aboutImage"/> 
            </div>
        </>
    )
}