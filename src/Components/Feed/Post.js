import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishIcon from "@material-ui/icons/Publish"

function Post(
    displayName,
    username,
    verified,
    text,
    image,
    avatar

) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"/>
            </div>

            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            TwitterUser {" "}
                            <span className="post_username">
                                <VerifiedUserIcon className="post_badge"/>@imsaroz
                            </span>
                        </h3>
                    </div>
                    <div className="post_description">
                        <p>Lets use the react components</p>
                    </div>
                </div>
                <img src="https://i.imgur.com/FiXOE5r.gif" alt="" />

                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>

        </div>
    )
}
export default Post

