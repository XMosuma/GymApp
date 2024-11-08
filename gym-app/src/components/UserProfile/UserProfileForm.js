// src/components/UserProfile/UserProfileForm.js
import React, { useState } from 'react';
import api from '../../services/api';

const UserProfileForm = ({ profile, onProfileUpdated }) => {
    const [height, setHeight] = useState(profile.height || '');
    const [weight, setWeight] = useState(profile.weight || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedProfile = { height, weight };
            const response = await api.put('/users/profile/', updatedProfile);
            onProfileUpdated(response.data);  // Callback to update profile state
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder="Height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} required />
            <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} required />
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default UserProfileForm;
