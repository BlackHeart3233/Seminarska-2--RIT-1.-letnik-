function Rezultat() {
    var IzSistema = document.getElementById("IzSistema").value;
    var VSistem = document.getElementById("VSistem").value;
    var VnosStevila = document.getElementById("vnos_stevila1").value
    if(IzSistema == "BIN"){
        BIN(VSistem, VnosStevila);
    }

}

function BIN(VSistem,VnosStevila) {
    if(VSistem == "DEC"){
        let stevec = 1;
        var Stevilo_v_sistem = 0;
        let dolzina_stevila = VnosStevila.length;
        alert("im here")

        for (let i = dolzina_stevila - 1; i >= 0; i--) {
            let branje_stevila = VnosStevila[i];
            if (branje_stevila === "1") {
                Stevilo_v_sistem += stevec;
            }
            stevec *= 2;
        }
    }else if(VSistem == "OCT"){
        let stevec = 1;
        var Stevilo_v_sistem = "";
        let stejem_stevilo = 0;
        let dolzina_stevila = VnosStevila.length;
        let stevec_spremembe = 0;
        let list = ["0", "1", "2", "3", "4", "5", "6", "7"];
        
        for (let i = dolzina_stevila - 1; i >= 0; i--) {
            let branje_stevila = VnosStevila[i];
        
            if (branje_stevila === "1") {
                stejem_stevilo += stevec;
            }
            stevec *= 2;
            stevec_spremembe += 1;
            if (stevec_spremembe === 3) {
                stevec_spremembe = 0;
                stevec = 1;
        
                for (let l = 0; l < 8; l++) {
                    if (list[l] == stejem_stevilo) {
                        Stevilo_v_sistem = list[l] + Stevilo_v_sistem;}}
                stejem_stevilo = 0;
            }}   
        }else if(VSistem == "HEX"){
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
        }   
    alert(Stevilo_v_sistem);     
   let = document.getElementById("vnos_stevila1").value = Stevilo_v_sistem;

}