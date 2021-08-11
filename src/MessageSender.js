import { Avatar } from '@material-ui/core'
import React,{useRef, useState} from 'react';
import './MessageSender.css';
import Videocam from "@material-ui/icons/Videocam";
import PhotoLibrary from "@material-ui/icons/PhotoLibrary";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon"; 
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

function MessageSender() {
    const [{user},dispatch]=useStateValue();
    const[input,setInput]=useState('');
    const[photo,setPhoto]=useState('');
   

   
    
    const handleSubmit=e=>{
        e.preventDefault();

        db.collection('posts').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            dp:user.photoURL,
            username:user.displayName,
            image:photo,
           

        })


        
        setInput("");
        setPhoto("");
    }
    return (
        <div className="messageSender">
        <div className="messageSender_top">
        <Avatar src={user.photoURL}/>
        <form>
        <input value={input} onChange={e=> setInput(e.target.value)} className="messageSender_input" placeholder={`What's on your mind ,${user.displayName}?`}/>
        <input value={photo} placeholder="image" className="photo" onChange={e=> setPhoto(e.target.value)}          />
        <button onClick={handleSubmit} type="submit" >Hidden submit</button>
        </form>
        </div>

        <div className="messageSender_bottom">
        <div className="messageSender_option">
        <Videocam style ={{color:'red'}} />
        <h3>Live Video</h3>
        </div>

        <div className="messageSender_option"  >
        <PhotoLibrary style ={{color:'green'}}  />
        <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
        <InsertEmoticon style ={{color:'yellow'}} />
        <h3>Feeling/Activity</h3>
        </div>
        
         </div>
        </div>
            
        
    )
}

export default MessageSender
