// src/pages/UserProfilePage.js
import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile/UserProfile';
import UserProfileForm from '../components/UserProfile/UserProfileForm';
import { fetchUserProfile } from '../services/api';

const UserProfilePage = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetchUserProfile().then(response => setProfile(response.data));
    }, []);

    const handleProfileUpdated = (updatedProfile) => {
        setProfile(updatedProfile);  // Update profile in state
    };

    return (
        <div>
            <h1>User Profile</h1>
            {profile && (
                <>
                    <UserProfile profile={profile} />
                    <UserProfileForm profile={profile} onProfileUpdated={handleProfileUpdated} />
                </>
            )}
        </div>
    );
};

export default UserProfilePage;
