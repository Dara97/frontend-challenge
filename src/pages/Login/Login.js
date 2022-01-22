import React from "react";
import "./Login.css"
import { app } from '../../lib/firebase'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(app);


const Login = (props) => {

    const [isRegistrando, setIsRegistrando] = React.useState(false);

    const crearUsuario = (correo, password) => {

        createUserWithEmailAndPassword(auth, correo, password)
            .then((usuarioFirebase) => {
                console.log("usuario creado:", usuarioFirebase);
                props.setUsuario(usuarioFirebase);
            });
    };

    const iniciarSesion = (correo, password) => {

        signInWithEmailAndPassword(auth, correo, password)
            .then((usuarioFirebase) => {
                console.log("sesión iniciada con:", usuarioFirebase.user);
                props.setUsuario(usuarioFirebase);
            });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const correo = e.target.emailField.value;
        const password = e.target.passwordField.value;

        if (isRegistrando) {
            crearUsuario(correo, password);
        }

        if (!isRegistrando) {
            iniciarSesion(correo, password);
        }
    };


    return (
        <div className="container-padre">
            <div className="container" >
                <div className="contact-login"><h1> {isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
                    <form onSubmit={submitHandler}>
                        <label className="labelLogin" htmlFor="emailField"> Correo </label>
                        <input type="email" id="emailField" className="form-group" />
                        <label className="labelLogin" htmlFor="passwordField"> Contraseña </label>
                        <input type="password" id="passwordField" className="form-group" />
                        <br/>
                        <br/>
                        <button type="submit" className="boton-login">
                            {" "}
                            {isRegistrando ? "Regístrate" : "Inicia sesión"}{" "}
                        </button>
                    </form>
                    <br/>
                    <button className="boton-cambio" onClick={() => setIsRegistrando(!isRegistrando)} >
                        {isRegistrando
                            ? "¿Ya tienes cuenta? ¡Inicia sesión"
                            : "¿No tienes cuenta? ¡Regístrate gratis!"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;