import { Link } from 'react-router-dom';
import './Home.css';
export const Home = () => {
  return (
    <>
      <header>
        <div className="header">
          <div>
            <h1>TrackItTohabit</h1>
            <p>Welcome to TrackItTohabit - Your Personal Habit Tracker</p>
          </div>
          <div className="buttons">
            <Link to="/login" className="btn">Log In</Link>
            <Link to="/login" className="btn">Create Account</Link>
          </div>
        </div>
      </header>

      {/* <div className="home-container">
        <div className="description">
          <p>
            TrackItToHabit is a habit tracker app designed to help you build and maintain healthy habits.
            With features like daily tracking, goal setting, and habit streaks, it's the perfect tool
            to stay motivated and accountable on your journey to a better you.
          </p>
        </div>
      </div> */}
      <section id="hero" className="section-home">
        <div className="container">
          <h2>Track Your Habits, Achieve Your Goals</h2>
          <p>TrackItOhabit helps you build better habits and reach your goals by making habit tracking simple and effective.</p>
        </div>
      </section>
      <section id="features" className="section-home">
        <div className="container">
          <h2>Key Features:</h2>
          <ul>
            <li>Easy Habit Tracking: Log your habits effortlessly with our intuitive interface.</li>
            <li>Customizable Goals: Set personalized goals and milestones to stay motivated.</li>
            <li>Insightful Analytics: Gain valuable insights into your habits and progress over time.</li>
            <li>Daily Reminders: Stay on track with customizable reminders to complete your habits.</li>
            <li>Secure and Private: Your data is encrypted and securely stored for your peace of mind.</li>
          </ul>
        </div>
      </section>
      <section id="get-started" className="section-home">
        <div className="container">
          <h2>Get Started Today!</h2>
          <p>Start your journey to a healthier, happier you with TrackItOhabit.</p>
          <div className="buttons">
            <Link to="/login" className="btn">Sign Up </Link>
          </div>
        </div>
      </section>
      <section id="stay-connected" className="section-home">
        <div className="container">
          <h2>Stay Connected:</h2>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <ul>
            <li><a href="privacy-policy">Privacy Policy</a></li>
            <li><a href="terms-of-service">Terms of Service</a></li>
          </ul>
          <p>&copy; 2024 TrackItOhabit. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};