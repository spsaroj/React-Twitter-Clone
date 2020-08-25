import React from 'react'
import './Sidebar.css'
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

import { Button } from '@material-ui/core';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
            
            {/* Twitter Icon */}
            <TwitterIcon className="twitterIconSideBar"/>
            {/* Home */}
            <SidebarOption active Icon= {HomeIcon} text="Home"/>
            {/* Explore */}
            <SidebarOption Icon= {SearchIcon} text="Explore"/>
            {/* Notifications */}
            <SidebarOption Icon= {NotificationsNoneIcon} text="Notifications"/>
            {/* Messages */}
            <SidebarOption Icon= {MailOutlineIcon} text="Messages"/>
            {/* Bookmarks */}
            <SidebarOption Icon= {BookmarkBorderIcon} text="Bookmarks"/>
            {/* Lists */}
            <SidebarOption Icon= {ListAltIcon} text="Lists"/>
            {/* Profile */}
            <SidebarOption Icon= {PermIdentityIcon} text="Profile"/>
            {/* More */}
            <SidebarOption Icon= {MoreHoriz} text="More"/>
            
            {/* Tweet Button */}
            <Button variant="outlined" className="sidebarTweet" fullWidth>Tweet</Button>
        
        </div>
    )
}

export default Sidebar;
