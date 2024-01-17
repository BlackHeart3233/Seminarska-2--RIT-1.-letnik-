export function Rezultat(BeremIzDatoteke,IzSistema,VnosStevila,VSistem) {
    if (IzSistema === undefined && VnosStevila === undefined && VnosStevila === undefined){
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
        Stevilo_v_sistem = HEX(VSistem, VnosStevila);
    }
    alert(Stevilo_v_sistem);
    if(BeremIzDatoteke != "false"){
        return Stevilo_v_sistem;
    }else{
        var KamVpisem = document.getElementById("KamIzpis").value;
        document.getElementById(KamVpisem).value = Stevilo_v_sistem;
    }
}

export function IzDECvBIN(VnosStevila){
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


 export function IzBINvHEX(VnosStevila){
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

 export function IzBINvOCT(VnosStevila){
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

 export function IzHEXvBIN(VnosStevila){
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

 export function IzOCTvBIN(VnosStevila){
    var list = [[0, "000"], [1, "001"], [2, "010"], [3, "011"], [4, "100"], [5, "101"], [6, "110"], [7, "111"]];
    var dolzina_stevila = VnosStevila.length;
    var Stevilo_v_sistem = "";

    for (let i = dolzina_stevila - 1; i >= 0; i--) {
        let branje_stevila = parseInt(VnosStevila[i], 10); // Convert to a number
        for (let l = 0; l < 8; l++) {
            if (branje_stevila === list[l][0]) {
                Stevilo_v_sistem = list[l][1] + Stevilo_v_sistem;
            }
        }
    }
    Stevilo_v_sistem = Stevilo_v_sistem.replace(/^0+/, '');
    return Stevilo_v_sistem;
}

 export function IzBINvDEC(VnosStevila){
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

 export function BIN(VSistem,VnosStevila) {
    if(VSistem == "DEC"){
        var Stevilo_v_sistem = IzBINvDEC(VnosStevila);
    }else if(VSistem == "OCT"){
        var Stevilo_v_sistem = IzBINvOCT(VnosStevila);
    }else if(VSistem == "HEX"){
        var Stevilo_v_sistem = IzBINvHEX(VnosStevila)
    }   
    return Stevilo_v_sistem;
}
 export function HEX(VSistem,VnosStevila) {
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

 export function OCT(VSistem,VnosStevila){
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

 export function DEC(VSistem,VnosStevila){
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
