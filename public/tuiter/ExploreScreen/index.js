import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    $('#wd-explore').append(`
       <div class="row mt-2">
       
       <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar("explore")}
       </div>
       
       <div class="col-10 col-lg-7 col-xl-6">
       <div class="row">
            <div class="col-11">
                <div class="position-relative">
                    <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                    <i class="fa-sharp fa-solid fa-magnifying-glass position-absolute wd-magnifying-glass"></i>
                </div>
            </div>
            <div class="col-1">
                <a href="#" class="text-decoration-none"><i class="fa-solid fa-gear text-primary fs-4"></i></a>
            </div>
        </div>

        <ul class="nav nav-tabs mt-2 mb-2">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>

        <div class="position-relative">
            <img src="../../images/starship.png" width="100%"/>
            <h2 class="position-absolute bottom-0 start-0 ps-2 text-white">SpaceX's Starship</h2>
        </div>
        
        ${PostSummaryList()}
       </div>
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        ${WhoToFollowList()}
       </div>
      </div>
   `);
}

$(ExploreComponent);