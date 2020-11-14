import firebase from 'firebase';


try {
    firebase.initializeApp({
        apiKey: "AIzaSyCZymS2fCL4lh0ywm5GZzJgNHqIf11ukj8",
            authDomain: "todolistreact-66844.firebaseapp.com",
            databaseURL: "https://todolistreact-66844.firebaseio.com",
            projectId: "todolistreact-66844",
            storageBucket: "todolistreact-66844.appspot.com",
            messagingSenderId: "714435490160",
            appId: "1:714435490160:web:20876379790cb521935fb5"

    })
} catch (err) {
if (!/already exits/.test(err.message)){
  console.error('Firebase intialization error  raised',err.stack)  
}
}
const fire = firebase;

export default fire;