import React from 'react'
import "./CreateTweet.css"
import { Avatar, Button } from '@material-ui/core'

function CreateTweet() {
    return (
        <div className="tweetBox">
            
            <form>
                <div className="createTweet_input">
                    <Avatar src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"/>
                    <input placeholder="What is happening?" type="text" />
                </div>
                <input className="  " placeholder="Image URL?" type="text" />
                <Button className="tweetBox__tweetBtn">Tweet</Button>
            </form>
        </div>
    )
}

export default CreateTweet
