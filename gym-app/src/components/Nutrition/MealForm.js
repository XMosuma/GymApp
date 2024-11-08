// src/components/Nutrition/MealForm.js
import React, { useState } from 'react';
import api from '../../services/api';

const MealForm = ({ onMealAdded }) => {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fats, setFats] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newMeal = { name, calories, protein, carbs, fats };
            const response = await api.post('/nutrition/meals/', newMeal);
            onMealAdded(response.data);  // Callback to update meal list
            setName('');
            setCalories('');
            setProtein('');
            setCarbs('');
            setFats('');
        } catch (error) {
            console.error("Error adding meal:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Meal Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} required />
            <input type="number" placeholder="Protein" value={protein} onChange={(e) => setProtein(e.target.value)} required />
            <input type="number" placeholder="Carbs" value={carbs} onChange={(e) => setCarbs(e.target.value)} required />
            <input type="number" placeholder="Fats" value={fats} onChange={(e) => setFats(e.target.value)} required />
            <button type="submit">Add Meal</button>
        </form>
    );
};

export default MealForm;
