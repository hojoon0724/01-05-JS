console.log("noop noop");

// landscaper stats
const landscaper = {
  name: "userName",
  money: 0,
  tool: 0,
};

// tools stats
const tools = [
  { name: "Teeth", cost: 0, generates: 1 },
  { name: "Rusty Scissors", cost: 5, generates: 5 },
  { name: "Old-timey Push Lawnmower", cost: 25, generates: 50 },
  { name: "Fancy Battery-Powered Lawnmower", cost: 250, generates: 100 },
  { name: "Team of Starving Students", cost: 500, generates: 250 },
];

// current tool
const tool = tools[landscaper.tool];

// function to cut grass
function cutGrass() {
  landscaper.money += tool.generates;
  alert(
    `You cut some grass and made $${tool.generates}. You have $${landscaper.money}.`
  );
  askNext();
}
//TODO: REDUCE
// function to buy scissors
function buyScissors() {
  const item = tools[1];
  if (landscaper.money < item.cost) {
    alert(`You have $${landscaper.money} but ${item.name} costs $${item.cost}`);
  } else {
    landscaper.tool = item;
    landscaper.money -= landscaper.tool.cost;
  }
}

// function to buy push lawnmower
function buyPushLawnmower() {
  const item = tools[2];
  if (landscaper.money < item.cost) {
    alert(`You have $${landscaper.money} but ${item.name} costs $${item.cost}`);
  } else {
    landscaper.tool = item;
    landscaper.money -= landscaper.tool.cost;
  }
}

// function to buy lawnmower
function buyBatteryLawnmower() {
  const item = tools[3];
  if (landscaper.money < item.cost) {
    alert(`You have $${landscaper.money} but ${item.name} costs $${item.cost}`);
  } else {
    landscaper.tool = item;
    landscaper.money -= landscaper.tool.cost;
  }
}

// buy team
function buyTeam() {
  const item = tools[4];
  if (landscaper.money < item.cost) {
    alert(`You have $${landscaper.money} but ${item.name} costs $${item.cost}`);
  } else {
    landscaper.tool = item;
    landscaper.money -= landscaper.tool.cost;
  }
}
//TODO: REDUCE

// * Game mechanics
//!alert(`You're now a landscaper. The better the tools, the more you'll earn`);
let answer = "c";

function askNext() {
  if (landscaper.money >= tools[1]) {
    answer = prompt(
      `You have enough to upgrade to ${tools[1].name}. Do you want to upgrade?, yes / no`
    );
  } else answer = prompt(`Let's [c]ut some grass. Or [u]pgrade`);
  if (answer == "c") {
    cutGrass();
  } else if (answer == "u") {
    console.log("upgrade");
  } else {
    alert(`dude, just pick one from your options`);
    askNext();
  }
}

askNext();
console.log(answer);

// win the game when you have a team of starving students and 1000
// say that they won the game
