import React, { useState, useEffect } from 'react';
import "./Feed.css";
import CreateTweet from './CreateTweet';
import Post from './Post';
import db from '../../firebase'

function Feed() {

    // Using hooks
    const [posts, setPosts] = useState([]);


    // piece of code that runs based on the coditions. 
    // Run any code inside whenever the feed condition loads but don't run after. But when we have [x1, x2, .... etc.], run whenever the feed component loads as well as whenever those x1, x2... etc. variables changes
    useEffect(() =>{
        db.collection('posts').onSnapshot(snapshot => (
            //snapshot.docs.map(doc=>doc.data) will loop through all the documents in the collection 'post'. doc.data means all the fields from that document of post.
            setPosts(snapshot.docs.map(doc => doc.data()))      //This will give an array
        ))
    }, [])

    return (
        <div className="feed">

            {/* Header */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            
                
            {/* Create tweet */}
            <CreateTweet/>

            {/* Tweet. posts.map will loop over */}
            {posts.map(post => (
                <Post 
                    displayName={post.displayName}
                    username = {post.username}
                    verified= {post.verified}
                    text = {post.text}
                    avatar= {post.avatar}
                    image= {post.image}
                />
            ))}
        
        </div>
    )
}

export default Feed
