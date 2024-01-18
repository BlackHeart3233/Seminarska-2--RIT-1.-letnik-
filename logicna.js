function racBit(prvo, operator, drugo = 0){
    let result = "";
    if(operator == "AND"){
        result += (prvo & drugo);
        return result;
    }
    else if(operator == "OR"){
        result += (prvo | drugo);
        return result;
    }
    else if(operator == "XOR"){
        result += (prvo ^ drugo);
        return result;
    }
    else if(operator == "NOT"){
        len = prvo.length;
        for(let i = 0; i < len; i++){
            if(prvo[i] == 1){
                result += "0";
            }
            else if(prvo[i] == 0){
                result += "1";
            }
        }
        if(drugo != undefined){
            let len2 = drugo.length;
            let result2 = "";
            for(let i = 0; i < len2; i++){
                if(drugo[i] == 1){
                    result2 += "0";
                }
                else if(drugo[i] == 0){
                    result2 += "1";
                }
            }
            document.getElementById("vnos_stevila3").value = result2;
        }
        return result;
    }
}

function decConversion(stevilo, sistem){ // sistem je število 2, 8 ali 16, kar predstavlja v kateri sistem se pretvori
    let result = "";
    
    while(stevilo > 0){
        result = (stevilo % sistem) + result;
        stevilo = Math.floor(stevilo/sistem);
    }
    return result;
}

function izrazLogicna(){
    var levoStevilo = document.getElementById("vnos_stevila2").value;
    var logicniOperator = document.getElementById("Logicni").value;
    var desnoStevilo = document.getElementById("vnos_stevila3").value;
    var result = "";

    if(logicniOperator != "NOT"){
        levoStevilo = "0b" + levoStevilo;
        desnoStevilo = "0b" + desnoStevilo;
    }
    
    result = racBit(levoStevilo, logicniOperator, desnoStevilo);
    if(logicniOperator != "NOT"){
        result = decConversion(result, 2);
        document.getElementById("vnos_stevila3").value = "";
    }
    document.getElementById("vnos_stevila2").value = result;
}
//alert(0b1001 & 0b1101);

//Testiranje
//console.log(vecRacBit("15 | 12 & 13"));
//console.log(vecRacBit("~a3b"));
//console.log(eval("~11011 | 10111 & 101"));