// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase  from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAi7BbiwPdTBCaysPJ1o4MdIJ7ajYXlMtU",
    authDomain: "facebook-app-16aa8.firebaseapp.com",
    projectId: "facebook-app-16aa8",
    storageBucket: "facebook-app-16aa8.appspot.com",
    messagingSenderId: "259324147571",
    appId: "1:259324147571:web:4eb715a14aaea9d053f706",
    measurementId: "G-1PSQ4XVEV6"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  
  export {auth ,provider,firebaseApp};
  export default db;
