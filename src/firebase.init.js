// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBT1h0xLVjsxWpIvjXXB5FQUQOOqC103cg",
    authDomain: "luxury-living-3062f.firebaseapp.com",
    projectId: "luxury-living-3062f",
    storageBucket: "luxury-living-3062f.appspot.com",
    messagingSenderId: "77109259109",
    appId: "1:77109259109:web:c2c051b902c4999e620f8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth;