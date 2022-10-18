const PostItem = (post) => {
    let imageDivStyle = "rounded-top border border-1 border-secondary ps-0 pe-0 wd-list-top-rounded";
    let imageStyle = "wd-list-top-rounded";
    if (!post.extra) {
        imageDivStyle = imageDivStyle.concat(" wd-list-bottom-rounded");
        imageStyle = imageStyle.concat(" wd-list-bottom-rounded");
    }

    const mainContent = `<div class="row">
        <div class="col-1 ms-3">
            <img src="${post.profileImage}" class="rounded-circle float-end" height="50px"/>
        </div>
        <div class="col-10">
            `;

    let extraContent = ``;
    if (post.extra) {
        extraContent = `
            
        `;
    }

    const iconContent = `
        
        </div>
    </div>
    <hr/>
    `;

    return mainContent + extraContent + iconContent;
}

export default PostItem;