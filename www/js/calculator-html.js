const start = () => {
  const screenTr = document.getElementById("screen");
  // let screenCalculator = screenTr.innerHTML;
  const oneTd = document.getElementById("one");
  // const one = oneTd.innerHTML
  const twoTd = document.getElementById("two");
  const threeTd = document.getElementById("three");
  const fourTd = document.getElementById("four");
  const fiveTd = document.getElementById("five");
  const sixTd = document.getElementById("six");
  const sevenTd = document.getElementById("seven");
  const eightTd = document.getElementById("eight");
  const nineTd = document.getElementById("nine");
  const zeroTd = document.getElementById("zero");
  const commaTd = document.getElementById("comma");
  const divideTd = document.getElementById("divide");
  const multiplyTd = document.getElementById("multiply");
  const substracTd = document.getElementById("substrac");
  const addTd = document.getElementById("add");
  const equalTd = document.getElementById("equal");
  const acTd = document.getElementById("ac");
  const cTd = document.getElementById("c");

  let operatorA;
  let operatorB;
  let isClean = true;
  let operateEcuation;
  const kilo = 0;

  oneTd.onclick = () => {
    clickNumber(oneTd.innerHTML);
  };
  twoTd.onclick = () => {
    clickNumber(twoTd.innerHTML);
  };
  threeTd.onclick = () => {
    clickNumber(threeTd.innerHTML);
  };
  fourTd.onclick = () => {
    clickNumber(fourTd.innerHTML);
  };
  fiveTd.onclick = () => {
    clickNumber(fiveTd.innerHTML);
  };
  sixTd.onclick = () => {
    clickNumber(sixTd.innerHTML);
  };
  sevenTd.onclick = () => {
    clickNumber(sevenTd.innerHTML);
  };
  eightTd.onclick = () => {
    clickNumber(eightTd.innerHTML);
  };
  nineTd.onclick = () => {
    clickNumber(nineTd.innerHTML);
  };
  zeroTd.onclick = () => {
    if (screenTr.innerHTML > 0) {
      clickNumber(zeroTd.innerHTML);
    }
  };
  commaTd.onclick = () => {
    if (screenTr.innerHTML.indexOf(",") > 0) {
    } else {
      clickNumber(commaTd.innerHTML);
    }
  };

  divideTd.onclick = () => {
    clickOperator("divide", divideTd);
  };
  multiplyTd.onclick = () => {
    clickOperator("multiply", multiplyTd);
  };
  substracTd.onclick = () => {
    clickOperator("substrac", substracTd);
  };
  addTd.onclick = () => {
    clickOperator("add", addTd);
  };

  equalTd.onclick = () => {
    operatorB = screenTr.innerHTML;
    operate(operatorA, operatorB, operateEcuation);
    cleanOperatorEquaionAndStyle();
  };

  acTd.onclick = () => {
    screenTr.innerHTML = "0";
    cleanOperatorEquaionAndStyle();
  };

  cTd.onclick = () => {
    screenTr.innerHTML = "0";
    isClean = true;
  };

  const clickNumber = (numberIs) => {
    if (isClean) {
      screenTr.innerHTML = numberIs;
      isClean = false;
    } else if (screenTr.innerHTML.length < 11) {
      screenTr.innerHTML += numberIs;
      isClean = false;
    }
  };

  const clickOperator = (clikedEquation, element) => {
    if (operatorA) {
      operatorB = screenTr.innerHTML;
      operateEcuation = clikedEquation;
      operate(operatorA, operatorB, operateEcuation);
    } else {
      operatorA = screenTr.innerHTML;
      element.style.backgroundColor = "#ffdab5";
      isClean = true;
      operateEcuation = clikedEquation;
    }
  };

  const cleanOperatorEquaionAndStyle = () => {
    divideTd.style.backgroundColor = "#ff8700";
    multiplyTd.style.backgroundColor = "#ff8700";
    substracTd.style.backgroundColor = "#ff8700";
    addTd.style.backgroundColor = "#ff8700";

    isClean = true;
    operatorA = undefined;
    operatorB = undefined;
  };

  const operate = (a, b, equation) => {
    a = a.replace(",", ".");
    a = parseFloat(a);

    b = b.replace(",", ".");
    b = parseFloat(b);

    switch (equation) {
      case "divide":
        operatorA = a / b;
        operatorB = undefined;
        screenTr.innerHTML = precise(operatorA);
        //                console.log(operatorA);
        break;
      case "multiply":
        operatorA = a * b;
        operatorB = undefined;
        screenTr.innerHTML = precise(operatorA);
        break;
      case "substrac":
        operatorA = a - b;
        operatorB = undefined;
        screenTr.innerHTML = precise(operatorA);
        break;
      case "add":
        operatorA = a + b;
        operatorB = undefined;
        screenTr.innerHTML = precise(operatorA);
        break;
    }
  };

  const precise = (x) => {
    x = x.toPrecision(6).toString();

    while (x.slice(-1) === "0" || x.slice(-1) === ".") {
      x = x.slice(0, -1);
    }

    return x.replace(".", ",");
  };
};
