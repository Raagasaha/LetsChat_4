    //Start code


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDPv5BN5-0OFU7GWmSVuW54-925cnmvvw4",
    authDomain: "kwitter-firebase-2cbe0.firebaseapp.com",
    databaseURL: "https://kwitter-firebase-2cbe0-default-rtdb.firebaseio.com",
    projectId: "kwitter-firebase-2cbe0",
    storageBucket: "kwitter-firebase-2cbe0.appspot.com",
    messagingSenderId: "140148339195",
    appId: "1:140148339195:web:2dfd35381f8c4c79fa9b5e",
    measurementId: "G-LNJ77W7VSC"
    };
  //ADD YOUR FIREBASE LINKS
  
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!"
  
  function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
  });
  
  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
  }
  
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
  
   console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML +=row;
        
        });});}
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  
  
  
  
  
  
  







  














