const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

newUser = prompt("Introdueix el seu nom");
let allCost = 0;
let allScale = 0;
let lastFlightsTxt = "";

console.log(`Benvingut ${newUser}`);

flights.forEach((flights) => {
  let scaleTxt;

  if (flights.scale) {
    scaleTxt = " amb escales";
    allScale++;
  } else {
    scaleTxt = " sense escales";
  }
  console.log(
    `El vol amb origen ${flights.from}, i destí ${flights.to} te un cost de ${flights.cost}€${scaleTxt}`
  );

  allCost += flights.cost;
});

// flights.slice(-5).forEach(flights => {lastFlightsTxt += flights.to + ', '});
// al forEach com li dic que l'últim parametre em posi un punt?¿

for (i = 0; i < flights.slice(-5).length; i++) {
  if (i < flights.slice(-5).length - 1) {
    lastFlightsTxt += `${flights[i].to}, `;
  } else {
    lastFlightsTxt += flights[i].to;
  }
}

console.log(
  `${newUser} el cost mitjà del vols és de : ${(
    allCost / flights.length
  ).toFixed(
    2
  )}€ dels cuals ${allScale} fant escala i els últims destins del dia son : ${lastFlightsTxt}.`
);
