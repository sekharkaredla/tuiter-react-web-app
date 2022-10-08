const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
                <div class="row">
                    <div class="col-2">
                        <img src="${who.avatarIcon}" class="rounded-circle" height="45px"/>
                    </div>
                    <div class="col-7 text-nowrap">
                        <div class="fw-bolder">
                            ${who.userName} <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div class="text-secondary">
                            @${who.handle}
                        </div>
                    </div>
                    <div class="col-3 align-self-center">
                        <button class="btn btn-primary w-100 rounded-pill">Follow</button>
                    </div>
                </div>
        </li>
    `);
}

export default WhoToFollowListItem;