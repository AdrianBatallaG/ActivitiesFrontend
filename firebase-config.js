// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXz4eVjIX0MFLRRb3MlfpGNhIlvAd00LY",
  authDomain: "push-notifications-pwa-68ef7.firebaseapp.com",
  projectId: "push-notifications-pwa-68ef7",
  storageBucket: "push-notifications-pwa-68ef7.firebasestorage.app",
  messagingSenderId: "707186942917",
  appId: "1:707186942917:web:66350b2f4de031d1ef61ac",
  measurementId: "G-V061VYQCMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { messaging, getToken, onMessage };
