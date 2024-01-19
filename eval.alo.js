
function NamestoEval(test){
//var test="2 + ( 3 * ( 8 - 4  ) ) ="
var stevilke ="";
var operatorji_brez_zaklepaja ="";
var zaklepaji =0;
var stevec = 0;
var prej_stevilo = false;
var operatoriji_po_urejanu ="";
var stevec_presledkov=0;

while (test[stevec] != "="){
    if (test[stevec] == " "){

        if(stevec_presledkov <2){
            if(prej_stevilo == true){
                stevilke += " ";
                stevec_presledkov +=1;
            }else{
                operatorji_brez_zaklepaja += " ";
                stevec_presledkov +=1;
            }}
    }else if (test[stevec] == ")"){
        zaklepaji +=1;
        stevec_presledkov =0;

    }else if(isNaN(test[stevec])){
        operatorji_brez_zaklepaja += test[stevec];
        prej_stevilo = false;
        stevec_presledkov =0;
    }else{
        stevilke += test[stevec];
        prej_stevilo = true;
        stevec_presledkov =0;
    }
    stevec +=1;
    
}
stevec=0;
let dolzina_brez_oklepaja = operatorji_brez_zaklepaja.length;
while (zaklepaji != 0 || stevec < dolzina_brez_oklepaja){
    if(operatorji_brez_zaklepaja[stevec] != "("){
        operatoriji_po_urejanu += operatorji_brez_zaklepaja[stevec]
        
    }else{
      zaklepaji -=1;
    }
    stevec +=1;
}


let array_operatoriji = operatoriji_po_urejanu.split(" ").filter(Boolean).reverse();
let array_stevilke = stevilke.split(" ").filter(Boolean).reverse();


while (array_operatoriji.length >0){
    let stevilo1= +(array_stevilke[1]);
    let stevilo2 = +(array_stevilke[0]);
    console.log(stevilo1)
    console.log(array_operatoriji[0])
    console.log(stevilo2)


    let racun = 0;
    if(array_operatoriji[0] == "+"){
        racun  = stevilo1 + stevilo2;
    }else if(array_operatoriji[0] == "-"){
        racun = stevilo1 - stevilo2;
    }else if(array_operatoriji[0] == "/"){
        racun = stevilo1/stevilo2;
    }else if(array_operatoriji[0] == "*"){
        racun = stevilo1*stevilo2;
    }
    console.log("izracun je:"+racun)
    array_operatoriji.shift();
    array_stevilke.shift();
    array_stevilke[0] = racun;
}

return array_stevilke[0];
}
