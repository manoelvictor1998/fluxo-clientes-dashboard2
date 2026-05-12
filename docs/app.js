
const paginas = [

"https://app.powerbi.com/groups/me/reports/7034628f-4f1c-4a67-b162-56cfc5409960/e40410f4c539976e9eb6?experience=power-bi",
"https://app.powerbi.com/groups/me/reports/7034628f-4f1c-4a67-b162-56cfc5409960/4e80a718f797324fffe4?experience=power-bi",
"https://app.powerbi.com/groups/5878c07b-805b-4296-9ee8-eef81127e8f7/reports/7034628f-4f1c-4a67-b162-56cfc5409960/754a93dbff6a6a09fcbe?experience=power-bi",
"https://app.powerbi.com/groups/5878c07b-805b-4296-9ee8-eef81127e8f7/reports/7034628f-4f1c-4a67-b162-56cfc5409960/74b03b645823af79e19f?experience=power-bi",
"https://app.powerbi.com/groups/5878c07b-805b-4296-9ee8-eef81127e8f7/reports/7034628f-4f1c-4a67-b162-56cfc5409960/ada99cb16e59020a23e9?experience=power-bi",
"https://app.powerbi.com/groups/5878c07b-805b-4296-9ee8-eef81127e8f7/reports/7034628f-4f1c-4a67-b162-56cfc5409960/7a904369601358bb6204?experience=power-bi",
"https://app.powerbi.com/groups/5878c07b-805b-4296-9ee8-eef81127e8f7/reports/7034628f-4f1c-4a67-b162-56cfc5409960/7313435d4883ab56df77?experience=power-bi",
"https://app.powerbi.com/groups/5878c07b-805b-4296-9ee8-eef81127e8f7/reports/7034628f-4f1c-4a67-b162-56cfc5409960/8580eaebc87ae78b7bd5?experience=power-bi"

];

const tempo = 180000;

let indice = 0;

const iframe = document.getElementById("dashboard");

function trocarDashboard(){

    iframe.src = paginas[indice];

    indice++;

    if(indice >= paginas.length){
        indice = 0;
    }

}

trocarDashboard();

setInterval(trocarDashboard, tempo);

// ============================
// ÚLTIMA ATUALIZAÇÃO
// ============================

fetch("ultima_atualizacao.txt")
.then(response => response.text())
.then(data => {
    document.getElementById("ultimaAtualizacao").innerText = data;
});
