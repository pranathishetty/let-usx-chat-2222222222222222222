
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDh8C5RqTi_jeala1CTw55G1x_ajEFtfro",
      authDomain: "kwitter-12851.firebaseapp.com",
      databaseURL: "https://kwitter-12851-default-rtdb.firebaseio.com",
      projectId: "kwitter-12851",
      storageBucket: "kwitter-12851.appspot.com",
      messagingSenderId: "307040610455",
      appId: "1:307040610455:web:e8c653a889640de8e361d2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
