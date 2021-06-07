import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCjFAvalYX5xq812c282jNZqjh3eDPc9hk",
  authDomain: "proyecto-tienda-vuecli.firebaseapp.com",
  projectId: "proyecto-tienda-vuecli",
  storageBucket: "proyecto-tienda-vuecli.appspot.com",
  messagingSenderId: "538720555208",
  appId: "1:538720555208:web:c2108d3365f59f84e355fd"
};

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()


  export default {
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        })
    },
    logout() {
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error)});
    }
}

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })

