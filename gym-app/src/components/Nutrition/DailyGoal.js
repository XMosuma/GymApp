// src/components/Nutrition/DailyGoal.js
import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const DailyGoal = () => {
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fats, setFats] = useState('');

    useEffect(() => {
        // Fetch current daily goals when component loads
        const fetchDailyGoal = async () => {
            try {
                const response = await api.get('/nutrition/daily-goal/');
                const goal = response.data;
                setCalories(goal.calories);
                setProtein(goal.protein);
                setCarbs(goal.carbs);
                setFats(goal.fats);
            } catch (error) {
                console.error("Error fetching daily goal:", error);
            }
        };
        fetchDailyGoal();
    }, []);

    const handleUpdateGoal = async (e) => {
        e.preventDefault();
        try {
            const updatedGoal = { calories, protein, carbs, fats };
            await api.put('/nutrition/daily-goal/', updatedGoal);
            alert('Daily goal updated successfully!');
        } catch (error) {
            console.error("Error updating daily goal:", error);
        }
    };

    return (
        <div>
            <h2>Daily Nutrition Goal</h2>
            <form onSubmit={handleUpdateGoal}>
                <input
                    type="number"
                    placeholder="Calories"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Protein (g)"
                    value={protein}
                    onChange={(e) => setProtein(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Carbs (g)"
                    value={carbs}
                    onChange={(e) => setCarbs(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Fats (g)"
                    value={fats}
                    onChange={(e) => setFats(e.target.value)}
                    required
                />
                <button type="submit">Update Goal</button>
            </form>
        </div>
    );
};

export default DailyGoal;
