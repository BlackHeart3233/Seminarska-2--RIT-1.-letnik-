//PRETVORBENI KALKUALTOR
function Rezultat(BeremIzDatoteke,IzSistema,VnosStevila,VSistem) {

    if (BeremIzDatoteke == "false"){
        var IzSistema = document.getElementById("IzSistema").value;
        var VSistem = document.getElementById("VSistem").value;
        var VnosStevila = document.getElementById("vnos_stevila1").value
    }

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
        if(KamVpisem == "vnos_stevila2" || KamVpisem == "vnos_stevila3"){
            if(VSistem == "BIN"){
                document.getElementById(KamVpisem).value = Stevilo_v_sistem;
            }
        }
        else{
            document.getElementById(KamVpisem).value = Stevilo_v_sistem;
        }
        
    }
}

function IzDECvBIN(VnosStevila){
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
    if(VSistem == "BIN"){
        return VnosStevila;
    }
    else if(VSistem == "DEC"){
        var Stevilo_v_sistem = IzBINvDEC(VnosStevila);
    }else if(VSistem == "OCT"){
        var Stevilo_v_sistem = IzBINvOCT(VnosStevila);
    }else if(VSistem == "HEX"){
        var Stevilo_v_sistem = IzBINvHEX(VnosStevila)
    }   
    return Stevilo_v_sistem;
}

function HEX(VSistem,VnosStevila) {    
    if(VSistem == "HEX"){
        return VnosStevila;
    }
    else if(VSistem == "DEC"){
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
    if(VSistem == "OCT"){
        return VnosStevila;
    }
    else if( VSistem == "DEC"){
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
    if(VSistem == "DEC"){
        return VnosStevila;
    }
    else if(VSistem =="BIN"){
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

//BRANJE DATOTEK ZA PRETVORBE
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



//OSNOVNI KALKLATOR
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

//Shunting Yard algoritem
function NamestoEval(racun) {
    var izhodni = "";
    var operatorji = "";
    var stevec = 0;
    var prejStevilo = false;
    var prejOperator = true;
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };

    while (stevec < racun.length) {
        var trenutna_izbira = racun[stevec];

        if (!isNaN(trenutna_izbira) || trenutna_izbira == '.' || (trenutna_izbira == '-' && prejStevilo == false && prejOperator == true)) {
            if (prejStevilo) {
                izhodni += trenutna_izbira;
            } else {
                izhodni += " " + trenutna_izbira;
            }
            prejStevilo = true;    
        } else if (trenutna_izbira == '(') {
            operatorji += trenutna_izbira;
            prejOperator = true
            prejStevilo = false;
        } else if (trenutna_izbira == ')') {
            while (operatorji.slice(-1) !== '(') {
                izhodni += " " + operatorji.slice(-1);
                operatorji = operatorji.slice(0, -1);
            }
            operatorji = operatorji.slice(0, -1);
            prejStevilo = false;
            prejOperator = true;
        } else if (precedence[trenutna_izbira] != undefined) {
            while (operatorji != "" && operatorji.slice(-1) != '(' && precedence[trenutna_izbira] <= precedence[operatorji.slice(-1)]) {
                izhodni += " " + operatorji.slice(-1);
                operatorji = operatorji.slice(0, -1);
            }
            operatorji += " " + trenutna_izbira;
            prejStevilo = false;
            prejOperator = true;
        } else {
            prejStevilo = false;
        }

        stevec += 1;
    }

    while (operatorji != "") {
        izhodni += " " + operatorji.slice(-1);
        operatorji = operatorji.slice(0, -1);
    }

    izhodni = izhodni.trim().split(/\s+/); 

    var zacasni_list =[];
    var st=0;
    var st_za_for =0;
    var izracun=0;
    while (izhodni.length != 1){
        while(isNaN(izhodni[st]) == false){
            st +=1;
        }

        stevilo1 = izhodni[st-2];
        stevilo2 = izhodni[st-1];
        operator = izhodni[st];

        if(operator == "+"){
            izracun = +(stevilo1) + +(stevilo2);
        }else if(operator =="-"){
            izracun = +(stevilo1) - +(stevilo2);
        }else if(operator == "*"){
            izracun = +(stevilo1) * +(stevilo2);
        }else if(operator =="/"){
            izracun = +(stevilo1) / +(stevilo2);
        }

        st_za_for = 0;
        for(let i = 0; i<izhodni.length;i++){
            if((st-1) != i && (st-2) != i && st !=i){
                zacasni_list[st_za_for] = izhodni[i];
                st_za_for+=1;
            }
            if(st == i){
                zacasni_list[st_za_for] = izracun;
                st_za_for +=1;
                izracun = 0;
            }
        }
        izhodni = [];
        izhodni = zacasni_list;
        zacasni_list = []
        st=0;
    }
    if(Number.isInteger(izhodni[0])== true){
        return izhodni[0];

    }else{
        return izhodni[0].toFixed(2);

    }
}


function Izracunaj(racun,IzDatoteke) {
    if (IzDatoteke == false){
        var racun = document.getElementById("vnos").value;
    }

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
                Izracun = Izracunaj(lines[i],true)
                Display.innerHTML += "<tr><td>" +lines[i]+ " "+Izracun+"</td></tr>";

            }
        };

        reader.readAsText(fileInput.files[0]);
    }
}
