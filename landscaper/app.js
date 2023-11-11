console.log("noop noop");

// tools stats
const tools = [
  { level: 0, name: "Teeth", cost: 0, generates: 1 },
  { level: 1, name: "Rusty Scissors", cost: 5, generates: 5 },
  { level: 2, name: "Old-timey Push Lawnmower", cost: 25, generates: 50 },
  { level: 3, name: "Fancy Battery-Powered Lawnmower", cost: 250, generates: 100 },
  { level: 4, name: "Team of Starving Students", cost: 500, generates: 250 },
  { level: 5, name: "No more upgrades", cost: 20000, generates: 250 },
];

// landscaper stats
const landscaper = {
  money: 1000,
  tool: tools[4],
};

// define tool level
let currentLevel = landscaper.tool.level;
let nextItem = tools[currentLevel + 1];

// actions
function cutGrass() {
  landscaper.money += landscaper.tool.generates;
  alert(
    `You cut some grass with ${landscaper.tool.name} and made $${landscaper.tool.generates}. You now have $${landscaper.money}.`
  );
  checkUpgrade();
}

function levelUp() {
  if (currentLevel === 4) {
    maxedOut();
  } else if (landscaper.money < nextItem.cost) {
    notEnoughMoney();
  } else {
    upgrade();
  }
}

// calculations
function upgrade() {
  currentLevel++;
  landscaper.money -= nextItem.cost;
  landscaper.tool = nextItem;
  alert(`You spent $${nextItem.cost} and upgraded to ${nextItem.name}`);
  nextItem = tools[currentLevel + 1];
  alert(`You now have $${landscaper.money}. Next item: ${nextItem.name}`);
  needToWork();
}

function checkUpgrade() {
  if (landscaper.money >= nextItem.cost) {
    askUpgrade();
  } else {
    needToWork();
  }
}

function startGame() {
  needToWork();
}

function end() {
  alert(`You lost everything in a fire, let's start again`);
  alert(`jk. You win!`);
}
// alert messages
function maxedOut() {
  alert(`You've reached the maximum level`);
}

function notEnoughMoney() {
  alert(`You have $${landscaper.money} but ${nextItem.name} costs $${nextItem.cost}`);
}

// prompts
function needToWork() {
  let answer = "";
  if (landscaper.money >= 1000 && landscaper.tool.level >= 4) {
    end();
  } else {
    answer = prompt("Cut some grass today? [Y]es/[N]o");
    if (answer == "y") {
      cutGrass();
    } else {
      alert("You don't really have a choice");
      cutGrass();
    }
  }
}

function askUpgrade() {
  let answer = "";
  answer = prompt(`You now have enough money to upgrade to ${nextItem.name}. Wanna upgrade? [Y]es/[N]o`);
  if (answer == "y") {
    upgrade();
  } else if (answer == "n") {
    alert(`Knock yourself out`);
    cutGrass();
  } else {
    alert(`I'll take that as a yes`);
    upgrade();
  }
}

startGame();
