var checker;
var count = 1;
var counter;
var red = ["X", "O"];
var cyan = ["O", "X"];
let activities = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"]
];
var player_1
var player_2
document.querySelector("button").addEventListener("click", function() {
  for (var i = 0; i < 5; i++) {
    document.querySelectorAll(".p")[i].classList.add("hidden");
  }
  player_1 = document.querySelector(".p1").value;
  player_2 = document.querySelector(".p2").value;
});
if (player_1 == null) {
  player_1 = "Player 1";
}
if (player_2 == null) {
  player_2 = "Player 2";
}

for (i = 0; i < 9; i++) {
  document.querySelectorAll(".bl")[i].addEventListener("click", function() {
    if (count % 2 == 0 && red.includes(this.textContent) == false && cyan.includes(this.textContent) == false) {
      red.push(this.textContent);
      this.innerHTML = "<p>X</p>";
      this.style.backgroundColor = "#f73859";
      count++;
      arrayAlreadyHasArray(activities, red, counter = 2);
    } else if (red.includes(this.textContent) == false && cyan.includes(this.textContent) == false) {
      cyan.push(this.textContent);
      this.innerHTML = "<p>O</p>";
      this.classList.add("visible");
      this.style.backgroundColor = "#aedefc";
      count++;
      arrayAlreadyHasArray(activities, cyan, counter = 1);
    }
  });
}

function arrayAlreadyHasArray(arr, subarr, counter) {
  for (var l = 0; l < 8; l++) {
    checker = 0;
    for (var j = 0; j < 3; j++) {
      for (var k = 2; k < subarr.length; k++) {
        if (arr[l][j] == subarr[k]) {
          checker++;
          if (checker == 3) {
            if (counter == 1) {
              var player = player_1;
            } else {
              player = player_2;
            }
            document.querySelector("h1").innerHTML = "WINNER : " + player.toUpperCase();
            document.querySelector("h2").innerHTML = "Game is over. <span>Click here</span> to play again";
            document.querySelector("h2").addEventListener("click", rload);
            for (var i = 0; i < 5; i++) {
              document.querySelectorAll(".p")[i].classList.add("hidden");
            }
            setTimeout(function() {
              document.querySelector(".main").classList.add("hidden");
            }, 1000);
          }
          else if(cyan.length==7 && red.length==6)
          {
            document.querySelector("h1").innerHTML = "GAME DRAW";
            document.querySelector("h2").innerHTML = "Game is over. <span>Click here</span> to play again";document.querySelector("h2").addEventListener("click", rload);
            for (var i = 0; i < 5; i++) {
              document.querySelectorAll(".p")[i].classList.add("hidden");
            }
            setTimeout(function() {
              document.querySelector(".main").classList.add("hidden");
            }, 1000);
          }
        }
      }
    }
  }
}

function rload() {
  location.reload();
}
