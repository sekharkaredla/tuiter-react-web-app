const PostSummaryItem = (post) => `
    <li class="list-group-item">
        <div class="row">
            <div class="col-9 col-xxl-10">
                <div class="text-secondary">
                    ${post.topic}
                </div>
                <div class="fw-bolder">
                    ${post.userName} <i class="fa-solid fa-circle-check"></i><span class="text-secondary"> - ${post.time}</span>
                </div>
                <div class="fw-bolder">
                    ${post.title}
                </div>
            </div>
            <div class="col-3 col-xxl-2 align-self-center">
                <img src="${post.image}" class="float-end rounded-2" height="80px"/>
            </div>
        </div>
    </li>`

export default PostSummaryItem;