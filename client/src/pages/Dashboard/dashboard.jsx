import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from 'react-router-dom';
import './Dashboard.css'

export const Dashboard = () => {
    const handleSignOut = () => {
        signOut(auth).then(() => console.log("Sign Out")).catch((error) => console.log(error))
    }
    return (
        <>

            <header>
                <div className="header">
                    <div>
                        <h1>Dashboard</h1>
                    </div>
                    <div className="buttons">
                        <button className="btn" onClick={handleSignOut}>Log out</button>
                    </div>
                </div>
            </header>
            <div className="body-container">
                <section id="dashboard">
                    <div className="container">
                        <h2>Habit Streak Tracking</h2>

                        <div className="habits">
                            <div className="habit">
                                <h3>Exercise</h3>
                                <p>Current Streak: <span className="streak" id="exerciseStreak">5 days</span></p>
                                <button className="btn" onclick="incrementStreak('exercise')">Complete Exercise</button>
                            </div>

                            <div className="habit">
                                <h3>Reading</h3>
                                <p>Current Streak: <span className="streak" id="readingStreak">3 days</span></p>
                                <button className="btn" onclick="incrementStreak('reading')">Complete Reading</button>
                            </div>
                        </div>
                        <div className="stats">
                            <h3>Statistics</h3>
                            <ul>
                                <li className="stat">Total Habits:</li>
                                <li className="stat">Total Streaks:</li>
                                <li className="stat">Longest Streak:</li>
                            </ul>
                            <div id="stats"></div>
                        </div>
                        <div className="buttons">
                            <Link to="/" className="btn">Add Habit</Link>
                            <Link to="/" className="btn">Calendar View</Link>
                        </div>
                    </div>
                </section>
            </div>
            <footer>
                <div className="container">
                    <p>&copy; 2024 TrackItToHabit. All rights reserved.</p>
                </div>
            </footer>


        </>
    )
}