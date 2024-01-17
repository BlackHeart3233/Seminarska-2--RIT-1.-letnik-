import { Rezultat} from './pretvorbe.js';




function BranjeDatotekeStSistemov() {
    var fileInput = document.getElementById('FileStSistemi');
    if (fileInput.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var Display = document.getElementById('display_St_sistemi');
            var lines = event.target.result.split('\n');
            let Izracun;
            let racun;

            for (var i = 0; i < 1/*lines.length*/; i++) {
                alert("sem tukaj");
                racun,Izracun = LineToResult(lines[i])
                alert("sem kle");
                Display.innerHTML += "\n" +racun+ " "+Izracun;

            }
        };

        reader.readAsText(fileInput.files[0]);
    }
}


function LineToResult(line){
    let racun = "";
    let stevec =0;
    alert(line);
    while (line[stevec] != "="){
        racun += line[stevec];
        stevec +=1;
    }
    let list = racun.split(" ");
    let IzSistema = list[0];
    let VnosStevila = list[1];
    let VSistem = list[2];
    return racun,Rezultat(true,IzSistema,VnosStevila,VSistem);
}