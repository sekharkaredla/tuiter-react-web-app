import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem
    from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(
        <ul className="list-group">
            <li className="list-group-item text-white fs-5 fw-bold">
                Who To Follow
            </li>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem who={who}/>)
            }
        </ul>
    );
};

export default WhoToFollowList;