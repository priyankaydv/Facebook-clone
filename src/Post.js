import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';

function Post({dp,image,username,timestamp,message}) {
    return (
        <div className="post">
        <div className="post_top">
        <Avatar  src={dp} className="post_avatar"/>
        <div className="post_topInfo">
        <h3>{username}</h3>
        <p> {new Date(timestamp?.toDate()).toUTCString()} </p>
        </div>
        </div>
        <div className="post_bottom">
        <p>{message}</p>
         </div>

         <div className="post_image">
          <img src={image} alt="" />

         </div>
         <div className="post_options">
         <div className="post_option">
         <ThumbUpAltTwoToneIcon />
         <p>Like</p>
         </div>
         <div className="post_option">
         <ChatBubbleOutlineTwoToneIcon />
         <p>Comment</p>
         </div>
         <div className="post_option">
         <ShareTwoToneIcon />
         <p>Share</p>
         </div>
         </div>
        </div>
    )
}

export default Post
