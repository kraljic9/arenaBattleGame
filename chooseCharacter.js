let characterBoxes = document.querySelectorAll(".character-box");

console.log(characterBoxes);

characterBoxes.forEach((box) => {
  box.addEventListener("click", function () {
    window.location.href = "battleScreen.html";
  });
});
