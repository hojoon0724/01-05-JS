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
  money: 3,
};

const toolbox = [];

toolbox.push(tools[0]);

function cutGrass() {
  landscaper.money += toolbox[toolbox.length - 1].generates;
}

cutGrass();
cutGrass();
console.log(landscaper.money);

function checkUpgrade() {
  if (landscaper.money > tools[toolbox.length].cost) {
    youCanUpgrade();
  } else {
    notEnoughMoney();
  }
}

function askUpgrade() {
  console.log("want to upgrade?");
}

function upgrade() {
  toolbox.push(tools[toolbox.length]);
}

function youCanUpgrade() {
  const upgradeMessage = `You have enough money to upgrade to ${tools[toolbox.length].name}.`;
  console.log(upgradeMessage);
}

function notEnoughMoney() {
  console.log("you need more money");
}

youCanUpgrade();
