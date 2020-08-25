import React, { useState } from 'react'
import "./CreateTweet.css"
import { Avatar, Button } from '@material-ui/core'
import db from '../../firebase';

function CreateTweet() {

    //Hooks
    const [tweet, setTweet] = useState('');
    const [optionalImage, setoptionalImage] = useState('');

    const sendTweet = e => {
        // This prevents the refresh
        e.preventDefault();
        db.collection('posts').add(
            {
                displayName: "Test User",
                userName: "testUserName",
                verified: false,
                text: tweet,
                image: optionalImage,
                avatar: "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
            }
        );
        
        setTweet("");
        setoptionalImage("");

    }

    return (
        <div className="tweetBox">
            
            <form>
                <div className="createTweet_input">
                    <Avatar src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"/>
                    <input
                        onChange={(e) => setTweet(e.target.value)} 
                        value={tweet} 
                        placeholder="What is happening?" 
                        type="text" />
                </div>
                <input
                    onChange={(e) => setoptionalImage(e.target.value)} 
                    value={optionalImage} 
                    className="createTweet_image" 
                    placeholder="Image URL?" 
                    type="text" />
                <Button 
                    onClick={sendTweet}
                    type="submit" 
                    className="tweetBox__tweetBtn">
                        Tweet
                </Button>
            </form>
        </div>
    )
}

export default CreateTweet
