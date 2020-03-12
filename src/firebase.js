import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyCwH4o6lTJ2yGTswPzFzjPtnCUWPx4m7nY",
   authDomain: "pathsforall-a0b43.firebaseapp.com",
   databaseURL: "https://pathsforall-a0b43.firebaseio.com",
   projectId: "pathsforall-a0b43",
   storageBucket: "pathsforall-a0b43.appspot.com",
   messagingSenderId: "105333209735",
   appId: "1:105333209735:web:48d6cfe220bce8a3be9622",
   measurementId: "G-GCMWP06PT2"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 // firebase.analytics();

 export default firebase;
