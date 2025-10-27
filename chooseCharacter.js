let characterBoxes = document.querySelectorAll(".character-box");
let player;
let computer;

class Character {
  constructor(className, health, attack) {
    this.className = className;
    this.health = health;
    this.attack = attack;
  }

  specialAbility() {
    return this.attack;
  }
}

class Warrior extends Character {
  constructor(className, health, attack) {
    super(className, health, attack);
  }
  specialAbility() {
    this.attack += 10;
    return this.attack;
  }

  attackOpponent(target) {
    target.health -= this.attack;
  }

  defende(target) {
    this.health += target.attack;
    return this.health;
  }
}

class Mage extends Character {
  constructor(className, health, attack, mana) {
    super(className, health, attack);
    this.mana = mana;
  }

  specialAbility() {
    this.mana += 20;
    return this.mana;
  }

  attackOpponent(target) {
    target.health -= this.attack;
  }

  defende(target) {
    this.health += target.attack;
    return this.health;
  }
}

class Rogue extends Character {
  constructor(className, health, attack) {
    super(className, health, attack);
  }

  specialAbility() {
    this.health += 10;
    return this.health;
  }

  attackOpponent(target) {
    target.health -= this.attack;
  }

  defende(target) {
    this.health += target.attack;
    return this.health;
  }
}

function playerSelection() {
  characterBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      let playersChoice;

      if (box.id === "warrior") {
        playersChoice = {
          type: "Warrior",
          className: "Warrior",
          health: 100,
          attack: 20,
        };
      }

      if (box.id === "mage") {
        playersChoice = {
          type: "Mage",
          className: "Mage",
          health: 100,
          attack: 25,
          mana: 100,
        };
      }

      if (box.id === "rogue") {
        playersChoice = {
          type: "Rogue",
          className: "Rogue",
          health: 100,
          attack: 25,
        };
      }

      if (playersChoice) {
        sessionStorage.setItem("playersChoice", JSON.stringify(playersChoice));
        player = playersChoice;
        window.location.href = "battleScreen.html";
      }
    });
  });
}

function computerSelection() {
  let pcChoice = Math.floor(Math.random() * 3) + 1;

  if (pcChoice === 1) {
    computer = {
      type: "Warrior",
      className: "Warrior",
      health: 100,
      attack: 20,
    };
  }

  if (pcChoice === 2) {
    computer = {
      type: "Mage",
      className: "Mage",
      health: 100,
      attack: 25,
      mana: 100,
    };
  }

  if (pcChoice === 3) {
    computer = {
      type: "Rogue",
      className: "Rogue",
      health: 100,
      attack: 25,
    };
  }

  if (computer) {
    sessionStorage.setItem("computersChoice", JSON.stringify(computer));
  }

  console.log("Computer has choosen");
}

computerSelection();
playerSelection();

export { Warrior, Mage, Rogue };
