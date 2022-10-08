const NavigationSidebar = () => {
    return (`
        <div class="list-group">
                <a href="" class="list-group-item list-group-item-action d-inline-flex">
                    <i class="fa-brands fa-square-twitter pt-1"></i></a>
                <a href="#"
                   class="list-group-item list-group-item-action d-inline-flex">
                    <i class="fa-solid fa-house pt-1"></i><span class="d-none d-xl-block">&nbsp;&nbsp;Home</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action d-inline-flex bg-primary text-white">
                    <i class="fa-solid fa-hashtag pt-1"></i><span class="d-none d-xl-block">&nbsp;&nbsp;Explore</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action d-inline-flex">
                    <i class="fa-solid fa-bell pt-1"></i><span class="d-none d-xl-block">&nbsp;&nbsp;Notification</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action d-inline-flex">
                    <i class="fa-solid fa-message pt-1"></i><span class="d-none d-xl-block">&nbsp;&nbsp;Messages</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action d-inline-flex">
                    <i class="fa-solid fa-bookmark pt-1"></i><span class="d-none d-xl-block">&nbsp;&nbsp;Bookmarks</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action d-inline-flex">
                    <i class="fa-solid fa-list pt-1"></i><span class="d-none d-xl-block">&nbsp;&nbsp;Lists</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action d-inline-flex">
                    <i class="fa-solid fa-user pt-1"></i><span class="d-none d-xl-block">&nbsp;&nbsp;Profile</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action d-inline-flex">
                    <i class="fa-solid fa-ellipsis pt-1"></i><span class="d-none d-xl-block">&nbsp;&nbsp;More</span></a>
        </div>
        <button class="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>
    `);
}

export default NavigationSidebar;