// src/pages/WorkoutsPage.js
import React, { useState, useEffect } from 'react';
import WorkoutPlanList from '../components/Workouts/WorkoutPlanList';
import WorkoutPlanForm from '../components/Workouts/WorkoutPlanForm';
import ExerciseList from '../components/Workouts/ExerciseList';
import { fetchWorkoutPlans } from '../services/api';

const WorkoutsPage = () => {
    const [workoutPlans, setWorkoutPlans] = useState([]);
    const [selectedWorkoutPlanId, setSelectedWorkoutPlanId] = useState(null);

    useEffect(() => {
        fetchWorkoutPlans().then(response => setWorkoutPlans(response.data));
    }, []);

    const handleWorkoutPlanAdded = (newPlan) => {
        setWorkoutPlans([...workoutPlans, newPlan]);
    };

    const handleSelectWorkoutPlan = (planId) => {
        setSelectedWorkoutPlanId(planId);
    };

    return (
        <div>
            <h1>Workout Plans</h1>
            <WorkoutPlanForm onWorkoutPlanAdded={handleWorkoutPlanAdded} />
            <WorkoutPlanList workoutPlans={workoutPlans} onSelectWorkoutPlan={handleSelectWorkoutPlan} />
            {selectedWorkoutPlanId && <ExerciseList workoutPlanId={selectedWorkoutPlanId} />}
        </div>
    );
};

export default WorkoutsPage;
