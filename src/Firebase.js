
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9lf5LewUrfussppB8DZdRrVrdZOSwn9Q",
  authDomain: "week-8-day-1.firebaseapp.com",
  projectId: "week-8-day-1",
  storageBucket: "week-8-day-1.appspot.com",
  messagingSenderId: "999212172301",
  appId: "1:999212172301:web:57fdb4ebb5f25c213d8144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
