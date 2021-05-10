
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA6BfStAOIYg7_2kjjvJgFQIbaBJTPYrGA",
      authDomain: "ksomethingwitter.firebaseapp.com",
      databaseURL: "https://ksomethingwitter-default-rtdb.firebaseio.com",
      projectId: "ksomethingwitter",
      storageBucket: "ksomethingwitter.appspot.com",
      messagingSenderId: "256382242991",
      appId: "1:256382242991:web:6948132864198f97dec45a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
