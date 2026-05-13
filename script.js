let hp = 100;
let enemyHp = 50;
let gold = 100;
let level = 1;

function updateStats() {
  document.getElementById("hp").innerText = hp;
  document.getElementById("enemyHp").innerText = enemyHp;
  document.getElementById("gold").innerText = gold;
  document.getElementById("level").innerText = level;
}

function attack() {
  let damage = Math.floor(Math.random() * 15) + 5;
  enemyHp -= damage;

  document.getElementById("log").innerHTML =
    "You attacked the goblin for " + damage + " damage!";

  if (enemyHp <= 0) {
    gold += 50;
    level++;

    document.getElementById("log").innerHTML +=
      "<br>Goblin defeated! +50 Gold";

    enemyHp = 60 + (level * 10);
  }

  updateStats();
}

function heal() {
  hp += 20;

  if (hp > 100) {
    hp = 100;
  }

  document.getElementById("log").innerHTML =
    "You used a healing potion.";
    
  updateStats();
}

function explore() {
  let foundGold = Math.floor(Math.random() * 30);

  gold += foundGold;

  document.getElementById("log").innerHTML =
    "You explored the forest and found " +
    foundGold + " gold.";

  updateStats();
}

updateStats();
