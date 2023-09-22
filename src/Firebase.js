// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZdlR0jBIoD5GFNVdRyMrOfCFdXNW9JE4",
  authDomain: "gallery-b0ef0.firebaseapp.com",
  projectId: "gallery-b0ef0",
  storageBucket: "gallery-b0ef0.appspot.com",
  messagingSenderId: "435940019308",
  appId: "1:435940019308:web:9ec1f84ea2063753275c49",
  measurementId: "G-FG29TBN5T0"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
export  {storage};
export { auth };
export default firebaseApp;











