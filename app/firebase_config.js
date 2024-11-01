// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyAo0qD_8MMW9gbKO8vJZlU08Qrq797BnFo",
//   authDomain: "your-app-id.firebaseapp.com",
//   databaseURL:
//     "https://embedded-lab-9-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "your-app-id",
//   storageBucket: "your-app-id.appspot.com",
//   messagingSenderId: "your-messaging-sender-id",
//   appId: "your-app-id",
// };
const firebaseConfig = {
  apiKey: "AIzaSyAo0qD_8MMW9gbKO8vJZlU08Qrq797BnFo",
  authDomain: "embedded-lab-9.firebaseapp.com",
  databaseURL:
    "https://embedded-lab-9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "embedded-lab-9",
  storageBucket: "embedded-lab-9.firebasestorage.app",
  messagingSenderId: "395604127644",
  appId: "1:395604127644:web:e0ae61cedf9828ae486259",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue, set };
