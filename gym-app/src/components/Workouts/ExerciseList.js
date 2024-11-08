// src/components/Workouts/ExerciseList.js
import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const ExerciseList = ({ workoutPlanId }) => {
    const [exercises, setExercises] = useState([]);
    const [exerciseName, setExerciseName] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');

    useEffect(() => {
        // Fetch exercises associated with the workout plan
        const fetchExercises = async () => {
            try {
                const response = await api.get(`/workouts/plans/${workoutPlanId}/exercises/`);
                setExercises(response.data);
            } catch (error) {
                console.error("Error fetching exercises:", error);
            }
        };
        fetchExercises();
    }, [workoutPlanId]);

    const handleAddExercise = async (e) => {
        e.preventDefault();
        try {
            const newExercise = { name: exerciseName, sets, reps, workout_plan: workoutPlanId };
            const response = await api.post(`/workouts/plans/${workoutPlanId}/exercises/`, newExercise);
            setExercises([...exercises, response.data]);
            setExerciseName('');
            setSets('');
            setReps('');
        } catch (error) {
            console.error("Error adding exercise:", error);
        }
    };

    return (
        <div>
            <h2>Exercises</h2>
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>
                        {exercise.name} - {exercise.sets} sets of {exercise.reps} reps
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddExercise}>
                <input
                    type="text"
                    placeholder="Exercise Name"
                    value={exerciseName}
                    onChange={(e) => setExerciseName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Sets"
                    value={sets}
                    onChange={(e) => setSets(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Reps"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    required
                />
                <button type="submit">Add Exercise</button>
            </form>
        </div>
    );
};

export default ExerciseList;
