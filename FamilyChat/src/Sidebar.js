import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core'
import SidebarOption from "./SidebarOption";

function Sidebar() {
    return (
        <div className= "sidebar">
            {/* Twitter icon */}
            {/* <TwitterIcon className="sidebar__twitterIcon"/> */}
            {/* SidebarOption */}
            <SidebarOption active Icon = {HomeIcon} text = "Home" />
            <SidebarOption Icon = {SearchIcon} text = "Explore" />
            <SidebarOption Icon = {NotificationsIcon} text = "Notification" />
            <SidebarOption Icon = {MailOutlineIcon} text = "Message" />
            <SidebarOption Icon = {BookmarkBorderIcon} text = "Bookmark" />
            <SidebarOption Icon = {ListAltIcon} text = "Lists" />
            <SidebarOption Icon = {PermIdentityIcon} text = "Profile" />
            <SidebarOption Icon = {MoreHorizIcon} text = "More" />

            {/* Button -> tweet */}
            <Button variant='outlined' className='sidebar__tweet' fullWidth>Talk</Button>
        </div>
    );
}

export default Sidebar;