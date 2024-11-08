// src/components/UserProfile/UserProfile.js
import React, { useState, useEffect } from 'react';
import { fetchUserProfile } from '../../services/api';

const UserProfile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetchUserProfile().then(response => setProfile(response.data));
    }, []);

    return (
        <div>
            <h1>User Profile</h1>
            {profile && (
                <div>
                    <p>Name: {profile.user.username}</p>
                    <p>Height: {profile.height} cm</p>
                    <p>Weight: {profile.weight} kg</p>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
