// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WorkoutsPage from './pages/WorkoutsPage';
import NutritionPage from './pages/NutritionPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/workouts" element={<WorkoutsPage />} />
                    <Route path="/nutrition" element={<NutritionPage />} />
                    <Route path="/profile" element={<UserProfilePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
