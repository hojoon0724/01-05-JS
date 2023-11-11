console.log("noop noop");

// landscaper stats
const landscaper = {
  name: "userName",
  money: 4,
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
}

// function to buy scissors
function buyScissors() {
  if (landscaper.money < tools[1].cost) {
    alert(
      `You have $${landscaper.money} but ${tools[1].name} costs $${tools[1].cost}`
    );
  } else {
    landscaper.tool = tools[1];
    landscaper.money -= landscaper.tool.cost;
  }
}

buyScissors();
console.log(landscaper.money);
// win the game when you have a team of starving students and 1000
// say that they won the game
