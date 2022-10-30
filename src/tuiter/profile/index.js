import React from "react";
import {useSelector} from "react-redux";
const UserProfile = () => {
    const profileData = useSelector((state) => state.profileReducer);
    return (
        <div className="w-50 overflow-scroll">
            <p>{JSON.stringify(profileData)}</p>
        </div>
    );
}

export default UserProfile;