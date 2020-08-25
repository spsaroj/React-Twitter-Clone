import React from 'react';
import "./Feed.css";
import CreateTweet from './CreateTweet';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">

            {/* Header */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            
                
            {/* Create tweet */}
            <CreateTweet/>

            {/* Tweet */}
            <Post/>
            {/* Tweet */}
            <Post/>
            {/* Tweet */}
            <Post/>
            {/* Tweet */}
            <Post/>
            {/* Tweet */}
            <Post/>
        
        </div>
    )
}

export default Feed
