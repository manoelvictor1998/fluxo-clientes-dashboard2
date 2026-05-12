
const paginas = [

"https://app.powerbi.com/links/bgGToRL6E8?ctid=0028ade2-1fc3-459b-842f-035d104f8e6d&pbi_source=linkShare",
"https://app.powerbi.com/links/bgGToRL6E8?ctid=0028ade2-1fc3-459b-842f-035d104f8e6d&pbi_source=linkShare"

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
