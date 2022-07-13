calculatorPro();


function calculatorPro() {
    let askUser;
    let numsCalc = [];
   
    do{
        askUser = prompt('Introdueix els valors a operar o presiona "esc" per finalitzar');
        if(askUser){  // si no faig aquest if --> trim em fa error al ser un camp buit
            if (askUser.trim()=== ''){
                alert ("Camp buït");
            }else if(!isNaN(askUser)){
                numsCalc.push(+askUser);
            }else{
                alert ('No es un valor');
            };
        };
    }while(askUser);

    if(numsCalc.length === 1){
        console.log('L\'arrel quadrada de ' + numsCalc[0] + ' és : ' +  Math.sqrt(numsCalc[0]).toFixed(2));
    }
    else if (numsCalc.length > 1){
        print(numsCalc);
    }else{
        console.log('Impossible operar sense números');
        askCalAgain();
    }
};


function print(numsCalc) {
    let sumOut = 'El resultat de la suma de ';
    let resOut = 'El resultat de la resta de ';
    let mulOut = 'El resultat de la multiplicació de ';
    let divOut = 'El resultat de la divisió de ';

    let sumTotal = numsCalc[0];
    let resTotal = numsCalc[0];
    let mulTotal = numsCalc[0];
    let divTotal = numsCalc[0];
    
    for ( i = 1 ; i < numsCalc.length ; i++){
        sumTotal += numsCalc[i];
        resTotal -= numsCalc[i];
        mulTotal *= numsCalc[i];
        divTotal /= numsCalc[i];
    };

    for ( i = 0 ; i < numsCalc.length ; i++){      
        if (i < numsCalc.length - 1){
            sumOut += numsCalc[i] + ' + ';
            resOut += numsCalc[i] + ' - ';
            mulOut += numsCalc[i] + ' * ';
            divOut += numsCalc[i] + ' / ';
        }else {
            sumOut += numsCalc[i] + ' és igual a : ' + sumTotal ; 
            resOut += numsCalc[i] + ' és igual a : ' + resTotal ; 
            mulOut += numsCalc[i] + ' és igual a : ' + mulTotal ; 
            divOut += numsCalc[i] + ' és igual a : ' + divTotal.toFixed(2) ; 
        };
    };

    console.log(sumOut);
    console.log(resOut);
    console.log(mulOut);
    console.log(divOut);

    askCalAgain();
};

function askCalAgain(){
    if(confirm('Voleu fer una altra operació?')){
        calculatorPro();
    }else{
        console.log('Bye, Bye !!')
    }    
};