/// / Master Variables ///

const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "a",
    answer: "arteria",
    status: 0,
    question:
      "CON LA A. Conducto por donde va la sangre desde el corazón a las demás partes del cuerpo.",
  },
  {
    letter: "a",
    answer: "ascua",
    status: 0,
    question: "CON LA A. Trozo de cualquier material ardiendo pero sin llama.",
  },

  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "b",
    answer: "bilis",
    status: 0,
    question:
      "CON LA B. Líquido amargo de color amarillo verdoso producido por el hígado y que ayuda a la digestión de los alimentos.",
  },
  {
    letter: "b",
    answer: "bitacora",
    status: 0,
    question:
      "CON LA B. En los barcos, especie de armario que está fijo en la cubierta y situado muy cerca del timón donde se pone la brújula.",
  },

  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "c",
    answer: "cicerone",
    status: 0,
    question:
      "CON LA C. Persona que sirve a otras de guía y les va enseñando y explicando lugares y cosas interesantes.",
  },
  {
    letter: "c",
    answer: "cubismo",
    status: 0,
    question:
      "CON LA C. Estilo de pintura que comenzó en Francia a principios de este siglo y que se caracteriza por representar figuras y objetos mediante formas geométricas.",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "d",
    answer: "diplomacia",
    status: 0,
    question:
      "CON LA D. Actividad que realiza un país para mantener buenas relaciones con el resto de países. ",
  },
  {
    letter: "d",
    answer: "dieresis",
    status: 0,
    question:
      "CON LA D. Signo ortográfico que se coloca encima de la u para indicar que esta letra ha de pronunciarse.",
  },

  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "e",
    answer: "equinoccio",
    status: 0,
    question:
      "CON LA E. Cada uno de los dos momentos del año en que, por estar el Sol sobre el ecuador, los días y las noches duran lo mismo en toda la Tierra.",
  },
  {
    letter: "e",
    answer: "estria",
    status: 0,
    question:
      "CON LA E. Línea que se forma en la piel cuando ésta se ha estirado excesivamente. ",
  },

  {
    letter: "f",
    answer: "fácil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "f",
    answer: "fisiologia",
    status: 0,
    question:
      "CON LA F. Ciencia que estudia las funciones de los órganos de los seres vivos.",
  },
  {
    letter: "f",
    answer: "fonema",
    status: 0,
    question: "CON LA F. Sonido de una letra.",
  },

  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "g",
    answer: "glaciacion",
    status: 0,
    question:
      "CON LA G. Cada una de las épocas, hace miles de años, en las que hacía mucho más frío que en la actualidad y gran parte de la Tierra estaba cubierta por hielo.",
  },
  {
    letter: "g",
    answer: "gaucho",
    status: 0,
    question:
      "CON LA G. Se dice de las personas que viven en las grandes llanuras de Argentina y Uruguay y llevan el ganado de un lado a otro.",
  },

  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "h",
    answer: "hinojo",
    status: 0,
    question:
      "CON LA H. Planta de flores amarillas que se usa como condimento, por el sabor de sus frutos parecido al del anís, y también en medicina porque ayuda a hacer la digestión.",
  },
  {
    letter: "h",
    answer: "himno",
    status: 0,
    question:
      "CON LA H. Poesía o composición musical en alabanza de alguien o algo, como la que se dedica a un país.",
  },

  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "i",
    answer: "ingenio",
    status: 0,
    question:
      "CON LA I. Capacidad para inventar cosas o para pensar y hablar con gracia.",
  },
  {
    letter: "i",
    answer: "iman",
    status: 0,
    question: "CON LA I. Mineral capaz de atraer el hierro u otros metales.",
  },

  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "j",
    answer: "jade",
    status: 0,
    question:
      "CON LA J. 	Mineral muy duro, de color verde o blanquecino, que se emplea en joyería y para hacer objetos de adorno.",
  },
  {
    letter: "j",
    answer: "jabato",
    status: 0,
    question: "CON LA J. Cría del jabalí.",
  },

  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "k",
    answer: "kamikaza",
    status: 0,
    question:
      "CON LA K. Piloto japonés que se lanzaba en su avión contra un barco u otro objetivo enemigo para destruirlo, aunque muriera al hacerlo.",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },

  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "l",
    answer: "lema",
    status: 0,
    question:
      "CON LA L. Frase que expresa la forma en que debe actuar una persona.",
  },
  {
    letter: "l",
    answer: "lombriz",
    status: 0,
    question:
      "CON LA L. Gusano muy largo de color rojizo que se alimenta de sustancias que hay en la tierra.",
  },

  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "m",
    answer: "mariñaque",
    status: 0,
    question:
      "CON LA M. Prenda rígida o almidonada, a veces con aros, que antiguamente llevaban las mujeres bajo la falda para darle vuelo.",
  },
  {
    letter: "m",
    answer: "mudejar",
    status: 0,
    question:
      "CON LA M. Nombre que se daba a los musulmanes que vivían en los reinos cristianos de la península ibérica.",
  },

  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "n",
    answer: "ninfa",
    status: 0,
    question:
      "CON LA N. En las leyendas mitológicas, diosa con forma de muchacha que vivía en los bosques, las fuentes o los ríos.",
  },
  {
    letter: "n",
    answer: "nogal",
    status: 0,
    question:
      "CON LA N. Árbol grande con la corteza lisa y de color gris cuyo fruto es la nuez.",
  },

  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "ñ",
    answer: "ñoño",
    status: 0,
    question: "CON LA Ñ. 	Cursi o demasiado delicado.",
  },
  {
    letter: "ñ",
    answer: "ñandu",
    status: 0,
    question:
      "CON LA Ñ. Ave parecida al avestruz, pero más pequeña y con tres dedos en cada pie.",
  },

  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "o",
    answer: "onomatopeya",
    status: 0,
    question:
      "CON LA O. Palabra que imita el sonido que hace un animal o una cosa.",
  },
  {
    letter: "o",
    answer: "ocre",
    status: 0,
    question:
      "CON LA O. Se dice del color que es una mezcla de amarillo y marrón.",
  },

  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "p",
    answer: "protocolo",
    status: 0,
    question:
      "CON LA P. Conjunto de reglas o ceremonias que hay que cumplir en los actos oficiales o solemnes. ",
  },
  {
    letter: "p",
    answer: "pabellon",
    status: 0,
    question:
      "CON LA P. Edificio que es parte de un conjunto, de otro edificio más grande, o que está muy cerca de él. ",
  },

  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  {
    letter: "q",
    answer: "quimera",
    status: 0,
    question:
      "CON LA Q. Cosa que, sin ser real, alguien la imagina como posible o verdadera.",
  },
  {
    letter: "q",
    answer: "quechua",
    status: 0,
    question:
      "CON LA Q. Pueblo indio que habita en Perú y que vivía allí antes del descubrimiento de América. ",
  },

  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "r",
    answer: "repisa",
    status: 0,
    question:
      "CON LA R. Tabla o elemento similar que se coloca contra la pared para poner en ella objetos.",
  },
  {
    letter: "r",
    answer: "remora",
    status: 0,
    question:
      "CON LA R. Pez marino que tiene una especie de ventosa en la cabeza con la que se fija a otros peces más grandes. ",
  },

  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "s",
    answer: "sotana",
    status: 0,
    question:
      "CON LA S. Traje negro y largo parecido a una túnica que llevan algunos curas y religiosos ",
  },
  {
    letter: "s",
    answer: "solsticio",
    status: 0,
    question:
      "CON LA S. Nombre de dos momentos del año que marcan el inicio del verano y el comienzo del invierno.",
  },

  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "t",
    answer: "troposfera",
    status: 0,
    question:
      "CON LA T. Capa de la atmósfera más cercana a la superficie de la Tierra, en la que tienen lugar los fenómenos del tiempo meteorológico.",
  },
  {
    letter: "t",
    answer: "testamento",
    status: 0,
    question:
      "CON LA T. Escrito o declaración de palabra en el que alguien dice lo que quiere que se haga después de su muerte, sobre todo con su dinero o sus pertenencias.",
  },

  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "u",
    answer: "urbanizacion",
    status: 0,
    question:
      "CON LA U.Conjunto de casas y edificios que suelen ser parecidos y donde hay tiendas, parques y otros espacios que necesitan las personas que allí viven.",
  },
  {
    letter: "u",
    answer: "utopia",
    status: 0,
    question:
      "CON LA U. Algo que es bueno y que deseamos pero que es imposible o muy difícil de realizar.",
  },

  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "v",
    answer: "visera",
    status: 0,
    question:
      "CON LA V. Parte hacia afuera que tienen las gorras por delante y que sirve para que el sol no nos haga daño en los ojos. ",
  },
  {
    letter: "v",
    answer: "vencejo",
    status: 0,
    question:
      "CON LA V. Pájaro de color casi siempre negro o pardo que tiene el pico delgado, las alas muy largas y la cola en forma de horquilla. Vuela muy rápido.",
  },

  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "w",
    answer: "whisky",
    status: 0,
    question:
      "CON LA W. Licor con mucho alcohol que se hace al fermentar la cebada o algunos otros cereales.",
  },
  {
    letter: "w",
    answer: "western",
    status: 0,
    question: "CON LA W. 	Película del oeste americano.",
  },

  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "x",
    answer: "xenofobia",
    status: 0,
    question: "CON LA X. Odio o antipatía hacia los extranjeros.",
  },
  {
    letter: "x",
    answer: "xilografia",
    status: 0,
    question:
      "CON LA X. Manera de hacer grabados sobre madera, dejando vacías las partes que deben quedar blancas en el dibujo. ",
  },

  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "y",
    answer: "yak",
    status: 0,
    question:
      "CON LA Y. Mamífero de gran tamaño parecido a un toro, pero con el cuero cubierto de un abundante pelo que lo protege del frío. ",
  },
  {
    letter: "y",
    answer: "yodo",
    status: 0,
    question:
      "CON LA Y. Elemento químico de color oscuro que se encuentra en el suelo en forma de sales, así como en las algas y otros animales marinos.",
  },

  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
  {
    letter: "z",
    answer: "zarzal",
    status: 0,
    question: "CON LA Z. Lugar donde hay muchas zarzas. ",
  },
  {
    letter: "z",
    answer: "zocalo",
    status: 0,
    question:
      "CON LA Z. Banda más o menos ancha, cubierta de otro material o pintada, que hay en la parte baja de las paredes de una habitación.",
  },
];

