import React, { useState } from "react";
import Imagen from '../assets/home.png'
import ImageProfile from '../assets/kendrick.jpeg'
import appFirebase from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const functAutentificacion = async(e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contrasena = e.target.password.value;

        if(registrando){
            await createUserWithEmailAndPassword(auth, correo, contrasena)
        }
        else{
            await signInWithEmailAndPassword(auth, correo, contrasena)
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={ImageProfile} alt="" className="estilo-profile" />
                            <form onSubmit={functAutentificacion}>
                                <input type="text" placeholder="Ingresar correo" className="cajatexto" id = "email"/>
                                <input type="password" placeholder="Ingresar contrasena" className="cajatexto" id="password" />
                                <button className="btnform">{registrando ? "Registrate" : "Inicia sesion"}</button>
                            </form>
                           <h4 className="texto">{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button className='btnswitch' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "Registrate"}</button></h4> 
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <img src={Imagen}alt="" className="tamano-imagen"/>
                </div>

            </div>

        </div>
    )
}

export default Login