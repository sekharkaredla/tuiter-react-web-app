import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {updateProfile} from "../profile/profile-reducer";
import {useNavigate} from "react-router-dom";
import ProfileBannerAndPic from "../profile-banner-and-pic";
import "./index.css";

const EditProfile = () => {
    let profileData = useSelector((state) => state.profileReducer);
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

    const handleCancelEditing = () => {
        navigation("/tuiter/profile")
    }

    return (
        <>
            <div className="row">
                <div className="col-xxl-10 col-xl-10 col-9">
                <i className="mt-1 bi bi-x-lg float-start text-white"
                   onClick={handleCancelEditing}></i>
                </div>
                <div className="col-xxl-2 col-xl-2 col-3">
                <button className="btn btn-secondary btn-sm rounded-pill float-end" onClick={handleSubmitButton}>Save</button>
                </div>
            </div>
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
                <input type="text" className="form-control" id="website" name="website"
                       value={profileState.website} onChange={handleFieldChanges}/>
                <label form="website">Web Site</label>
            </div>
            <div className="form-floating mt-2">
                <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth"
                       value={profileState.dateOfBirth} onChange={handleFieldChanges}/>
                <label form="firstName">Date Of Birth</label>
            </div>
        </>
    );
}

export default EditProfile;