
const paginas = [

"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=e40410f4c539976e9eb6",
"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=4e80a718f797324fffe4",
"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=754a93dbff6a6a09fcbe",
"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=74b03b645823af79e19f",
"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=ada99cb16e59020a23e9",
"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=7a904369601358bb6204",
"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=7313435d4883ab56df77",
"https://app.powerbi.com/view?r=eyJrIjoiMGUwYWUxMTctZWQ5NC00YTE3LWFjNjItOTk2NzI0Yjk1ZjM4IiwidCI6IjAwMjhhZGUyLTFmYzMtNDU5Yi04NDJmLTAzNWQxMDRmOGU2ZCJ9&pageName=8580eaebc87ae78b7bd5",
"https://docs.google.com/presentation/d/e/2PACX-1vSFoOQtJDwyfkhA2J-CWTf6MP2RKQRlu_XtJVgpfdsDRve4AVcWU-3blaebX3OoDU4V_xoWA94oNyJZ/embed?start=true&loop=true&delayms=30000"

];

// ======================================================
// TEMPOS
// ======================================================

// POWER BI = 14 minutos
const tempoPowerBI = 14 * 60 * 1000;

// GOOGLE SLIDES / POWERPOINT = 10 minutos
const tempoSlides = 10 * 60 * 1000;

let indice = 0;

const iframe = document.getElementById("dashboard");

let timeoutTroca;

// ======================================================
// IDENTIFICA TIPO DA URL
// ======================================================

function obterTempo(url) {

    // GOOGLE SLIDES / POWERPOINT ONLINE
    if (
        url.includes("docs.google.com")
        || url.includes("office.com")
        || url.includes("powerpoint")
    ) {

        return tempoSlides;
    }

    // POWER BI
    return tempoPowerBI;
}

// ======================================================
// TROCA DE DASHBOARD
// ======================================================

function trocarDashboard(){

    clearTimeout(timeoutTroca);

    iframe.style.opacity = "0";

    setTimeout(() => {

        const urlAtual = paginas[indice];

        // ==============================================
        // GOOGLE SLIDES / POWERPOINT ONLINE
        // ==============================================

        if (
            urlAtual.includes("docs.google.com")
            || urlAtual.includes("office.com")
            || urlAtual.includes("powerpoint")
        ) {

            iframe.src = urlAtual;
        }

        // ==============================================
        // POWER BI
        // ==============================================

        else {

            iframe.src =
                urlAtual
                + "&cache="
                + new Date().getTime();
        }

        iframe.onload = () => {

            iframe.style.opacity = "1";
        };

        // ==============================================
        // DEFINE TEMPO DINÂMICO
        // ==============================================

        const tempoAtual = obterTempo(urlAtual);

        indice++;

        if(indice >= paginas.length){
            indice = 0;
        }

        timeoutTroca = setTimeout(
            trocarDashboard,
            tempoAtual
        );

    }, 500);

}

trocarDashboard();

// ======================================================
// ÚLTIMA ATUALIZAÇÃO
// ======================================================

fetch("ultima_atualizacao.txt")

.then(response => response.text())

.then(data => {

    document.getElementById("ultimaAtualizacao")
        .innerText = data;

});
