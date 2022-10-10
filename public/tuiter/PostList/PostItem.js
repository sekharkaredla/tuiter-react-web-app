const PostItem = (post) => {
    const mainContent = `<div class="row">
        <div class="col-1 ms-3">
            <img src="${post.profileImage}" class="rounded-circle float-end" height="50px"/>
        </div>
        <div class="col-10">
            <div class="row">
                <div class="fw-bolder text-white float-start line">
                    ${post.userName} <i class="fa-solid fa-circle-check"></i>
                    <span class="text-secondary">${post.handle} . ${post.time}</span>
                    <a href="#" class="text-decoration-none text-secondary">
                        <i class="fa-solid fa-ellipsis float-end pt-2"></i>
                    </a>
                </div>
                <div class="text-white">${post.title}</div>
            </div>
            <div class="row mt-2 ps-2">
                <div class="rounded-top border border-1 border-secondary ps-0 pe-0">
                    <img src="${post.image}" width="100%"/>
                </div>
            </div>`;

    let extraContent = ``;
    if (post.extra) {
        extraContent = `
            <div class="row ps-2">
                <div class="border border-secondary border-1 border-bottom border-top-0 rounded-bottom">
                    <div class="row mt-2">
                        <div class="text-white">
                            ${post.extra.title}
                        </div>
                    </div>
                    <div class="row">
                        <div class="text-secondary">
                            ${post.extra.content}
                        </div>
                    </div>
                    <div class="row">
                        <div class="text-secondary">
                            <a href="#" class="text-decoration-none text-secondary"><i class="fa-solid fa-link"></i> ${post.extra.link}</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    const iconContent = `
        <div class="row">
                <div class="col-3 pt-2">
                    <a href="#" class="text-decoration-none text-secondary">
                        <i class="fa-solid fa-comment"></i> ${post.comments}
                    </a>
                </div>
                <div class="col-3 pt-2">
                    <a href="#" class="text-decoration-none text-secondary">
                        <i class="fa fa-retweet" aria-hidden="true"></i> ${post.retweets}
                    </a>
                </div>
                <div class="col-3 pt-2">
                    <a href="#" class="text-decoration-none text-secondary">
                        <i class="fa-solid fa-heart"></i> ${post.likes}
                    </a>
                </div>
                <div class="col-3 pt-2">
                    <a href="#" class="text-decoration-none text-secondary">
                        <i class="fa fa-upload" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <hr/>
    `;

    return mainContent + extraContent + iconContent;
}

export default PostItem;