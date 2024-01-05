function racBit(prvo, operator, drugo = 0){
    if(operator == "&"){
        let result = "0b" + (prvo & drugo).toString(2);
        return result;
    }
    else if(operator == "|"){
        let result = "0b" + (prvo | drugo).toString(2);
        return result;
    }
    else if(operator == "^"){
        let result = "0b" + (prvo ^ drugo).toString(2);
        return result;
    }
    else if(operator == "~"){
        len = prvo.length-2
        result = "0b" + (~prvo >>> 0).toString(2);
        result = "0b" + result.substring((result.length) - len);
        return result;
    }
}

//console.log(racBit(27, "&", 13));

function vecRacBit(izraz){
    izraz = izraz.split(" ");

    for (i in izraz){
        if(izraz[i][0] == "0" || izraz[i][0] == "1"){
            izraz[i] = "0b" + izraz[i];
        }
        if(izraz[i][0] == "~"){
            num = "0b" + izraz[i].substring(1);
            izraz[i] = racBit(num, "~").toString(2);
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
    return result;
}

console.log(vecRacBit("~11011 | 10111 & 101"));
//Test
//console.log(eval("~11011 | 10111 & 101"));
//0b, 0o, 0x