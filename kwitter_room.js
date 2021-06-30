//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC7iPUiYnj1gMVTWpFVVASql3VFyGLZJAM",
      authDomain: "kwitter-67bdd.firebaseapp.com",
      databaseURL: "https://kwitter-67bdd-default-rtdb.firebaseio.com",
      projectId: "kwitter-67bdd",
      storageBucket: "kwitter-67bdd.appspot.com",
      messagingSenderId: "694773437023",
      appId: "1:694773437023:web:9947030371b4696f8f01ea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name ;

function add() {
      var room_name = document.getElementById("t2").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";


}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
              row="<div class='room_name' id='" +Room_names+"' onclick=redirecttoroomname(this.id)>"+Room_names+"</div>";
              document.getElementById("output").innerHTML+=row;
                  //Start code

                  //End code
            });
      });
}
getData();
function logout(){
      window.location="index.html";
}
function redirecttoroomname(name){
      localStorage.setItem("clicked_room",name);
      window.location="kwitter_page.html";
}