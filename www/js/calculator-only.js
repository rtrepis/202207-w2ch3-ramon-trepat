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
}while(askUser && numsCalc.length < 2);

if((numsCalc.length === 0) ){
    console.log('No es pot operar sense cap número');
}else if (numsCalc.length === 1){
    console.log('L\'arrel quadrada de ' + numsCalc[0] + ' és : ' +  Math.sqrt(numsCalc[0]).toFixed(2));
}else{
    let sum = numsCalc[0] + numsCalc[1];
    console.log ('La suma de ' + numsCalc[0] + ' i ' + numsCalc[1] + ' és : ' + sum);
    let rest = numsCalc[0] - numsCalc[1];
    console.log ('La resta de ' + numsCalc[0] + ' i ' + numsCalc[1] + ' és : '  + rest);
    let mult = numsCalc[0] * numsCalc[1];
    console.log ('La multiplicació de ' + numsCalc[0] + ' i ' + numsCalc[1] + ' és : ' + mult);
    let div = numsCalc[0] / numsCalc[1];
    console.log ('La divisió de ' + numsCalc[0] + ' i ' + numsCalc[1] + ' és : ' + div.toFixed(2));
};

// em costa molt la utilització de funcions ;
// aquest m'ha costat tot un dia. M'ha costat molt trobar resposta quant l'usuari possa molt espais o posa si convertia rapidament a numero hi havia mases 0;
// No se s'hi m'explicat massa be però he volgut fer aquets apunt per anar coneixent-me;