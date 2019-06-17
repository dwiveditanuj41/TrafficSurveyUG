import firebase from 'firebase/app'
 import 'firebase/firestore'

 var config = {
    apiKey: "AIzaSyDnPxHr9Ch6RC-Fe3-aIVJnzIrpOeYf-kc",
    authDomain: "trafficsurveyug.firebaseapp.com",
    databaseURL: "https://trafficsurveyug.firebaseio.com",
    projectId: "trafficsurveyug",
    storageBucket: "trafficsurveyug.appspot.com",
    messagingSenderId: "606395326232"
  };
  firebase.initializeApp(config);

  const database=firebase.firestore();
  database.settings({timestampsInSnapshots:true});
  

export default firebase;
export  const db=firebase.firestore();