const playRosco = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let playLetter = 0;

let questionsPlay = [];

const ranking = [
  { name: "Paul", rights: 10, wrong: 2 },
  { name: "Margaret", rights: 21, wrong: 2 },
  { name: "John", rights: 17, wrong: 4 },
  { name: "Scarlett", rights: 21, wrong: 6 },
];

const newPlayer = {
  name: "Sin nombre",
  rights: 0,
  wrong: 0,
};

let secons = 300;
let crono; // setInterval();

/// / sequens play ///

const goStar = () => {
  askPlayerName();
  questionsPlay = filterQuestionsPlay();
};

const askPlayerName = () => {
  const container = document.getElementById("containter");

  container.innerHTML =
    '<label id="nameAsk">Vamos a conocer el concursante de hoy:</label>';
  container.innerHTML +=
    '<input type="text" id="nameAnswer" value="Sin nombre">';
  container.innerHTML +=
    '<input type="button" id="nameOk" value="OK" onclick="answerName()" >';

  document.getElementById("nameAnswer").select();

  document.getElementById("nameAnswer").onkeydown = (event) => {
    if (event.key == "Enter") {
      answerName();
    }
  };

  // window.addEventListener("keydown", function(event) {if(event.key == 'Enter' ){answerName()}}, true);
};

