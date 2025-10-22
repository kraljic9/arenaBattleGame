let startGameBtn = document.querySelector(".startGame");

function goToChooseCharacter() {
  window.location.href = "chooseCharacter.html";
}

startGameBtn.addEventListener("click", goToChooseCharacter);
