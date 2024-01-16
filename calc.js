//OSNOVNI
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

function IzbrisiEno(){
    let vnos = document.getElementById("vnos").value;
    document.getElementById("vnos").value = vnos.slice(0, -1);
}

//PRETVORBA MED ŠTEVILSKIMI SISTEMI

let numSistem = ["0b", "0o", "", "0x"];
let numSistem2 = [2, 8, 10, 16];
let trenutniSistem = 1; 

function decConversion(stevilo, sistem){ // sistem je število 2, 8 ali 16
    let result = "";
    let vrednosti = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    while(stevilo > 0){
        result = vrednosti[(stevilo % sistem)] + result;
        stevilo = Math.floor(stevilo/sistem);
    }
    return result;
}

function binToOct(stevilo){
    let trijeBiti = ["000", "001", "010", "011", "100", "101", "110", "111"];
    stevilo = stevilo.toString();
    if(stevilo.length % 3 == 1){
        stevilo = "00" + stevilo;
    }
    else if(stevilo.length % 3 == 2){
        stevilo = "0" + stevilo;
    }

    let dolz = stevilo.length
    let i = 0
    let result = "";
    while(i < dolz){
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

function binToHex(stevilo){
    let strijeBiti = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"];
    let vrednosti = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    if(stevilo.length % 4 == 1){
        stevilo = "000" + stevilo;
    }
    else if(stevilo.length % 4 == 2){
        stevilo = "00" + stevilo;
    }
    else if(stevilo.length % 4 == 3){
        stevilo = "0" + stevilo;
    }

    let dolz = stevilo.length
    let i = 0
    let result = "";
    while(i < dolz){
        let tmp = stevilo.substring(i, i+4);
        for(let j = 0; j < 16; j++){
            if(tmp == strijeBiti[j]){
                result += vrednosti[j];
            }
        }
        i += 4;
    }

    return result;
}

function toDecConversion(){ 
    if(numSistem2[trenutniSistem] == 10){
        return;
    }
    
    let stevilo = document.getElementById("vnos").value;
    let dolz = stevilo.length;
    let vrednosti = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let result = 0;
    for(let i = 0; i < dolz; i++){
        result += (vrednosti.indexOf(stevilo[i])) * Math.pow(numSistem2[trenutniSistem], dolz-i-1);//numSistem2[trenutniSistem] je stevilo 2, 8, 16
    }
    document.getElementById("vnos").value = result;
    trenutniSistem = 2;
}

//Manjka octToBin, hexToBin

//LOGICNI OPERATORJI



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

//Testiranje
//console.log(vecRacBit("15 | 12 & 13"));
//console.log(vecRacBit("~a3b"));
//console.log(eval("~11011 | 10111 & 101"));
