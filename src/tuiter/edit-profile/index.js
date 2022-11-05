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
    }

    const handleCancelEdit = () => {
        dispatch(updateProfile(initialData))
    }

    return (
        <>
            <div className="row">
                <div className="col-xxl-10 col-xl-10 col-9">
                    <Link to="/tuiter/profile">
                        <i className="mt-1 bi bi-x-lg float-start text-white" onClick={handleCancelEdit}></i>
                    </Link>
                </div>
                <div className="col-xxl-2 col-xl-2 col-3">
                    <Link to="/tuiter/profile">
                        <button className="btn btn-secondary btn-sm rounded-pill float-end" onClick={handleSave}>Save</button>
                    </Link>
                </div>
            </div>
            <ProfileBannerAndPic profileData={profileState}/>
            <div className="form-floating wd-top-margin-form">
                <input type="text" className="form-control" id="firstName" name="firstName"
                       value={profileState.firstName} onChange={handleFieldChanges}/>
                <label form="firstName">First Name</label>
            </div>
            <div className="form-floating mt-2">
                <input type="text" className="form-control" id="lastName" name="lastName"
                       value={profileState.lastName} onChange={handleFieldChanges}/>
                <label form="lastName">Last Name</label>
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
                <input type="text" className="form-control" id="dateOfBirth" name="dateOfBirth"
                       value={profileState.dateOfBirth} onChange={handleFieldChanges}/>
                <label form="dateOfBirth">Date Of Birth (YYYY-MM-DD)</label>
            </div>
        </>
    );
}

export default EditProfile;