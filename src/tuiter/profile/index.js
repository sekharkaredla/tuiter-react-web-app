import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
const ProfileComponent = () => {
    const profileData = useSelector((state) => state.profileReducer);
    return (
        <div className="w-50 overflow-scroll">
            <p>{JSON.stringify(profileData)}</p>
            <Link to="/tuiter/edit-profile">Edit</Link>
        </div>
    );
}

export default ProfileComponent;