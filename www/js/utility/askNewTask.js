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
