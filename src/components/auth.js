import React, { useEffect } from "react";
import Home from '../pages/Home/Home';
import Login from "../pages/Login/Login";
import {app} from '../lib/firebase'


import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

function  Autenticacion() {
    const [usuario, setUsuario] = React.useState(null);
    useEffect(() => {
        onAuthStateChanged(auth,(usuarioFirebase) => {
          console.log("ya tienes sesión iniciada con:", usuarioFirebase);
          setUsuario(usuarioFirebase);
        });
      }, []);
  
    return <>{usuario ? <Home /> : <Login setUsuario={setUsuario} />}</>;
  }

  export default Autenticacion;

 