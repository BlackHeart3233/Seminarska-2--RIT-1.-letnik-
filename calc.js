//OSNOVNI
function Izracunaj() {
    let racun = document.getElementById("vnos").value;

    racun = racun.replace(/sqrt\s*\(\s*(.*?)\s*\)/g, (_, vsebina) => Math.sqrt(+(vsebina)));
    racun = racun.replace(/pow\s*\(\s*(.*?)\s*,\s*(.*?)\s*\)/g, (_, baza, eksponent) => Math.pow(+(baza), +(eksponent)));
  

    alert(racun);
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
/*
//PRETVORBA MED ŠTEVILSKIMI SISTEMI
//Za naret še, gumi za a,b,c,d,e,f
//Onemogočanje vpisovanja števil, ki niso možna v tem sistemu
let numSistem = ["0b", "0o", "", "0x"];
let numSistem2 = [2, 8, 10, 16];
let trenutniSistem = 2; 
let vrednosti = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
let trijeBiti = ["000", "001", "010", "011", "100", "101", "110", "111"];
let stirjeBiti = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"];

//DEC button
function toDecConversion(){ 
    if(numSistem2[trenutniSistem] == 10){
        return;
    }
    
    let stevilo = document.getElementById("vnos").value;
    let dolz = stevilo.length;
    let result = 0;
    for(let i = 0; i < dolz; i++){
        result += (vrednosti.indexOf(stevilo[i])) * Math.pow(numSistem2[trenutniSistem], dolz-i-1);//numSistem2[trenutniSistem] je stevilo 2, 8, 16
    }
    document.getElementById("vnos").value = result;
    trenutniSistem = 2;
}

//BIN button
function toBinConversion(){
    if(numSistem2[trenutniSistem] == 2){
        return;
    }

    let stevilo = document.getElementById("vnos").value;
    if(numSistem2[trenutniSistem] == 8){
        document.getElementById("vnos").value = octToBin(stevilo);
    }
    else if(numSistem2[trenutniSistem] == 10){
        document.getElementById("vnos").value = decConversion(stevilo, 2);
    }
    else if(numSistem2[trenutniSistem] == 16){
        document.getElementById("vnos").value = hexToBin(stevilo);
    }
    trenutniSistem = 0;
}

function octToBin(stevilo){
    let result = "";
    for(let i = 0; i < stevilo.length; i++){
        result += trijeBiti[stevilo[i]];
    }
    return result;
}

function hexToBin(stevilo){
    let result = "";
    for(let i = 0; i < stevilo.length; i++){
        result += stirjeBiti[vrednosti.indexOf(stevilo[i])];
    }
    return result;
}

function decConversion(stevilo, sistem){ // sistem je število 2, 8 ali 16
    let result = "";
    
    while(stevilo > 0){
        result = vrednosti[(stevilo % sistem)] + result;
        stevilo = Math.floor(stevilo/sistem);
    }
    return result;
}

//OCT button
function toOctConversion(){
    if(numSistem2[trenutniSistem] == 8){
        return;
    }

    let stevilo = document.getElementById("vnos").value;
    if(numSistem2[trenutniSistem] == 2){
        document.getElementById("vnos").value = binToOct(stevilo);
    }
    else if(numSistem2[trenutniSistem] == 10){
        document.getElementById("vnos").value = decConversion(stevilo, 8);
    }
    else if(numSistem2[trenutniSistem] == 16){
        return; //Ni bilo treba tega naret
    }
    trenutniSistem = 1;
}

function binToOct(stevilo){
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

//HEX button
function toHexConversion(){
    if(numSistem2[trenutniSistem] == 16){
        return;
    }

    let stevilo = document.getElementById("vnos").value;
    if(numSistem2[trenutniSistem] == 2){
        document.getElementById("vnos").value = binToHex(stevilo);
    }
    else if(numSistem2[trenutniSistem] == 8){
        return; //Ni bilo treba tega naret
    }
    else if(numSistem2[trenutniSistem] == 10){
        document.getElementById("vnos").value = decConversion(stevilo, 16);
    }
    trenutniSistem = 3;
}

function binToHex(stevilo){
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
            if(tmp == stirjeBiti[j]){
                result += vrednosti[j];
            }
        }
        i += 4;
    }

    return result;
}
*/