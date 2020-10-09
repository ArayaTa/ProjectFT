import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyBSvVfxfnCWkUNAPeUwsXyav76i4WHDZek',
    authDomain: 'cs-student-49218.firebaseapp.com',
    databaseURL: 'https://cs-student-49218.firebaseio.com',
    projectId: 'cs-student-49218',
    storageBucket: 'cs-student-49218.appspot.com',
    messagingSenderId: '436582083260',
    appId: '1:436582083260:web:774b4dc58b8f9fcdf7beb9',
    measurementId: 'G-L9LW05XZ3X',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
