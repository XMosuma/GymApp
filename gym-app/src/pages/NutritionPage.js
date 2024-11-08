// src/pages/NutritionPage.js
import React, { useState, useEffect } from 'react';
import MealList from '../components/Nutrition/MealList';
import MealForm from '../components/Nutrition/MealForm';
import DailyGoal from '../components/Nutrition/DailyGoal';
import { fetchMeals } from '../services/api';

const NutritionPage = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetchMeals().then(response => setMeals(response.data));
    }, []);

    const handleMealAdded = (newMeal) => {
        setMeals([...meals, newMeal]);
    };

    return (
        <div>
            <h1>Nutrition</h1>
            <DailyGoal />
            <MealForm onMealAdded={handleMealAdded} />
            <MealList meals={meals} />
        </div>
    );
};

export default NutritionPage;
