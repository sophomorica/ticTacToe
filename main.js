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
        break;
      case "2":
        removeContent();
        s2.appendChild(x_content);
        break;
      case "3":
        removeContent();
        s3.appendChild(x_content);
        break;
      case "4":
        removeContent();
        s4.appendChild(x_content);
        break;
      case "5":
        removeContent();
        s5.appendChild(x_content);
        break;
      case "6":
        removeContent();
        s6.appendChild(x_content);
        break;
      case "7":
        removeContent();
        s7.appendChild(x_content);
        break;
      case "8":
        removeContent();
        s8.appendChild(x_content);
        break;
      case "9":
        removeContent();
        s9.appendChild(x_content);
        break;
    }
  });
}

const removeContent = () => {
  let removeH1 = document.getElementById(userChoice.toString());
  while (removeH1.firstChild) {
    removeH1.removeChild(removeH1.firstChild);
  }
};
