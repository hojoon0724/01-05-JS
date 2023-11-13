const tools = [
  { level: 0, name: "Teeth", cost: 0, generates: 1 },
  { level: 1, name: "Rusty Scissors", cost: 5, generates: 5 },
  { level: 2, name: "Old-timey Push Lawnmower", cost: 25, generates: 50 },
  { level: 3, name: "Fancy Battery-Powered Lawnmower", cost: 250, generates: 100 },
  { level: 4, name: "Team of Starving Students", cost: 500, generates: 250 },
  { level: 5, name: "No more upgrades", cost: 20000, generates: 250 },
];

const landscaper = {
  name: "",
  money: 20,
};

const toolbox = [];
toolbox.push(tools[0]);
let currentTool = toolbox[toolbox.length - 1];
let nextItem = tools[toolbox.length];

//* process functions
function checkUpgrade() {
  if (landscaper.money >= tools[toolbox.length].cost) {
    youCanUpgrade();
  } else {
    notEnoughMoney();
  }
}

function upgrade() {
  toolbox.push(tools[toolbox.length]);
  currentTool = toolbox[toolbox.length - 1];
  nextItem = tools[toolbox.length];
}

//* message functions
function youCanUpgrade() {
  const message = `You have enough money to upgrade to ${tools[toolbox.length].name}.`;
  console.log(message);
}

function notEnoughMoney() {
  const message = `You don't have enough money to upgrade. You need ${tools[toolbox.length].cost} to buy the ${
    tools[toolbox.length].name
  }`;
  console.log(message);
}

function noMoreUpgrades() {
  const message = `There are no more upgrades`;
  console.log(message);
}

//! action functions
function askUpgrade() {
  console.log("want to upgrade?");
}

function cutGrass() {
  landscaper.money += toolbox[toolbox.length - 1].generates;
  console.log("pressed");
}

//* insert to HTML
function updateHTML() {
  document.getElementById("money").innerHTML = `$${landscaper.money}`;
}

document.querySelector("#work").onclick = function () {
  cutGrass();
  updateHTML();
};

youCanUpgrade();
