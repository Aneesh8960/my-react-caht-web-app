import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDHPwMXT2vgk6TEJU9xeZIeq24TNvWbMWg",
    authDomain: "whatschat-e8da9.firebaseapp.com",
    databaseURL: "https://whatschat-e8da9.firebaseio.com",
    projectId: "whatschat-e8da9",
    storageBucket: "whatschat-e8da9.appspot.com",
    messagingSenderId: "792615392965",
    appId: "1:792615392965:web:bbcc0b124c66d6bee142ac",
    measurementId: "G-MGZJDC7W59"
}
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
