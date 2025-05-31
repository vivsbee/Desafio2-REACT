import React from "react";
import minecraft from "../assets/minecraft.jfif";
import counterStrike from "../assets/counterStrike.jfif";
import zelda from "../assets/zelda.jfif";
import marioBros from "../assets/superMarioBros.jfif";
import worldOfWarcraft from "../assets/worldOfWarcraft.jfif";

export function Gallery() {
    return(
        <>
        <div className="w-1/5 h-auto m-2 p-3">
            <img className="justify-center items-center w-auto h-max rounded-2xl" src={zelda} alt="zelda"/>
            <h1 className="font-tipographyTitulo text-center font-semibold text-2xl text-colorGlitchPulse">The Legend of Zelda: Ocarina of Time</h1>
        </div>
        <div className="w-1/5 h-auto m-2 p-3">
            <img className="justify-center items-center w-auto h-max rounded-2xl" src={minecraft} alt="minecraft"/>
            <h1 className="font-tipographyTitulo text-center font-semibold text-2xl text-colorGlitchPulse">Minecraft</h1>
        </div>
        <div className="w-1/5 h-auto m-2 p-3">
            <img className="justify-center items-center w-auto h-max rounded-2xl" src={marioBros} alt="marioBros"/>
            <h1 className="font-tipographyTitulo text-center font-semibold text-2xl text-colorGlitchPulse">Super Mario Bros</h1>
        </div>
        <div className="w-1/5 h-auto m-2 p-3">
            <img className="justify-center items-center w-auto h-max rounded-2xl" src={worldOfWarcraft} 
            alt="worldOfWarcraft"/>
            <h1 className="font-tipographyTitulo text-center font-semibold text-2xl text-colorGlitchPulse">World of Warcraft</h1>
        </div>
        <div className="w-1/5 h-auto m-2 p-3">
            <img className="justify-center items-center w-auto h-max rounded-2xl" src={counterStrike} alt="counterStrike"/>
            <h1 className="font-tipographyTitulo text-center font-semibold text-2xl text-colorGlitchPulse">Counter-Strike</h1>
        </div>
        </>
    )
}