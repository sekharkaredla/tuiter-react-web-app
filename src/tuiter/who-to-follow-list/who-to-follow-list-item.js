import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`/images/${who.avatarIcon}`} className="rounded-circle" height="45px"/>
                </div>
                <div className="col-xxl-7 col-6 text-nowrap">
                    <div className="fw-bolder">
                        {who.userName} <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="text-secondary">
                        @{who.handle}
                    </div>
                </div>
                <div className="col-xxl-3 col-4 align-self-center">
                    <button className="btn btn-primary w-100 rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;