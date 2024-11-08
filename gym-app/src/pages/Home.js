// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Gym App</h1>
            <p>Track your workouts, manage your nutrition, and stay healthy!</p>
            <nav>
                <Link to="/workouts">Workout Plans</Link> | 
                <Link to="/nutrition">Nutrition</Link> | 
                <Link to="/profile">User Profile</Link>
            </nav>
        </div>
    );
};

export default Home;