const answerName = () => {
  playerName = document.getElementById("nameAnswer").value;

  if (!playerName) {
    return askPlayerName();
  }

  newPlayer.name = firstChartToUpperCase(playerName);

  showInstruccions();
};

const showInstruccions = () => {
  const container = document.getElementById("containter");

  container.innerHTML = '<label id="recuerda"> Recuerda: </label><br>';
  container.innerHTML +=
    '<label id="instrucciones"> Pasapalabra saltara la letra para la siguiente ronda y si quieres finalizar el juego escribe END. Preparado !!</label>';
  container.innerHTML +=
    '<input type="button" id="nameOk" value="GO" onclick="newRound()" >';
};

const newRound = (cronoRun) => {
  if (!cronoRun) {
    cronoState(true);
  }

  if (newPlayer.rights + newPlayer.wrong < questionsPlay.length) {
    const letter = questionsPlay
      .filter((question) => question.letter === playRosco[playLetter])
      .pop();

    if (!letter.status) {
      questionShow(letter);
    } else {
      newPlayLetter();
      newRound(true);
    }
  } else {
    byebye(true);
  }
};

const questionShow = (letter) => {
  console.log(letter.answer);

  const container = document.getElementById("containter");

  container.innerHTML = `<label id="question">${letter.question}</label>`;
  container.innerHTML += '<input type="text" id="answer" value="Pasapalabra">';
  container.innerHTML +=
    '<input type="button" id="okAnswer" value="OK" onclick="answerOk()" >';

  document.getElementById("answer").select();

  document.getElementById("answer").onkeyup = (event) => {
    if (event.key == "Enter") {
      answerOk();
    }
  };
};

