import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StoreIcon from '@material-ui/icons/Store';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {Avatar, IconButton} from '@material-ui/core';
import { useStateValue } from './StateProvider';


function Header() {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="header">
        <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
        <div className="header_input">
        <SearchIcon />
        <input type="text"  placeholder="Search Facebook"/>
        </div>
        </div>
        <div className="header_middle">
        <div className="header_option header_option--active">
        <HomeIcon fontSize="large"/>
        </div>
        <div className="header_option">
        <OndemandVideoIcon fontSize="large"/>
        </div>
        <div className="header_option">
        <FlagIcon fontSize="large"/>
        </div>
        
        <div className="header_option">
        <StoreIcon fontSize="large"/>
        </div>
        
        <div className="header_option">
        <SupervisedUserCircleIcon fontSize="large"/>
        </div>

       
        </div>
        <div className="header_right">
        <div className="header_info">
        <Avatar src={user.photoURL}/>
        <h4>{user.displayName}</h4>
        </div>

        <IconButton>
        <MenuIcon/>
        </IconButton>  

        <IconButton>
        <MessageRoundedIcon/>
        </IconButton>

        <IconButton>
        <NotificationsActiveIcon/>
        </IconButton>

        <IconButton >
        <ExpandMoreOutlinedIcon />
        </IconButton>
        
        </div>
            
        </div>
    )
}

export default Header
