import React from 'react';
import "./sidebar.css";
import Sidebarrow from "./Sidebarrow";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
           <Sidebarrow selected Icon={HomeIcon} title="Home"/>
           <Sidebarrow Icon={WhatshotIcon}  title="Trending"/>
           <Sidebarrow Icon={SubscriptionsIcon}  title="Subscription"/>
           <hr />
           <Sidebarrow Icon={VideoLibraryIcon}  title="Library"/>
           <Sidebarrow Icon={HistoryIcon}  title="History"/>
           <Sidebarrow Icon={OndemandVideoIcon}  title="Your Videos"/>
           <Sidebarrow Icon={WatchLaterIcon}  title="Watch Later"/>
           <Sidebarrow Icon={ThumbUpIcon}  title="Liked Videos"/>
           <Sidebarrow Icon={ExpandMoreOutlinedIcon}  title="Show More"/>
           <hr />
        </div>
    )
}

export default Sidebar;
