let numSistem = ["0b", "0o", "", "0x"];
let numSistem2 = [2, 8, 10, 16];
let trenutniSistem = 3; //samo pri testiranju


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

console.log(vecRacBit("15 | 12 & 13"));
console.log(vecRacBit("~a3b"));

//Test
//console.log(eval("~11011 | 10111 & 101"));
