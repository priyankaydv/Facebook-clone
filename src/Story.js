import { Avatar } from '@material-ui/core'
import React from 'react';
import './Story.css';

function Story({image,dp,title}) {
    return (
        <div  style={{backgroundImage: `url(${image})`} } className="story">
        <Avatar className="story_avatar" src={dp} />
        <h4>{title}</h4>
            
        </div>
    )
}

export default Story
