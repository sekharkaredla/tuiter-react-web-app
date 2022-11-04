import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {updateProfile} from "../profile/profile-reducer";
import {useNavigate} from "react-router-dom";
import ProfileBannerAndPic from "../profile-banner-and-pic";
import "./index.css";

const EditProfile = () => {
    const profileData = useSelector((state) => state.profileReducer);
    const [profileState, setProfileState] = useState(profileData);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const handleFieldChanges = (event) => {
        const fieldName = event.target.name;
        const changedValue = event.target.value;
        const newProfile = {
            ...profileData,
            [fieldName]: changedValue
        }
        setProfileState(newProfile);
    }

    const handleSubmitButton = () => {
        dispatch(updateProfile(profileState));
        navigation("/tuiter/profile", {state: {profileState}});
    }

    return (
        <>
            <ProfileBannerAndPic profileData={profileState}/>
            <div className="form-floating wd-top-margin-form">
                <input type="text" className="form-control" id="firstName" name="firstName"
                       value={profileState.firstName} onChange={handleFieldChanges}/>
                <label form="firstName">First Name</label>
            </div>
            <div className="form-floating mt-2">
                <textarea className="form-control h-auto" id="bio" name="bio" value={profileState.bio}
                          onChange={handleFieldChanges}/>
                <label form="bio">Bio</label>
            </div>
            <div className="form-floating mt-2">
                <input type="text" className="form-control" id="location" name="location" value={profileState.location}
                       onChange={handleFieldChanges}/>
                <label form="location">Location</label>
            </div>
            <div className="form-floating mt-2">
                <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth"
                       value={profileState.dateOfBirth} onChange={handleFieldChanges}/>
                <label form="firstName">Date Of Birth</label>
            </div>
            <div className="form-floating mt-2">
                <input type="text" className="form-control" id="firstName" name="firstName"
                       value={profileState.firstName} onChange={handleFieldChanges}/>
                <label form="firstName">First Name</label>
            </div>
            <button onClick={handleSubmitButton}>Save</button>
        </>
    );
}

export default EditProfile;