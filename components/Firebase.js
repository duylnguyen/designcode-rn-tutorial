import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCSHYhXO-Q61HhsPZxa70MnK82JPSfClWI",
  authDomain: "react-native-for-designers.firebaseapp.com",
  databaseURL: "https://react-native-for-designers.firebaseio.com",
  storageBucket: "react-native-for-designers.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
