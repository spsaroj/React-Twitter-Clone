import React from 'react'
import "./Widgets.css"
// We are using react twitter library
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__container">
                <h2>What's happening</h2>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="mygoditssaroj"
                    options={{ height: 500 }}
                />

                <TwitterShareButton 
                    url={"https://spsaroj.github.io/view/index"}
                    options={{ text: "Companies!! Hire this guy. He is awesome.", via: "mygoditssaroj" }}
                />                
            </div>
        </div>
    )
}

export default Widgets