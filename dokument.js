//import { Rezultat} from './pretvorbe.js';
/*remove everything after*/

 function Rezultat(BeremIzDatoteke,IzSistema,VnosStevila,VSistem) {

    if (BeremIzDatoteke == "false"){
        var IzSistema = document.getElementById("IzSistema").value;
        var VSistem = document.getElementById("VSistem").value;
        var VnosStevila = document.getElementById("vnos_stevila1").value
        //alert("im here")
    } 
    //alert(IzSistema);
    //alert(VSistem);
    //alert(VnosStevila);


    var Stevilo_v_sistem;
    if(IzSistema == "BIN"){
        Stevilo_v_sistem = BIN(VSistem, VnosStevila);
    }else if(IzSistema == "DEC"){
        Stevilo_v_sistem = DEC(VSistem, VnosStevila);
    }else if(IzSistema == "OCT"){
        Stevilo_v_sistem = OCT(VSistem, VnosStevila);
    }else if(IzSistema == "HEX"){
        VnosStevila = VnosStevila.toUpperCase();
        Stevilo_v_sistem = HEX(VSistem, VnosStevila);
    }

    if(BeremIzDatoteke != "false"){
        return Stevilo_v_sistem;
    }else{
        var KamVpisem = document.getElementById("KamIzpis").value;
        document.getElementById(KamVpisem).value = Stevilo_v_sistem;
    }
}

 function  IzDECvBIN(VnosStevila){
    var Stevilo_v_sistem ="";
    let zacasno_st = 0;
    let ostanek;
    let novo_stevilo = +(VnosStevila);
    list=["0","1"];
    while (novo_stevilo != 0){
        ostanek = novo_stevilo%2;
        if(ostanek == list[0]){
            Stevilo_v_sistem = list[0]+Stevilo_v_sistem;
        }else{
            Stevilo_v_sistem = list[1]+Stevilo_v_sistem;
        }
        zacasno_st = novo_stevilo/2;
        novo_stevilo = zacasno_st | 0;

    }
    return Stevilo_v_sistem

}


  function IzBINvHEX(VnosStevila){
            let stevec = 1;
            var Stevilo_v_sistem = "";
            let stejem_stevilo = 0;
            let dolzina_stevila = VnosStevila.length;
            let stevec_spremembe = 0;
            let list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
            
            for (let i = dolzina_stevila - 1; i >= 0; i--) {
                let branje_stevila = VnosStevila[i];
            
                if (branje_stevila === "1") {
                    stejem_stevilo += stevec;
                }
            
                stevec *= 2;
                stevec_spremembe += 1;
            
                if (stevec_spremembe === 4 || i === 0) {
                    stevec_spremembe = 0;
                    stevec = 1;
                    Stevilo_v_sistem = list[stejem_stevilo] + Stevilo_v_sistem;
                    stejem_stevilo = 0;
                }
            }
            return Stevilo_v_sistem;
}

  function IzBINvOCT(VnosStevila){
    let stevec = 1;
    var Stevilo_v_sistem = "";
    let stejem_stevilo = 0;
    let dolzina_stevila = VnosStevila.length;
    let stevec_spremembe = 0;
    let list = ["0", "1", "2", "3", "4", "5", "6", "7"];
    
    for (let i = dolzina_stevila - 1; i >= 0; i--) {
        let branje_stevila = VnosStevila[i];
        if (branje_stevila == "1") {
            stejem_stevilo += stevec;
        }
        stevec *= 2;
        stevec_spremembe += 1;
        if (stevec_spremembe == 3) {
            stevec_spremembe = 0;
            stevec = 1;
            for (let l = 0; l < 8; l++) {
                if (list[l] == stejem_stevilo) {
                    Stevilo_v_sistem = list[l] + Stevilo_v_sistem;
                }
            }
            stejem_stevilo = 0;
        }
    }
    if (stejem_stevilo != 0) {
        Stevilo_v_sistem = stejem_stevilo + Stevilo_v_sistem;
    }
    return Stevilo_v_sistem;   

}

  function IzHEXvBIN(VnosStevila){
    let Stevilo_v_sistem ="";
    let dolzina_stevila = VnosStevila.length;
    let list = [["0","0000"], ["1","0001"], ["2","0010"], ["3","0011"], ["4","0100"], ["5","0101"], ["6","0110"] ,["7","0111"], ["8","1000"], ["9","1001"], ["A","1010"], ["B","1011"], ["C","1100"], ["D","1101"], ["E","1110"], ["F","1111"]];
            
    for (let i = dolzina_stevila - 1; i >= 0; i--) {
        let branje_stevila = VnosStevila[i];
        for(let l = 0; l<15;l++){
            if(branje_stevila === list[l][0]){
                Stevilo_v_sistem = list[l][1]+Stevilo_v_sistem;
            }
        }
}
return Stevilo_v_sistem
}

  function IzOCTvBIN(VnosStevila){
    var list = [[0, "000"], [1, "001"], [2, "010"], [3, "011"], [4, "100"], [5, "101"], [6, "110"], [7, "111"]];
    var dolzina_stevila = VnosStevila.length;
    var Stevilo_v_sistem = "";

    for (let i = dolzina_stevila - 1; i >= 0; i--) {
        let branje_stevila = parseInt(VnosStevila[i], 10); 
        for (let l = 0; l < 8; l++) {
            if (branje_stevila === list[l][0]) {
                Stevilo_v_sistem = list[l][1] + Stevilo_v_sistem;
            }
        }
    }
    Stevilo_v_sistem = Stevilo_v_sistem.replace(/^0+/, '');
    return Stevilo_v_sistem;
}

  function IzBINvDEC(VnosStevila){
    let stevec = 1;
    var Stevilo_v_sistem = 0;
    let dolzina_stevila = VnosStevila.length;

    for (let i = dolzina_stevila - 1; i >= 0; i--) {
        let branje_stevila = VnosStevila[i];
        if (branje_stevila === "1") {
            Stevilo_v_sistem += stevec;
        }
        stevec *= 2;
    }
    return Stevilo_v_sistem
}

  function BIN(VSistem,VnosStevila) {
    if(VSistem == "DEC"){
        var Stevilo_v_sistem = IzBINvDEC(VnosStevila);
    }else if(VSistem == "OCT"){
        var Stevilo_v_sistem = IzBINvOCT(VnosStevila);
    }else if(VSistem == "HEX"){
        var Stevilo_v_sistem = IzBINvHEX(VnosStevila)
    }   
    return Stevilo_v_sistem;
}
  function HEX(VSistem,VnosStevila) {    
    if(VSistem == "DEC"){
        var Stevilo_v_sistem = IzHEXvBIN(VnosStevila);
        Stevilo_v_sistem = IzBINvDEC(Stevilo_v_sistem);
    }else if( VSistem == "BIN"){
     var Stevilo_v_sistem = IzHEXvBIN(VnosStevila)
    }else if(VSistem == "OCT"){
        let bin_stevilo = IzHEXvBIN(VnosStevila)
        var Stevilo_v_sistem = IzBINvOCT(bin_stevilo);
        Stevilo_v_sistem = Stevilo_v_sistem.replace(/^0+/, '');
    }
    return Stevilo_v_sistem;
}

  function OCT(VSistem,VnosStevila){
    if( VSistem == "DEC"){
        var Stevilo_v_sistem = IzOCTvBIN(VnosStevila);
        Stevilo_v_sistem = IzBINvDEC(Stevilo_v_sistem);
    }else if(VSistem == "BIN"){
        var Stevilo_v_sistem = IzOCTvBIN(VnosStevila);
    }else if(VSistem =="HEX"){
        var Stevilo_v_sistem = IzOCTvBIN(VnosStevila);
        Stevilo_v_sistem = IzBINvHEX(Stevilo_v_sistem)
    }
    return Stevilo_v_sistem;
}

  function DEC(VSistem,VnosStevila){
    if(VSistem =="BIN"){
       var Stevilo_v_sistem = IzDECvBIN(VnosStevila);
    }else if(VSistem =="OCT"){
        var Stevilo_v_sistem = IzDECvBIN(VnosStevila);
        Stevilo_v_sistem = IzBINvOCT(Stevilo_v_sistem);
    }else if(VSistem =="HEX"){
        var Stevilo_v_sistem = IzDECvBIN(VnosStevila);
        Stevilo_v_sistem = IzBINvHEX(Stevilo_v_sistem);
    }
    return Stevilo_v_sistem;
}

