import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDsxpmnYqQSN11EFnGg9umjjbpPR8mAbPo",
  authDomain: "authentication-d6a82.firebaseapp.com",
  projectId: "authentication-d6a82",
  storageBucket: "authentication-d6a82.appspot.com",
  messagingSenderId: "423417049010",
  appId: "1:423417049010:web:300b402a06cc23d0c93eab"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};