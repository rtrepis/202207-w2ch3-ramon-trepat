const ranking = [
  { name: "Paul", points: 110 },
  { name: "Anna", points: 106 },
  { name: "Margaret", points: 101 },
  { name: "John", points: 104 },
  { name: "Scarlett", points: 100 },
];

const showRanking = () => {
  ranking.sort((a, b) => b.points - a.points);
  ranking.forEach((player) =>
    console.log(`El ${player.name}  -----  te -------- ${player.points}`)
  );
};

const player = {
  name: prompt("Introdueix el teu nickname:"),
  points: 0,
};

console.log(player);

let cardboard = [];
let numbersCradboard = [];
let bombo = [];
let turn = 0;
let lineaPossible = true;
let replay = false;
const ballsInbombo = 100;

playBingo();

function playBingo() {
  cardboard = [];
  numbersCradboard = [];
  bombo = [];
  turn = 0;
  lineaPossible = true;
  replay = false;

  newCardboard();
  while (!askYesOrNot("Voleu aquesta taula? Yes/Not")) {
    newCardboard();
  }
  newTurn();
}

function newCardboard() {
  x = 0;
  y = 0;
  while (x < 5) {
    cardboard[x] = [];
    while (y < 5) {
      newCardNumber = newNumberRandom();
      if (!numbersCradboard.includes(newCardNumber)) {
        numbersCradboard.push(newCardNumber);
        cardboard[x][y] = newCardNumber;
        y++;
      }
    }
    x++;
    y = 0;
  }
  console.table(cardboard);
}

function newNumberRandom() {
  return (numberRandom = Math.floor(Math.random() * ballsInbombo));
}

function newTurn() {
  turn++;

  let randomNumberTurn;
  let turnNumberOK = false;
  let bingo = 0;

  while (!turnNumberOK) {
    randomNumberTurn = newNumberRandom();
    if (!bombo.includes(randomNumberTurn)) {
      bombo.push(randomNumberTurn);
      turnNumberOK = true;
    }
  }

  console.log(randomNumberTurn);

  for (u = 0; u < cardboard.length; u++) {
    linea = 0;
    for (i = 0; i < cardboard[u].length; i++) {
      if (cardboard[u][i] === randomNumberTurn) {
        cardboard[u][i] = "X";
      }
      if (cardboard[u][i] === "X") {
        linea++;
      }
      if (linea > 4 && lineaPossible) {
        console.log("Linea !!!");
        lineaPossible = false;
      }
    }
  }

  for (i = 0; i < bombo.length; i++) {
    if (numbersCradboard.includes(+bombo[i])) {
      bingo++;
      if (bingo > 24) {
        console.log("Bingo !!!");
        console.log(`Has aconseguit acabar amb : ${turn} torns`);
        replay = true;
      }
    }
  }

  console.table(cardboard);
  if (replay) {
    askReturnPlay();
  } else {
    askNewTurn();
  }
}

function askNewTurn() {
  if (confirm("Voleu copntinuar?")) {
    newTurn();
  } else {
    console.log("Bye, Bye !!");
  }
}

function askReturnPlay() {
  player.points = turn * -1 + ballsInbombo * 2;
  ranking.push(player);
  showRanking();
  if (confirm("Vols jugar de nou?")) {
    playBingo();
  } else {
    console.log("Bye, Bye !!");
  }
}

function askYesOrNot(ask) {
  let answer;
  do {
    answer = prompt(ask);
    if (answer) {
      answer = answer.trim();
      switch (answer.toLowerCase()) {
        case "y":
          answer = true;
          break;
        case "yes":
          answer = true;
          break;
        case "n":
          answer = false;
          break;
        case "not":
          answer = false;
          break;
        default:
          alert(`${answer} no es una opció carrecta`);
      }
    } else {
      alert("Camp buit");
    }
  } while (answer !== true && answer !== false);
  return answer;
}
