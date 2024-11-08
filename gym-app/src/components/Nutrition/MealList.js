// src/components/Nutrition/MealList.js
import React, { useState, useEffect } from 'react';
import { fetchMeals } from '../../services/api';

const MealList = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetchMeals().then(response => setMeals(response.data));
    }, []);

    return (
        <div>
            <h2>Your Meals</h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.id}>
                        {meal.name} - {meal.calories} kcal
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealList;
