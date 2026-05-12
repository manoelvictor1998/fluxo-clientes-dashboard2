
const paginas = [

"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=e40410f4c539976e9eb6",
"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=4e80a718f797324fffe4",
"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=754a93dbff6a6a09fcbe",
"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=74b03b645823af79e19f",
"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=ada99cb16e59020a23e9",
"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=7a904369601358bb6204",
"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=7313435d4883ab56df77",
"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=8580eaebc87ae78b7bd5"

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
