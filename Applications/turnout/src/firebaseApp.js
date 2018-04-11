import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBHcxfQBackQaQkUbSDov8kuGjqPvEDls0",
  authDomain: "turnout-7ae8e.firebaseapp.com",
  databaseURL: "https://turnout-7ae8e.firebaseio.com",
  projectId: "turnout-7ae8e",
  storageBucket: "turnout-7ae8e.appspot.com",
  messagingSenderId: "278583186561"
};

export const firebaseApp = Firebase.initializeApp(config);