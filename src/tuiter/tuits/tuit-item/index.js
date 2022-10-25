import React from "react";
import HomeScreenPostContentComponent from "../../home-screen-post-content";
import TuitStats from "../tuit-stats";

const TuitItem = (eachPost) => (
    <>
        <div className="border border-1 border-secondary border-opacity-50">
            <div className="row ms-3 mt-3 mb-2">
                <div className="col-1 ms-3">
                    <img src={`${eachPost.profileImage}`} className="rounded-circle float-end" height="50px"/>
                </div>
                <div className="col-10">
                    <HomeScreenPostContentComponent post={eachPost}/>
                    <TuitStats post={eachPost}/>
                </div>
            </div>
        </div>
    </>
);

export default TuitItem;