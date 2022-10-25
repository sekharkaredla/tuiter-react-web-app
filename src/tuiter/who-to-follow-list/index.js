import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who);

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