const answerOk = () => {
  // console.log (playRosco[playLetter]);

  const answer = document.getElementById("answer").value.toLowerCase();

  switch (answer) {
    case "end":
      byebye(false);
      break;
    case questionsPlay[playLetter].answer:
      questionsPlay[playLetter].status = 1;
      newPlayer.rights++;
      document.getElementById(playRosco[playLetter]).style.backgroundColor =
        "green";
      isCorrectShow(true);
      newPlayLetter();
      break;
    case "pasapalabra":
      newPlayLetter();
      newRound(true);
      break;
    default:
      questionsPlay[playLetter].status = 2;
      newPlayer.wrong++;
      document.getElementById(playRosco[playLetter]).style.backgroundColor =
        "red";
      isCorrectShow(false);
      newPlayLetter();
  }

  // console.log(questionsPlay)
};

const isCorrectShow = (is) => {
  const container = document.getElementById("containter");

  cronoState(false);

  if (is) {
    container.innerHTML = '<label id="correcto">Correcto !!</label>';
  } else {
    container.innerHTML = '<label id="incorrecto">Incorrecto !!</label>';
    container.innerHTML += `<label id="answerCorrect"> la palabra correcta era:</label>`;
    container.innerHTML += `<label id="answerCorrectUp">${firstChartToUpperCase(
      questionsPlay[playLetter].answer
    )}</label>`;
  }

  container.innerHTML += `<input type="button" id="nameOk" value="GO" onclick="newRound()" >`;
};

const newPlayLetter = () => {
  playLetter + 1 < playRosco.length ? playLetter++ : (playLetter = 0);
};

const byebye = (finished) => {
  cronoState(false);

  if (secons === 0) {
    document.getElementById("crono").style.backgroundColor = "red";
  }

  const container = document.getElementById("containter");

  container.innerHTML = `<label id="finish">${newPlayer.name} <br> has acertado ${newPlayer.rights} letras <br> y has fallado ${newPlayer.wrong} letras </label>`;

  if (finished) {
    container.innerHTML +=
      '<input type="button" id="rankingOk" value="Ranking" onclick="showRanking()" >';
  } else {
    container.innerHTML += `<label id="byby">Bye Baye !! <br> Hasta pronto, ${newPlayer.name}. </label>`;
  }
};

const showRanking = () => {
  ranking.push(newPlayer);

  const container = document.getElementById("containter");

  container.innerHTML = `<label id="ranking"><strng>Ranking:</strong></label><br><br>`;

  ranking.sort((a, b) => b.rights - a.rights);

  // container.innerHTML += `<ol>`
  ranking.forEach(
    (player, index) =>
      (container.innerHTML += `<p>${index + 1}º ${player.name} con ${
        player.rights
      } aciertos</p>`)
  );
  // container.innerHTML += `</ol>`
};

/// / utilitis ///

const makeRoscoHTML = () => {
  const centerX = 300;
  const centerY = 300;

  let angle = Math.PI;
  const alingSteps = (2 * Math.PI) / playRosco.length;
  const radius = 250;

  playRosco.forEach((letter) => {
    const posX = Math.round(centerX + radius * Math.cos(angle));
    const posY = Math.round(centerY + radius * Math.sin(angle));

    document.getElementById(
      "roscoAll"
    ).innerHTML += `<div id="${letter}">${letter.toUpperCase()}</div>`;
    document.getElementById(letter).style.top = `${Math.round(posX)}px`;
    document.getElementById(letter).style.left = `${Math.round(posY)}px`;

    angle -= alingSteps;
  });
};

const newNumberRandom = (n) => Math.floor(Math.random() * n);

const filterQuestionsPlay = () => {
  const selectQuestionsPlay = [];

  playRosco.forEach((letterRosco) => {
    const filterQuestion = questions.filter(
      (letter) => letter.letter == letterRosco
    );

    const selecIndex = newNumberRandom(filterQuestion.length);

    selectQuestionsPlay.push(
      filterQuestion.slice(selecIndex, selecIndex + 1).pop()
    );
  });

  return selectQuestionsPlay;
};

const cronoState = (state) => {
  state ? (crono = setInterval(displaySecons, 1000)) : clearInterval(crono);
};

const displaySecons = () => {
  document.getElementById("crono").innerHTML = secons;

  secons === 0 ? byebye(false) : secons--;
};

const firstChartToUpperCase = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
