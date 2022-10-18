import React from "react";

const HomeScreenPostExtraContentComponent = (aechPost) =>
    <>
        <div className="row ps-2">
            <div
                className="border border-secondary border-1 border-bottom border-top-0 rounded-bottom wd-list-bottom-rounded">
                <div className="row mt-2">
                    <div className="text-white">
                        {aechPost.extra.title}
                    </div>
                </div>
                <div className="row">
                    <div className="text-secondary">
                        {aechPost.extra.content}
                    </div>
                </div>
                <div className="row">
                    <div className="text-secondary">
                        <a href="#" className="text-decoration-none text-secondary"><i
                            className="fa-solid fa-link"></i> {aechPost.extra.link}</a>
                    </div>
                </div>
            </div>
        </div>
    </>

export default HomeScreenPostExtraContentComponent;