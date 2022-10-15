import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => `${posts.map(post => PostItem(post)).join('')}`

export default PostList;