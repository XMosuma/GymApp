// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/',  // Django backend base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Example API calls
export const fetchUserProfile = () => api.get('/users/profile/');
export const fetchMeals = () => api.get('/nutrition/meals/');
export const fetchWorkoutPlans = () => api.get('/workouts/plans/');

export default api;
