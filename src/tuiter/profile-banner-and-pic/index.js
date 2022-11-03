import React from "react";

const ProfileBannerAndPic = ({profileData}) => {
    return (
      <>
          <div className="position-relative mt-2">
              <img src={`/images/${profileData.bannerPicture}`} className="w-100"/>
              <img src={`/images/${profileData.profilePicture}`}
                   className="position-absolute start-0 ps-2 w-25 rounded-circle wd-profile-image"/>
          </div>
      </>
    );
}

export default ProfileBannerAndPic;