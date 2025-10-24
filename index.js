let startGameBtn = document.querySelector(".startGame");

let characterBoxes = document.querySelectorAll(".characterBox");

function goToChooseCharacter() {
  window.location.href = "chooseCharacter.html";
}

startGameBtn.addEventListener("click", goToChooseCharacter);
