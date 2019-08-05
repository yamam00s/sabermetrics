// Firebase App is always required and must be first
import firebase from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB4xGmQ3a-UTP-cBCxg83NEHOaZa64Ck9Q',
  authDomain: 'sabermetrics-7a6fc.firebaseapp.com',
  databaseURL: 'https://sabermetrics-7a6fc.firebaseio.com',
  projectId: 'sabermetrics-7a6fc',
  storageBucket: 'sabermetrics-7a6fc.appspot.com',
  messagingSenderId: '812791948626',
  appId: '1:812791948626:web:7a0021a339c63df5'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

export const authProviders = {
  Email: firebase.auth.EmailAuthProvider.PROVIDER_ID
}
