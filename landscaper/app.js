console.log("noop noop");
// start
const landscaper = {
  name: "userName",
  money: 0,
  tool: 0,
};

const tools = [
  { name: "Teeth", cost: 0, generates: 1 },
  { name: "Rusty Scissors", cost: 5, generates: 5 },
  { name: "Old-timey Push Lawnmower", cost: 25, generates: 50 },
  { name: "Fancy Battery-Powered Lawnmower", cost: 250, generates: 100 },
  { name: "Team of Starving Students", cost: 500, generates: 250 },
];

const tool = tools[landscaper.tool];

// cut lawns with teeth = +1
const cutWithTeeth = () => {
  landscaper.money += tool.generates;
};

cutWithTeeth();
cutWithTeeth();
cutWithTeeth();
cutWithTeeth();
cutWithTeeth();
cutWithTeeth();
cutWithTeeth();
cutWithTeeth();
console.log(landscaper.money);

// rusty scissors = -5

// cut lawns with rusty scissors = +5

// old-timey push lawnmower = -25

// cut lawns with old-timey push lawnmower = +50

// buy fancy battery-powered lawnmower = -250

// cut lawns with battery-powered lawnmower = $100

// hire a team of starving students = -500

// cut lawns with a team of starving students = +250

// win the game when you have a team of starving students and 1000
// say that they won the game
