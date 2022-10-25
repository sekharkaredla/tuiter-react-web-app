import React from "react";
import HomeScreenPostContentComponent from "../../home-screen-post-content";
import TuitStats from "../tuit-stats";

const TuitItem = (eachPost) =>  (
        <>
            <div className="row">
                <div className="col-1 ms-3">
                    <img src={`${eachPost.profileImage}`} className="rounded-circle float-end" height="50px"/>
                </div>
                <div className="col-10">
                    <HomeScreenPostContentComponent post={eachPost}/>
                    <TuitStats post={eachPost}/>
                </div>
            </div>
            <hr/>
        </>
    );

export default TuitItem;