
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCpCDffrd-qAU1MS3oShGLDOiQ1iLwIQcg",
      authDomain: "kwitter-1817d.firebaseapp.com",
      databaseURL: "https://kwitter-1817d-default-rtdb.firebaseio.com",
      projectId: "kwitter-1817d",
      storageBucket: "kwitter-1817d.appspot.com",
      messagingSenderId: "872113725130",
      appId: "1:872113725130:web:5d3566dc21403281d81e33",
      measurementId: "G-N1CT0CB8KV"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("User_name").innerHTML=user_name;

    function addRoom() {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room_name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";

    }





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}