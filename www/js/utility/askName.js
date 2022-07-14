const askName = function () {
  let newName = prompt("Introdueix el seu nom");
  newName ? (newName = newName.trim()) : (newName = "NoName");
  return newName;
};
