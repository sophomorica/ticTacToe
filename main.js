var squares = document.getElementsByClassName("game_square");
var userChoice;
console.log(squares);
// var test = document.getElementById("1")
var s1 = document.getElementById("1");
var s2 = document.getElementById("2");
var s3 = document.getElementById("3");
var s4 = document.getElementById("4");
var s5 = document.getElementById("5");
var s6 = document.getElementById("6");
var s7 = document.getElementById("7");
var s8 = document.getElementById("8");
var s9 = document.getElementById("9");

//const moves = [s1,s2,s3,s4,s5,s6,s7,s8,s9]
//const moves = [s1,s2,s3,s4,s5,s6,s7,s8,s9]

var player = 1;
function display_input(choice) {
  if ((player == 1)) {
    let content = document.createElement("h1");
    content.className = "user";
    content.textContent = "x";
    choice.appendChild(content);
    // console.log(player)
    player = 0;
  } else {
    let content = document.createElement("h1");
    content.className = "user";
    content.textContent = "o";
    choice.appendChild(content);
    player = 1;
  }

  return player;
  
}
// function ticTac(player){
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function() {
    userChoice = this.id;

     console.log(player)
    // content = document.createElement("h1");
    // content.className = "user";
    // content.textContent = userChoice

    switch (userChoice) {
      case "1":
        removeContent();
        display_input(s1)
        // console.log(player)
        break;
      case "2":
        removeContent();
        display_input(s2);
        break;
      case "3":
        removeContent();
        display_input(s3);
        break;
      case "4":
        removeContent();
        display_input(s4);
        break;
      case "5":
        removeContent();
        display_input(s5);
        break;
      case "6":
        removeContent();
        display_input(s6);
        break;
      case "7":
        removeContent();
        display_input(s7);
        break;
      case "8":
        removeContent();
        display_input(s8);
        break;
      case "9":
        removeContent();
        display_input(s9);
        break;
    }
  });
}
// ticTac(player)
const removeContent = () => {
  let removeH1 = document.getElementById(userChoice.toString());
  while (removeH1.firstChild) {
    removeH1.removeChild(removeH1.firstChild);
  }
};
