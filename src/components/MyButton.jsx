export function MyButton({text, func}){
    return (
        <button className="bg-colorBotonClaro rounded-full p-2 font-medium font-tipographyTexto transition ease-in-out delay-150 hover:bg-colorBotonOscuro hover:scale-110 duration-300" onClick={func}>{text || "Soy un botón"}</button>
    )
}