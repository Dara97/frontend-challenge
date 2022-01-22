import CreateNotes from "../../components/CreateNotes";
import Notes from "../../components/Notes";
import { app } from "../../lib/firebase"
import { getAuth, signOut } from "firebase/auth";
import "./Home.css"


const auth = getAuth(app);

const Home = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <h1 className="title-navbar">Prototype application for notes</h1>
                <button onClick={() => signOut(auth)}> Cerrar sesión</button>
            </nav>
            <div className="containerhome">

                <CreateNotes />
                <Notes />
               
            </div>
        </>
    );
}

export default Home;