const config = {
    apiKey: "AIzaSyDBnDjyg3cmwxa4Aaq_SCzWG9lzJDxZ6F0",
    authDomain: "slack-61701.firebaseapp.com",
    databaseURL: "https://slack-61701.firebaseio.com",
    projectId: "slack-61701",
    storageBucket: "slack-61701.appspot.com",
    messagingSenderId: "393111567592",
    appId: "1:393111567592:web:abffdf3b574576c2eddd5d"
  };
  
  const firebase = window.firebase.initializeApp(config)
  
  export { firebase }