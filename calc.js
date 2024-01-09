//Osnovni
function Izracunaj() {
    let racun = document.getElementById("vnos").value;

    racun = racun.replace(/sqrt\s*\(\s*(.*?)\s*\)/g, (_, vsebina) => Math.sqrt(eval(vsebina)));
    racun = racun.replace(/pow\s*\(\s*(.*?)\s*,\s*(.*?)\s*\)/g, (_, baza, eksponent) => Math.pow(eval(baza), eval(eksponent)));
  
    document.getElementById("vnos").value = eval(racun);
}
  
function DodamVDisplay(vnos){
    document.getElementById("vnos").value += vnos;

}

function Izbrisi(){
    document.getElementById("vnos").value = "";
}

//PRETVORBA MED ŠTEVILSKIMI SISTEMI
function decToBin(stevilo){
    let result = "";
    while(stevilo > 0){
        if(stevilo % 2 == 1){
            result = "1" + result;
        }
        else if(stevilo % 2 == 0){
            result = "0" + result;
        }
        stevilo = Math.floor(stevilo/2);
    }
    return result;
}

function binToOct(stevilo){
    let trijeBiti = ["000", "001", "010", "011", "100", "101", "110", "111"];
    stevilo = stevilo.toString();
    if(stevilo.length % 3 == 1){
        stevilo = "00" + stevilo;
        console.log("a");
    }
    else if(stevilo.length % 3 == 2){
        stevilo = "0" + stevilo;
        console.log("b");
        console.log(stevilo);
    }

    let dolz = stevilo.length
    let i = 0
    let result = "";
    while(i <= dolz){
        let tmp = stevilo.substring(i, i+3);
        for(let j = 0; j < 8; j++){
            if(tmp == trijeBiti[j]){
                result += j;
            }
        }
        i += 3;
    }

    return result;
}

function IzbrisiEno(){
     let vnos = document.getElementById("vnos").value;
     document.getElementById("vnos").value = vnos.slice(0, -1);
}

//LOGICNI OPERATORJI

let numSistem = ["0b", "0o", "", "0x"];
let numSistem2 = [2, 8, 10, 16];
let trenutniSistem = 3; //samo pri testiranju

//Računanje posameznih operatorjev
function racBit(prvo, operator, drugo = 0){
    if(operator == "&"){
        let result = numSistem[trenutniSistem] + (prvo & drugo).toString(numSistem2[trenutniSistem]); //Zamenjaj z lastno funkcijo za pretvorbo
        return result;
    }
    else if(operator == "|"){
        let result = numSistem[trenutniSistem] + (prvo | drugo).toString(numSistem2[trenutniSistem]);
        return result;
    }
    else if(operator == "^"){
        let result = numSistem[trenutniSistem] + (prvo ^ drugo).toString(numSistem2[trenutniSistem]);
        return result;
    }
    else if(operator == "~"){
        len = prvo.length;
        if(trenutniSistem != 2)
            len -= 2;
        result = numSistem[trenutniSistem] + (~prvo >>> 0).toString(numSistem2[trenutniSistem]);
        result = numSistem[trenutniSistem] + result.substring((result.length) - len);
        return result;
    }
}

//Obravnava celotnih izrazov
function vecRacBit(izraz){
    izraz = izraz.split(" ");

    for (i in izraz){
        if(izraz[i][0] != "~" && izraz[i][0] != "&" && izraz[i][0] != "|" && izraz[i][0] != "^"){
            izraz[i] = numSistem[trenutniSistem] + izraz[i];
        }
        if(izraz[i][0] == "~"){
            num = numSistem[trenutniSistem] + izraz[i].substring(1);
            izraz[i] = racBit(num, "~").toString(numSistem2[trenutniSistem]);
        }
    }

    let operator = ["&", "|", "^"];
    for(let j = 0; j < 3; j++){
        for(let i = 0; i < izraz.length; i++){
            if (izraz[i] == operator[j]){
                let result = racBit(Number(izraz[i-1]), operator[j], Number(izraz[i+1]));
                izraz.splice(i-1, 3, result);
                i = 0;
            }
            if (izraz.length <= 1){
                break;
            }
        }
    }

    let result = "";
    for(let i = 0; i < izraz.length; i++){
        result += izraz[i];
    }
    if(trenutniSistem != 2)
        result = result.substring(2);
    return result;
}

//Testiranje
//console.log(vecRacBit("15 | 12 & 13"));
//console.log(vecRacBit("~a3b"));
//console.log(eval("~11011 | 10111 & 101"));
