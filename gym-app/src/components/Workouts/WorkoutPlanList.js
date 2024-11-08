// src/components/Workouts/WorkoutPlanList.js
import React, { useState, useEffect } from 'react';
import { fetchWorkoutPlans } from '../../services/api';

const WorkoutPlanList = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetchWorkoutPlans().then(response => setPlans(response.data));
    }, []);

    return (
        <div>
            <h2>Your Workout Plans</h2>
            <ul>
                {plans.map(plan => (
                    <li key={plan.id}>
                        <h3>{plan.name}</h3>
                        <ul>
                            {plan.exercises.map(exercise => (
                                <li key={exercise.id}>
                                    {exercise.exercise.name}: {exercise.sets} sets x {exercise.reps} reps
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkoutPlanList;
