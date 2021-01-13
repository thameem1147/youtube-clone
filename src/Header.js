import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";


function Header() {
    const [inputsearch,setinputsearch] = useState("");
    return (
        <div className="header">
        <div className="header__left">
            <MenuIcon />
            <Link to={`/`}>
            <img 
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/200px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="youtube logo"/>
            </Link>
            </div>
            <div className="header__center">
            <input value={inputsearch} onChange={e => setinputsearch(e.target.value)} placeholder="search" type="text" />
           <Link to={`/search/${inputsearch}`}>
            <SearchIcon className="header__centerbutton"/>
            </Link>
            </div>
            <div className="header__right">
            <VideoCallIcon className="header__right"/>
            <AppsIcon className="header__right"/>
            <NotificationsIcon className="header__right"/>
            <Avatar alt="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dMMh6jyoTCrUbwdmeuvJ2e-OkTqfihqILQ&usqp=CAU"
            />
            </div>
        </div>
    );
}

export default Header;
