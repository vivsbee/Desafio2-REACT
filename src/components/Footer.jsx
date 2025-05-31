import React from "react";

export function Footer() {
    return(
        <footer className="fixed relative bottom-0 w-full m-0">
            <div className="bg-colorNeonDrift text-colorDreambyte h-[130px] flex flex-col justify-center items-center gap-3">
                <h1 className="text-colorDreambyte font-semibold text-3xl font-tipographyTitulo justify-center">GameVerse Zone</h1>
                <p className="text-colorDreambyte font-tipographyTexto">¿Quieres alguno de los juegos que viste? Entra a Steam</p>
                <a className="text-colorDreambyte font-normal text-xl font-tipographyTitulo justify-center" href="https://store.steampowered.com/?l=spanish">- STEAM -</a>
            </div>
            <div className="bg-colorForestSignal text-colorDreambyte h-6 text-center">
                <p> Desafio 2 -Curso React BIT -&copy; Lina V. Garnica 2025</p>
            </div>
        </footer>
    )
}