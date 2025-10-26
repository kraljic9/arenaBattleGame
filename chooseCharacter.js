/*
let Warriror1 = new Warriror("Warrior", 100, 20);
let mage1 = new Mage("Mage", 100, 25, 100);
let rouge1 = new Rouge("Rouge", 100, 20);
*/
let characterBoxes = document.querySelectorAll(".character-box");

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

class Warriror extends Character {
  constructor(className, health, attack) {
    super(className, health, attack);
  }
  specialAbility() {
    this.attack += 10;
    return this.attack;
  }
}

class Mage extends Character {
  constructor(className, health, attack, mana) {
    super(className, health, attack);
    this.mana = mana;
  }

  specialAbility() {
    this.mana += 20;
  }
}

class Rouge extends Character {
  constructor(className, health, attack) {
    super(className, health, attack);
  }

  specialAbility() {
    this.health += 10;
    return this.health;
  }
}

console.log(Warriror1);
console.log(rouge1);
console.log(mage1);

characterBoxes.forEach((box) => {
  box.addEventListener("click", function () {
    window.location.href = "battleScreen.html";
  });
});
