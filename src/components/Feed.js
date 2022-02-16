import FeedBox from "./FeedBox";
import Post from "./Post";
import './CssFolder/Feed.css';

const Feed = () => {
    return (
        <div className="feed">
            <FeedBox />
            <Post />
        </div>

    );
}

export default Feed;