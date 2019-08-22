import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDVwg1KG2DsJnPsh1Qw406qNxVs9bMo1x8",
    authDomain: "quaziblog.firebaseapp.com",
    databaseURL: "https://quaziblog.firebaseio.com",
    projectId: "quaziblog",
    storageBucket: "",
    messagingSenderId: "23150049933",
    appId: "1:23150049933:web:d9aa725d2758f801"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase