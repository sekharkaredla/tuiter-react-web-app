import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item list-group-item-action d-inline-flex">
                <i className="fa-solid fa-t pt-1"></i></a>
            <a href="#" className={`list-group-item list-group-item-action d-inline-flex ${active === 'home' ? 'active' : ''}`}>
                <i className="fa-solid fa-house pt-1"></i>
                <span className="d-none d-xl-block">&nbsp;&nbsp;Home</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action d-inline-flex ${active === 'explore' ? 'active' : ''}`}>
                <i className="fa-solid fa-hashtag pt-1"></i>
                <span className="d-none d-xl-block">&nbsp;&nbsp;Explore</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action d-inline-flex ${active === 'notifications' ? 'active' : ''}`}>
                <i className="fa-solid fa-bell pt-1"></i>
                <span className="d-none d-xl-block">&nbsp;&nbsp;Notifications</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action d-inline-flex ${active === 'messages' ? 'active' : ''}`}>
                <i className="fa-solid fa-message pt-1"></i>
                <span className="d-none d-xl-block">&nbsp;&nbsp;Messages</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action d-inline-flex ${active === 'bookmarks' ? 'active' : ''}`}>
                <i className="fa-solid fa-bookmark pt-1"></i>
                <span className="d-none d-xl-block">&nbsp;&nbsp;Bookmarks</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action d-inline-flex ${active === 'lists' ? 'active' : ''}`}>
                <i className="fa-solid fa-list pt-1"></i>
                <span className="d-none d-xl-block">&nbsp;&nbsp;Lists</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action d-inline-flex ${active === 'user' ? 'active' : ''}`}>
                <i className="fa-solid fa-user pt-1"></i>
                <span className="d-none d-xl-block">&nbsp;&nbsp;User</span>
            </a>
            <a href="#" className={`list-group-item list-group-item-action d-inline-flex ${active === 'more' ? 'active' : ''}`}>
                <i className="fa-solid fa-ellipsis pt-1"></i>
                <span className="d-none d-xl-block">&nbsp;&nbsp;More</span>
            </a>
            <button className="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>
        </div>
    );
};
export default NavigationSidebar;

