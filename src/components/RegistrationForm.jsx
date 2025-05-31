import React from "react";
import { useForm } from "react-hook-form"
import { MyButton } from "./MyButton";

export function RegistrationForm() {
    const {register, handleSubmit} = useForm();

    function showData(data){
        console.log('Información del nuevo usuario: ' , data)
        alert('Información registrada: ' + JSON.stringify(data, null, 2))
    }

    return(
        <>
            <h1 className="text-center text-colorDreambyte font-tipographyTitulo m-6 text-2xl" >¿Deseas formar parte de esta comunidad? Registrate a continuación :D</h1> 

            <div className="bg-colorNeonDrift flex justify-center w-4/12 mx-auto h-auto p-6 mt-2 rounded-xl">
                <form className="bg-colorNavbar inline-block text-center items-center" onSubmit={handleSubmit(showData)}> 
                    <h3 className="text-colorDreambyte font-tipographyTexto">Ingresa tu nombre completo</h3>
                    <input className="bg-slate-50 rounded-full m-4 p-3 text-center justify-center" type="text" placeholder='Nombre' {...register("nombre")} />
                    <br />
                    <h3 className="text-colorDreambyte font-tipographyTexto">Ingresa tu usuario</h3>
                    <input className="bg-slate-50 rounded-full m-4 p-3 text-center justify-center" type="text" placeholder='Usuario' {...register("usuario")} />
                    <br />
                    <h3 className="text-colorDreambyte font-tipographyTexto">Ingresa tu correo electronico</h3>
                    <input className="bg-slate-50 rounded-full m-4 p-3 text-center justify-center" type="email" placeholder='Email' {...register("correo")}/>
                    <br />
                    <h3 className="text-colorDreambyte font-tipographyTexto">Explica brevemente ¿Porque deseas unirte a nuestra comunidad ^^?</h3>
                    <input className="bg-slate-50 rounded-full m-4 p-3 text-center justify-center" type="textarea" placeholder='¿Por qué quieres unirte?' {...register("¿porque?")}/>
                    <br />
                    <div className="bg-colorPixelSunset rounded-full mx-auto w-fit h-auto p-1 flex justify-items-center">
                        <MyButton className={({isActive}) => isActive ? "font-bold underline bg-colorForestSignal" : ""} type='submit' text="Registrarse" />
                    </div>
                </form>
            </div>
        </>
    )
}