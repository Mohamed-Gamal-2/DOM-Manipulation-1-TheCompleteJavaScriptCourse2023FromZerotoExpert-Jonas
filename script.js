"use strict";

function changeMsg(msg) {
  document.querySelector(".message").textContent = msg;
}

let secretNumber = Math.ceil(Math.random() * 20);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //If number = 0 or no number at all
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";

    //Correct answer
  } else if (guess === secretNumber) {
    changeMsg("Your guess is Correct!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (
      Number(document.querySelector(".highscore").textContent) <
      Number(document.querySelector(".score").textContent)
    ) {
      document.querySelector(".highscore").textContent =
        document.querySelector(".score").textContent;
    }

    //Wrong Guess
  } else if (guess !== secretNumber) {
    if (Number(document.querySelector(".score").textContent) > 1) {
      changeMsg(
        guess > secretNumber ? "Your guess is High!" : "Your guess is Low!"
      );
      document.querySelector(".score").textContent =
        Number(document.querySelector(".score").textContent) - 1;
    } else {
      document.querySelector(".score").textContent = 0;
      changeMsg("Game Over!");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.ceil(Math.random() * 20);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  changeMsg("Start guessing...");
  document.querySelector(".score").textContent = 20;
});
