import { Warrior, Mage, Rogue } from "./chooseCharacter.js";

// Player items
let playerName = document.querySelector(".player-class");
let playerImage = document.querySelector(".player-image");
let playerHealth = document.querySelector(".player-health");
let playerAttack = document.querySelector(".player-attack");
let playerAbility = document.querySelector(".player-ability");

// Computer items

let pcName = document.querySelector("#computer-class");
let pcImage = document.querySelector("#computer-image");
let pcHealth = document.querySelector("#computer-health");
let pcAttack = document.querySelector("#computer-attack");
let pcAbility = document.querySelector("#computer-ability");

let raw = sessionStorage.getItem("playersChoice");
let player;

if (raw) {
  let sec = JSON.parse(raw);

  if (sec.type === "Warrior") {
    player = new Warrior(sec.className, sec.health, sec.attack);
  } else if (sec.type === "Mage") {
    player = new Mage(sec.className, sec.health, sec.attack, sec.mana);
  } else if (sec.type === "Rogue") {
    player = new Rogue(sec.className, sec.health, sec.attack);
  }
}

let rawPc = sessionStorage.getItem("computersChoice");
let computer;

if (rawPc) {
  let pcSec = JSON.parse(rawPc);

  if (pcSec.type === "Warrior") {
    computer = new Warrior(pcSec.className, pcSec.health, pcSec.attack);
  } else if (pcSec.type === "Mage") {
    computer = new Mage(
      pcSec.className,
      pcSec.health,
      pcSec.attack,
      pcSec.mana
    );
  } else if (pcSec.type === "Rogue") {
    computer = new Rogue(pcSec.className, pcSec.health, pcSec.attack);
  }
}

console.log("Player:", player);
console.log("Computer:", computer);
