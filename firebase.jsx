import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQaTpod3V8XF6PQWRc32Q1dMu7sszasAc",
  authDomain: "chat-with-daigoro.firebaseapp.com",
  projectId: "chat-with-daigoro",
  storageBucket: "chat-with-daigoro.appspot.com",
  messagingSenderId: "30881148685",
  appId: "1:30881148685:web:c9f17211b136d59d920a44",
};
firebase.initializeApp(firebaseConfig);
const messageRef = firebase.database().ref("messages");

export const pushMessage = ({name, message}) => {
  messageRef.push({ name, message });
}
