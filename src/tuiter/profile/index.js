import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./index.css"

const ProfileComponent = () => {
    const profileData = useSelector((state) => state.profileReducer);
    return (<>
        <div className="row">
            <div className="col-1 mt-2">
                <span><i className="fa-solid fa-arrow-left"></i></span>
            </div>
            <div className="col-11">
                <span className="fw-bolder row">{profileData.firstName + " " + profileData.lastName}</span>
                <span className="fw-lighter small row">{profileData.numberOfTweets} Tweets</span>
            </div>
        </div>
        <div className="position-relative mt-2">
            <img src={`/images/${profileData.bannerPicture}`} className="w-100"/>
            <img src={`/images/${profileData.profilePicture}`}
                 className="position-absolute start-0 ps-2 w-25 rounded-circle wd-profile-image"/>
        </div>
        <div className="float-end mt-2 me-2">
            <button className="rounded-pill fg-color-white">Edit Profile</button>
        </div>
        <div className="wd-div-after-profile-image ms-3">
            <div className="fw-bolder fs-5 mb-0 pb-0">
                {profileData.firstName + " " + profileData.lastName}
            </div>
            <div className="mt-0 pt-0 mb-3 text-secondary">
                {profileData.handle}
            </div>
            <div className="mb-2">
                {profileData.bio}
            </div>
            <div className="text-secondary row">
                <div className="col-xxl-3 col-xl-3 col-4">
                    <i className="fa fa-map-marker" aria-hidden="true"></i> {profileData.location}
                </div>
                <div className="col-xxl-3 col-xl-3 col-4">
                    <i className="fas fa-birthday-cake"></i> {profileData.dateOfBirth}
                </div>
                <div className="col-xxl-3 col-xl-3 col-4">
                    <i className="fa fa-calendar" aria-hidden="true"></i> {profileData.dateJoined}
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-xxl-3 col-xl-3 col-5">
                    <span className="fw-bold">{profileData.followingCount}</span> <span className="text-secondary">Following</span>
                </div>
                <div className="col-xxl-3 col-xl-3 col-5">
                    <span className="fw-bold">{profileData.followersCount}</span> <span className="text-secondary">Followers</span>
                </div>
            </div>
        </div>
    </>);
}

export default ProfileComponent;