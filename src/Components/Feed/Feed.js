import React from 'react';
import "./Feed.css";
import CreateTweet from './CreateTweet';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">

            {/* Header */}
            <div className="feed_header">
                <h2>This should be a header</h2>
            </div>
            
                
            {/* Create tweet */}
            <CreateTweet/>

            {/* Tweet */}
            <Post/>
            {/* Tweet */}
            {/* Tweet */}
            {/* Tweet */}
            {/* Tweet */}
        
        </div>
    )
}

export default Feed
