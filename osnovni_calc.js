
function Izracunaj() {
    let racun =     document.getElementById("vnos").value;


    racun = racun.replace(/sqrt\s*\(\s*(.*?)\s*\)/g, (_, vsebina) => Math.sqrt(eval(vsebina)));
    racun = racun.replace(/pow\s*\(\s*(.*?)\s*,\s*(.*?)\s*\)/g, (_, baza, eksponent) => Math.pow(eval(baza), eval(eksponent)));
  
    document.getElementById("vnos").value = eval(racun);
}
  
function DodamVDisplay(vnos){
    document.getElementById("vnos").value += vnos;

}

function Izbrisi(){
    document.getElementById("vnos").value = "";
}
