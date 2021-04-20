import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDLV7TUskA6LZVCThfJtMXviFqvslfaAuQ",
    authDomain: "certifiedweirdo-firegram.firebaseapp.com",
    projectId: "certifiedweirdo-firegram",
    storageBucket: "certifiedweirdo-firegram.appspot.com",
    messagingSenderId: "867601412515",
    appId: "1:867601412515:web:dad6f95f02deace2d82a16"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;  

  export {projectStorage, projectFirestore, timestamp};



