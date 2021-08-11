import React from 'react';

import './App.css';
import Feed from './Feed';
import { firebaseApp } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widget from './Widget';
import {useStateValue} from "./StateProvider";


function App() {

 const [{user},dispatch]= useStateValue();

 return (
    <div className="app">
    {!user ? <Login/> :(
      <>
      <Header  />
     <div className="app_body">
       <Sidebar />
       <Feed/>
        <Widget/>
        </div>
        </>

    )}
     
     
    
    </div>
  );
}

export default App;
