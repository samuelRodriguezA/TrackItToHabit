import { Link } from 'react-router-dom';
export const Home = () => {
    return (
        <section>
            <div className="home-container">
            <header className="header">
        <h1 className="title">TrackItToHabit</h1>
        <div className="menu">
          <Link to="/login" className="menu-item">Log In or Create an account</Link>
        </div>
      </header>
      <div className="description">
        <p>
          TrackItToHabit is a habit tracker app designed to help you build and maintain healthy habits. 
          With features like daily tracking, goal setting, and habit streaks, it's the perfect tool 
          to stay motivated and accountable on your journey to a better you.
        </p>
      </div>
    </div>
        </section>
    );
};