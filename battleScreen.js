import { Warrior, Mage, Rogue } from "./chooseCharacter.js";

// Player items
let playerClass = document.querySelector("#player-class");
let playerImage = document.querySelector("#player-image");
let playerHealth = document.querySelector("#palyer-health");
let playerAttack = document.querySelector("#player-attack");
let playerAbility = document.querySelector("#player-ability");

// Computer items

let pcClass = document.querySelector("#computer-class");
let pcImage = document.querySelector("#computer-image");
let pcHealth = document.querySelector("#computer-health");
let pcAttack = document.querySelector("#computer-attack");
let pcAbility = document.querySelector("#computer-ability");

let attackBtn = document.querySelector("#attack-btn");
let defendBtn = document.querySelector("#defende-btn");
let specialBtn = document.querySelector("#special-btn");

let attackBtnClicked;
let defendBtnClicked;
let specialBtnClicked;

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

  playerClass.innerHTML = `${player.className}`;

  if (player.className === "Warrior") {
    playerImage.src = "knight.webp";
    playerHealth.innerHTML = `Health❤️: ${player.health}`;
    playerAttack.innerHTML = `Attack⚔️: ${player.attack}`;
    playerAbility.innerHTML = "Ability😡: Rage";
  } else if (player.className === "Mage") {
    playerImage.src = "mage.webp";
    playerHealth.innerHTML = `Health❤️: ${player.health}`;
    playerAttack.innerHTML = `Attack⚔️: ${player.attack}`;
    playerAbility.innerHTML = `Mana🌀: ${player.mana}`;
  } else if (player.className === "Rogue") {
    playerImage.src = "rogue.webp";
    playerHealth.innerHTML = `Health❤️: ${player.health}`;
    playerAttack.innerHTML = `Attack⚔️: ${player.attack}`;
    playerAbility.innerHTML = "Ability💚: Heal";
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

  pcClass.innerHTML = `${computer.className}`;

  if (computer.className === "Warrior") {
    pcImage.src = "knight.webp";
    pcHealth.innerHTML = `Health❤️: ${player.health}`;
    pcAttack.innerHTML = `Attack⚔️: ${player.attack}`;
    pcAbility.innerHTML = "Ability😡: Rage";
  } else if (player.className === "Mage") {
    pcImage.src = "mage.webp";
    pcHealth.innerHTML = `Health❤️: ${player.health}`;
    pcAttack.innerHTML = `Attack⚔️: ${player.attack}`;
    pcAbility.innerHTML = `Mana🌀: ${player.mana}`;
  } else if (player.className === "Rogue") {
    pcImage.src = "rogue.webp";
    pcHealth.innerHTML = `Health❤️: ${player.health}`;
    pcAttack.innerHTML = `Attack⚔️: ${player.attack}`;
    pcAbility.innerHTML = "Ability💚: Heal";
  }
}

console.log("Player:", player);
console.log("Computer:", computer);

function playGame() {
  if (player.health >= 100) {
    player.health = 100;
  } else if (computer.health >= 100) {
    computer.health = 100;
  } else if (player.health <= 0) {
    console.log(`Computer is winner`);
    return;
  } else if (computer.health <= 0) {
    console.log("Pc is winner");
    return;
  }

  attackBtn.addEventListener("click", function () {
    attackBtnClicked = true;
    player.attackOpponent(computer);
    computerSelect();
    attackBtnClicked = false;
    return computer.health;
  });

  defendBtn.addEventListener("click", function () {
    attackBtnClicked = true;
    player.defende(computer);
    computerSelect();
    attackBtnClicked = false;
  });

  specialBtn.addEventListener("click", function () {
    attackBtnClicked = true;
    player.specialAbility();
    computerSelect();
    attackBtnClicked = false;
  });

  playerHealth.innerHTML = `Health❤️: ${player.health}`;
  playerAttack.innerHTML = `Attack⚔️: ${computer.attack};`;
  pcHealth.innerHTML = `Health❤️: ${computer.health}`;
  pcAttack.innerHTML = `Attack⚔️: ${computer.attack}`;
}

function computerSelect() {
  let computerAction = Math.floor(Math.random() * 3) + 1;

  if (computerAction === 1) {
    computer.attackOpponent(player);
    console.log(
      `Computer has attacked player, player takes ${computer.attack} damage`
    );
    return player.health;
  } else if (computerAction === 2) {
    computer.defende(player);
    console.log(`Computer has blocked players attack`);
  } else if (computerAction === 3) {
    computer.specialAbility();
    console.log(`Computer has used his special ability`);
  }

  playerHealth.innerHTML = `Health❤️: ${player.health}`;
  playerAttack.innerHTML = `Attack⚔️: ${computer.attack};`;
  pcHealth.innerHTML = `Health❤️: ${computer.health}`;
  pcAttack.innerHTML = `Attack⚔️: ${computer.attack}`;

  console.log(computerAction);
}

playGame();
/*
When buttons are clicked do a action attack, defende, ability after also set button clicked value to true after action is finished trigger computer choice of action, set button clicked value to false,    
*/