//before remove all
function BranjeDatotekeStSistemov() {
    var fileInput = document.getElementById('FileStSistemi');
    if (fileInput.files.length > 0) {
        var reader = new FileReader();
        document.getElementById('display_St_sistemi').innerHTML ="";
        reader.onload = function (event) {
            var Display = document.getElementById('display_St_sistemi');
            var lines = event.target.result.split('\n');
            let Izracun;

            for (var i = 0; i < lines.length; i++) {
                Izracun = LineToResult(lines[i])
                Display.innerHTML += "<tr><td>" +lines[i]+ " "+Izracun+"</td></tr>";

            }
        };

        reader.readAsText(fileInput.files[0]);
    }
}
function LineToResult(line){
    let racun = "";
    let stevec =0;
    while (line[stevec] != "="){
        racun += line[stevec];
        stevec +=1;
    }
    let spravi_racun = racun;
    let list = racun.split(" ");
    let IzSistema = list[0];
    let VnosStevila = list[1];
    let VSistem = list[2];
    return Rezultat(true,IzSistema,VnosStevila,VSistem);
}




//od tukaj naprej branje za osnovni kalkulator
//OSNOVNI
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

function NamestoEval(test){
    //var test="2 + ( 3 * ( 8 - 4  ) ) ="
    test += " = "
    var stevilke ="";
    var operatorji_brez_zaklepaja ="";
    var zaklepaji =0;
    var stevec = 0;
    var prej_stevilo = false;
    var prejoperator = true;
    var operatoriji_po_urejanu ="";
    //alert(test);
    

    while (test[stevec] != "="){
        if(isNaN(test[stevec]) &&test[stevec] !="."&&prej_stevilo==true&&prejoperator==false){
            stevilke += " ";
        }else if(isNaN(test[stevec]) == false ||test[stevec] =="." &&prej_stevilo==false&&prejoperator==true){
            operatorji_brez_zaklepaja += " ";
        }

        if (test[stevec] == ")"){
            zaklepaji +=1;
            prejoperator =true
            prej_stevilo = false;


        }else if(isNaN(test[stevec]) && test[stevec] !="." && prejoperator == false){
            operatorji_brez_zaklepaja += test[stevec];
            prej_stevilo = false;
            prejoperator = true;
        }else if(test[stevec] == "("){
            operatorji_brez_zaklepaja += " "+test[stevec];
            prej_stevilo = false;
            prejoperator = true;
        }else{
            stevilke += test[stevec];
            prej_stevilo = true;
            prejoperator = false;


        }
        stevec +=1;
        //alert("smo stevila: "+stevilke)
        //alert("smo operatorji"+operatorji_brez_zaklepaja)
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
        array_operatoriji.shift();
        array_stevilke.shift();
        array_stevilke[0] = racun;
    }
    return array_stevilke[0];
    }

