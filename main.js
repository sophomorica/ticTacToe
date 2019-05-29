var squares = document.getElementsByClassName("game_square");
var userChoice;
console.log(squares);
// var test = document.getElementById("1")
var moves = []
var s1 = document.getElementById("1")
var s2 = document.getElementById("2")
var s3 = document.getElementById("3")
var s4 = document.getElementById("4")
var s5 = document.getElementById("5")
var s6 = document.getElementById("6")
var s7 = document.getElementById("7")
var s8 = document.getElementById("8")
var s9 = document.getElementById("9")
var winner = document.getElementById("won")
var c1="1",c2="c2",c3="c3",c4="c4",c5="c5",c6="c6",c7="c7",c8="c8",c9="c9";


for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function() {
    userChoice = this.id;
    console.log(userChoice);
    console.log(`s${userChoice}`);
    let x_content = document.createElement("h1");
    x_content.className = "user";
    x_content.textContent = "X";
    switch (userChoice) {
      case "1":
        removeContent();
        s1.appendChild(x_content);
        c1="x"
        break;
      case "2":
        removeContent();
        s2.appendChild(x_content);
        c2="x"
        break;
      case "3":
        removeContent();
        s3.appendChild(x_content);
        c3="x"
        break;
      case "4":
        removeContent();
        s4.appendChild(x_content);
        c4="x"
        break;
      case "5":
        removeContent();
        s5.appendChild(x_content);
        c5="x"
        break;
      case "6":
        removeContent();
        s6.appendChild(x_content);
        c6="x"
        break;
      case "7":
        removeContent();
        s7.appendChild(x_content);
        c7="x"
        break;
      case "8":
        removeContent();
        s8.appendChild(x_content);
        c8="x"
        break;
      case "9":
        removeContent();
        s9.appendChild(x_content);
        c9="x"
        break;
    }
    var trios = [[c1,c2,c3],[c4,c5,c6],[c7,c8,c9],[c1,c4,c7],[c2,c5,c8],[c3,c6,c9],[c1,c5,c9],[c3,c5,c7]];
    trios.forEach( function(element) {
      if (element.every( (val, i, arr) => val === "x" ) === true) {
        console.log("player 1 wins")
        winner.innerHTML = "X Wins!!"
      }
      if (element.every( (val, i, arr) => val === "o" ) === true) {
        console.log("player 2 wins")
        winner.innerHTML = "O Wins!!"
      }
    });
  });
}

const removeContent = () => {
  let removeH1 = document.getElementById(userChoice.toString());
  while (removeH1.firstChild) {
    removeH1.removeChild(removeH1.firstChild);
  }
};
