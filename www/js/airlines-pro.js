let flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const userName = askName();
let allCost = 0;
let allScale = 0;
let lastFlightsTxt = "";

console.log("Benvingut " + userName);

/*   I Start refactor this funcion
function askName(newName) {
  let newName = prompt("Introdueix el seu nom");
  newName ? (newName = newName.trim()) : (newName = "NoName");
  return newName;
}
*/

const askName = function (newName) {
  let newName = prompt("Introdueix el seu nom");
  newName ? (newName = newName.trim()) : (newName = "NoName");
  return newName;
};

flights.forEach((flights) => {
  let scaleTxt;

  if (flights.scale) {
    scaleTxt = " amb escales";
    allScale++;
  } else {
    scaleTxt = " sense escales";
  }
  console.log(
    `El vol amb origen ${flights.from}, i destí ${flights.to} te un cost de ${flights.cost}€` +
      scaleTxt
  );

  allCost += flights.cost;
});

//flights.slice(-5).forEach(flights => {lastFlightsTxt += flights.to + ', '});
// al forEach com li dic que l'últim parametre em posi un punt?¿

for (i = 0; i < flights.slice(-5).length; i++) {
  if (i < flights.slice(-5).length - 1) {
    lastFlightsTxt += flights[i].to + ", ";
  } else {
    lastFlightsTxt += flights[i].to;
  }
}

console.log(
  `${userName} el cost mitjà del vols és de : ${(
    allCost / flights.length
  ).toFixed(
    2
  )}€ dels cuals ${allScale} fant escala i els últims destins del dia son : ${lastFlightsTxt}.`
);

//// Airlines PRO ///

var userType = askTwoOptions(
  "Indica categoria d'usuari? Admin/User",
  "admin",
  "user"
);

if (userType === "admin") {
  adminTasks();
} else if (userType === "user") {
  userTasks();
}

let lastIdFlight = 11;

function userTasks() {
  const actionUser = askTwoOptions(
    "Quina acció vols executar Buscar o Comprar ? B / C",
    "b",
    "c"
  );

  if (actionUser === "b") {
    //console.log('buscar')
    const maxCost = askNumber("Buscar vols per preu màxim:", 1, 9999);
    const findFlights = flights.filter((flights) => flights.cost < maxCost);
    console.log(findFlights);
    askNewTask();
  } else if (actionUser === "c") {
    //console.log('comprar')
    printFlights();
    const buyFlight = askNumber("Indica la ID del vol ha comprar:", 0, 999);
    alert("Gràcies per la seva compra, torni aviat");
    askNewTask();
  }
}

function adminTasks() {
  const actionAdmin = askTwoOptions(
    "Quina acció vols executar Crear o Esborrar ? C / E",
    "c",
    "e"
  );

  if (actionAdmin === "c") {
    if (flights.length < 15) {
      //console.log('introduïr vol');
      const newFlight = {};

      newFlight.id = lastIdFlight; //idAssing();
      newFlight.to = askString("Introduïu la ciutat de destí:");
      newFlight.from = askString("Introduïu la ciutat d'origen:", newFlight.To);
      newFlight.cost = askNumber("Introduïu el cost del vol:", 1, 9999);
      newFlight.scale = askYesOrNot("Introduïu si el vol fa escales: Yes/Not");

      flights.push(newFlight);
      lastIdFlight++;
      printFlights();
      askNewTask();
    } else {
      alert("Hi ha massa vols");
      askNewTask();
    }
  } else if (actionAdmin === "e") {
    printFlights();
    const eraseflight = askNumber(
      "Introduïu la id del vol ha esborrar:",
      0,
      9999
    );
    flights = flights.filter((flight) => flight.id !== eraseflight); // Why?¿
    askNewTask();
  }
}

function askNewTask() {
  const ask = confirm("Voleu fer una altra tasca?");
  if (ask && userType === "admin") {
    adminTasks();
  } else if (ask && userType === "user") {
    userTasks();
  } else {
    console.log("Bye, Bye !!");
  }
}

function printFlights() {
  return flights.forEach((flight) => {
    console.log(
      `id: ${flight.id} - Destí: ${flight.to} - Origen: ${flight.from} - Cost: ${flight.cost}€ - Escales: ${flight.scale}`
    );
  });
}

/*  Intent de assignar la id que falta per entre 1 i 15

function idAssing(){
    let newId 
    for ( i = 0 ; i < flights.length ; i++){
        if(i !== +flights[i].id){
            return newId = i + 1;
        }else{
            newId = i + 1;
        };
    };
    return newId
};
*/

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
          alert(answer + " no es una opció carrecta");
      }
    } else {
      alert("Camp buit");
    }
  } while (answer !== true && answer !== false);
  return answer;
}

function askNumber(ask, min, max) {
  let answer;
  do {
    answer = prompt(ask);
    if (answer) {
      answer = answer.trim();
      if (answer.trim() === "") {
        alert("Camp buït");
        answer = null;
      } else if (isNaN(answer)) {
        alert("No es un valor");
        answer = null;
      } else if (!isNaN(answer) && answer < min) {
        alert("Valor massa petit");
        answer = null;
      } else if (!isNaN(answer) && answer > max) {
        alert("Valor massa gran");
        answer = null;
      } else {
        return +answer;
      }
    }
  } while (answer === null);
}

function askString(ask, idem) {
  let answer;
  do {
    answer = prompt(ask);
    if (answer) {
      answer = answer.trim();
      answer = firstChartToUpperCase(answer);
      /* 
            || answer.length >= 3
            
            he intentat : answer = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
            o amb funcio answer = (string) => { return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();}
            */
      if (!isNaN(answer)) {
        alert(answer + " no es una opció correcta");
        answer = null;
      } else if (answer === idem) {
        alert("El l'origen no pot se igual que el destí");
        answer = null;
      } else {
        return answer;
      }
    } else {
      alert("Camp buit o massa curt");
      answer = null;
    }
  } while (answer === null);
}

function firstChartToUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function askTwoOptions(ask, optionA, optionB) {
  let answer;
  do {
    answer = prompt(ask);

    if (answer) {
      answer = answer.trim();
      if (answer.toLowerCase() === optionA) {
        answer = optionA;
      } else if (answer.toLowerCase() === optionB) {
        answer = optionB;
      } else if (answer === "") {
        alert("Camp buit");
      } else {
        alert(answer + " no es una opció correcta");
      }
    } else {
      alert("Camp buit");
    }
  } while (answer !== optionA && answer !== optionB);
  return answer;
}
