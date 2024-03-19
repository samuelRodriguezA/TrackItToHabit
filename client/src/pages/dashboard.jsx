import {signOut} from "firebase/auth";
import { auth } from "../firebase";

export const Dashboard = () => {
    const handleSignOut = () => {
        signOut(auth).then(() => console.log("Sign Out")).catch((error) => console.log (error))
    }
    return (
        <section>
            <h2> Private Dashboard</h2>
            <button onClick={handleSignOut}>Log out</button>
        </section>
    )
}