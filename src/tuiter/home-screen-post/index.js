import React from "react";
import HomeScreenPostContentComponent from "../home-screen-post-content";
import HomeScreenPostExtraContentComponent from "../home-screen-post-extra-content";
import HomeIconsComponent from "../home-icons";

const HomeScreenPostComponent = (eachPost) => {
    console.log(eachPost)
    let imageDivStyle = "rounded-top border border-1 border-secondary ps-0 pe-0 wd-list-top-rounded";
    let imageStyle = "wd-list-top-rounded";
    if (!eachPost.extra) {
        imageDivStyle = imageDivStyle.concat(" wd-list-bottom-rounded");
        imageStyle = imageStyle.concat(" wd-list-bottom-rounded");
    }

    const props = {"post": eachPost, "imageDivStyle": imageDivStyle, "imageStyle": imageStyle}

    return (
        <>
            <div className="row">
                <div className="col-1 ms-3">
                    <img src={`${eachPost.profileImage}`} className="rounded-circle float-end" height="50px"/>
                </div>
                <div className="col-10">
                    <HomeScreenPostContentComponent {...props}/>
                    {eachPost.extra ? <HomeScreenPostExtraContentComponent {...eachPost}/> : ""}
                    <HomeIconsComponent {...eachPost}/>
                </div>
            </div>
            <hr/>
        </>
    );
}

export default HomeScreenPostComponent;