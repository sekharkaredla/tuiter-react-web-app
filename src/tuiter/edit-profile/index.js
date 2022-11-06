import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {updateProfile} from "../profile/profile-reducer";
import {Link, useNavigate} from "react-router-dom";
import ProfileBannerAndPic from "../profile-banner-and-pic";
import "./index.css";

const EditProfile = () => {
    const profileData = useSelector((state) => state.profileReducer);
    const [profileState, setProfileState] = useState(profileData);
    const initialData = {...profileData}
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFieldChanges = (event) => {
        const fieldName = event.target.name;
        const changedValue = event.target.value;
        const newProfile = {
            ...profileState,
            [fieldName]: changedValue
        }
        setProfileState(newProfile);
    }

    const handleSave = () => {
        dispatch(updateProfile(profileState));
        navigate("/tuiter/profile")
    }

    const handleCancelEdit = () => {
        dispatch(updateProfile(initialData))
    }

    return (
        <div className="border border-top-0 border-bottom-0 border-secondary">
            <div className="row ms-2 me-2">
                <div className="col-xxl-10 col-xl-10 col-9 mt-1">
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg float-start text-white" onClick={handleCancelEdit}></i>
                    </Link>
                    <span className="fw-bolder">&nbsp;&nbsp;Edit Profile</span>
                </div>
                <div className="col-xxl-2 col-xl-2 col-3">
                    <button className="btn btn-secondary btn-sm rounded-pill float-end" onClick={handleSave}>Save
                    </button>
                </div>
            </div>
            <ProfileBannerAndPic profileData={profileState}/>
            <div className="ms-2 me-2">
            <div className="form-floating wd-top-margin-form">
                <input type="text" className="form-control text-bg-light" id="firstName" name="firstName"
                       value={profileState.firstName} onChange={handleFieldChanges}/>
                <label htmlFor="firstName">First Name</label>
            </div>
            <div className="form-floating mt-2">
                <input type="text" className="form-control text-bg-light" id="lastName" name="lastName"
                       value={profileState.lastName} onChange={handleFieldChanges}/>
                <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="form-floating mt-2">
                <textarea className="form-control h-auto text-bg-light" id="bio" name="bio" value={profileState.bio}
                          onChange={handleFieldChanges}/>
                <label htmlFor="bio">Bio</label>
            </div>
            <div className="form-floating mt-2">
                <input type="text" className="form-control text-bg-light" id="location" name="location" value={profileState.location}
                       onChange={handleFieldChanges}/>
                <label htmlFor="location">Location</label>
            </div>
            <div className="form-floating mt-2">
                <input type="text" className="form-control text-bg-light" id="website" name="website"
                       value={profileState.website} onChange={handleFieldChanges}/>
                <label htmlFor="website">Web Site</label>
            </div>
            <div className="form-floating mt-2">
                <input type="date" className="form-control text-bg-light" id="dateOfBirth" name="dateOfBirth"
                       value={profileState.dateOfBirth} onChange={handleFieldChanges}/>
                <label htmlFor="dateOfBirth">Date Of Birth</label>
            </div>
            </div>
        </div>
    );
}

export default EditProfile;