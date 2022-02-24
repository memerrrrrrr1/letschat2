//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCJ5nRt7CO-L6qyXKuDjBv913tfzq79GrI",
      authDomain: "let-s-chat-d31d8.firebaseapp.com",
      databaseURL: "https://let-s-chat-d31d8-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-d31d8",
      storageBucket: "let-s-chat-d31d8.appspot.com",
      messagingSenderId: "660737642435",
      appId: "1:660737642435:web:d3bc2af4e316b6f29ff776"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);


un= localStorage.getItem("username")
document.getElementById("span_user").innerHTML=un;
// function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
//          firebase_message_id = childKey;
//          message_data = childData;
// Start code
// End code
//       } });  }); }
// getData();


function logout(){
      localStorage.removeItem("username");
      window.location="index.html";
}

