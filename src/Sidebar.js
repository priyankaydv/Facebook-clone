import React from 'react';
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import GroupTwoToneIcon from '@material-ui/icons/GroupTwoTone';
import GroupWorkRoundedIcon from '@material-ui/icons/GroupWorkRounded';
import EmojiFlagsTwoToneIcon from '@material-ui/icons/EmojiFlagsTwoTone';
import ForumIcon from '@material-ui/icons/Forum';
import StorefrontIcon from '@material-ui/icons/Storefront';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow className="fav" Icon={FavoriteBorderIcon} title="COVID-19 Information Center" />
        <SidebarRow Icon={GroupTwoToneIcon} title="Friends"/>
        <SidebarRow Icon={GroupWorkRoundedIcon} title="Groups"/>
        <SidebarRow Icon={EmojiFlagsTwoToneIcon} title="Pages"/>
        <SidebarRow Icon={ForumIcon} title="Messenger"/>
        <SidebarRow Icon={ StorefrontIcon} title="Marketplace"/>
        <SidebarRow Icon={OndemandVideoIcon} title="Watch"/>
        <SidebarRow Icon={ExpandMoreIcon} title="See More"/>


            
        </div>
    )
}

export default Sidebar
