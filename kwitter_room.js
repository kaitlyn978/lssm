
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCY3OwlIlbFmPIFv7aFfsVtfPL26Ryahsk",
      authDomain: "chitchat-50bdb.firebaseapp.com",
      databaseURL: "https://chitchat-50bdb-default-rtdb.firebaseio.com",
      projectId: "chitchat-50bdb",
      storageBucket: "chitchat-50bdb.appspot.com",
      messagingSenderId: "198284791215",
      appId: "1:198284791215:web:e21d423c62efd8b6f5335a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