function Izracunaj(racun,IzDatoteke) {
    if (IzDatoteke == false){
        var racun = document.getElementById("vnos").value;
    }
    //alert(racun);
    racun = racun.replace(/sqrt\s*\(\s*(.*?)\s*\)/g, (_, vsebina) => {
        let test = NamestoEval(vsebina)
        racun = Math.sqrt(+(test))
        recun = racun.toFixed(2)
        return recun;
      });
    racun = racun.replace(/pow\s*\(\s*(.*?)\s*,\s*(.*?)\s*\)/g, (_, baza, eksponent) => Math.pow(+(baza), +(eksponent)));
  
    if(IzDatoteke == false){
        document.getElementById("vnos").value = NamestoEval(racun);
    }else{
        return NamestoEval(racun);
    }
}

function BranjeDatotekeOsnovniCalc(){
    var fileInput = document.getElementById('FileOsnovni');
    if (fileInput.files.length > 0) {
        var reader = new FileReader();
        document.getElementById('display_Osnovni').innerHTML ="";
        reader.onload = function (event) {
            var Display = document.getElementById('display_Osnovni');
            var lines = event.target.result.split('\n');
            let Izracun;

            for (var i = 0; i < lines.length; i++) {
                //alert(lines[i]);
                Izracun = Izracunaj(lines[i],true)
                Display.innerHTML += "<tr><td>" +lines[i]+ " "+Izracun+"</td></tr>";

            }
        };

        reader.readAsText(fileInput.files[0]);
    }
}
