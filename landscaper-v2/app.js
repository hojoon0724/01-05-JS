const tools = [
  { level: 0, name: "Teeth", cost: 0, generates: 1, css: "teeth" },
  { level: 1, name: "Rusty Scissors", cost: 5, generates: 5, css: "scissor" },
  { level: 2, name: "Old-timey Push Lawnmower", cost: 25, generates: 50, css: "push" },
  { level: 3, name: "Fancy Battery-Powered Lawnmower", cost: 250, generates: 100, css: "electric" },
  { level: 4, name: "Team of Starving Students", cost: 500, generates: 250, css: "team" },
  { level: 5, name: "No more upgrades" },
];

const landscaper = {
  name: "",
  money: 0,
};

const toolbox = [];
toolbox.push(tools[0]);
let currentTool = toolbox[toolbox.length - 1];
let nextItem = tools[toolbox.length];
let message = ``;
let solidTool = currentTool.css;

//* process functions
function checkUpgrade() {
  if (landscaper.money >= nextItem.cost) {
    youCanUpgrade();
  }
}

function upgrade() {
  if (currentTool.level >= 4) {
    message = `There are no more upgrades`;
  } else if (landscaper.money >= nextItem.cost) {
    toolbox.push(tools[toolbox.length]);
    landscaper.money -= nextItem.cost;
    message = `You spent ${nextItem.cost} to upgrade to ${nextItem.name}.`;
    currentTool = toolbox[toolbox.length - 1];
    nextItem = tools[toolbox.length];
  } else {
    notEnoughMoney();
  }
}

//* message functions
function youCanUpgrade() {
  if (currentTool.level < 4) {
    message = message + ` You have enough money to upgrade to ${tools[toolbox.length].name}.`;
    console.log(message);
  }
}

function notEnoughMoney() {
  message = `You don't have enough money to upgrade. You need ${tools[toolbox.length].cost} to buy the ${
    tools[toolbox.length].name
  }`;
  console.log(message);
}

function noMoreUpgrades() {
  message = `There are no more upgrades`;
  console.log(message);
}

//! action functions
function askUpgrade() {
  console.log("want to upgrade?");
}

function cutGrass() {
  landscaper.money += toolbox[toolbox.length - 1].generates;
  message = `You cut the grass with ${currentTool.name} and made $${currentTool.generates}.`;
  console.log("pressed");
}

//* insert to HTML
function updateHTML() {
  document.getElementById("money").innerHTML = `$${landscaper.money}`;
}

function updateMessage() {
  document.getElementById("message-box").innerHTML = `${message}`;
}

function toolCSS() {
  activeDiv = currentTool.css;
  document.getElementById(activeDiv).style.opacity = 1;
}

function upgradedToolCSS() {
  inactiveDiv = toolbox[toolbox.length - 2].css;
  document.getElementById(inactiveDiv).style.opacity = 0.5;
  activeDiv = currentTool.css;
  document.getElementById(activeDiv).style.opacity = 1;
}

function checkWin() {
  if (landscaper.money >= 1000 && currentTool.level == 4) {
    winGame();
  }
}

function winGame() {
  message = `You win!`;
  updateMessage();
  updateHTML();
  document.getElementById("work").style.opacity = 0;
  document.getElementById("upgrade").style.opacity = 0;
}

document.querySelector("#work").onclick = function () {
  cutGrass();
  checkUpgrade();
  updateMessage();
  updateHTML();
  toolCSS();
  checkWin();
};

document.querySelector("#upgrade").onclick = function () {
  upgrade();
  updateMessage();
  updateHTML();
  upgradedToolCSS();
  checkWin();
};
