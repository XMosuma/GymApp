// src/components/Workouts/WorkoutPlanForm.js
import React, { useState } from 'react';
import api from '../../services/api';

const WorkoutPlanForm = ({ onWorkoutPlanAdded }) => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newWorkoutPlan = { name };
            const response = await api.post('/workouts/plans/', newWorkoutPlan);
            onWorkoutPlanAdded(response.data);  // Update list of workout plans
            setName('');
        } catch (error) {
            console.error("Error creating workout plan:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Workout Plan Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <button type="submit">Create Workout Plan</button>
        </form>
    );
};

export default WorkoutPlanForm;
