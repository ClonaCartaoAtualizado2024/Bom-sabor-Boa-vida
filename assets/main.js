const header = document.getElementById("cabecalho");
const opcoes_tela = document.getElementById("opcoes");
const receitas_tela = document.getElementById("receitas");

const receitasDoces = document.getElementById("doces");
const receitasAssados = document.getElementById("assados");
const receitasSalgados = document.getElementById("salgados");
const receitasBebidas = document.getElementById("bebidas");

const itemsReceita = document.getElementById("lista-receitas").getElementsByClassName("item-receita");
const receitaLista = document.getElementById("lista-receitas");

var selecaoReceita;

const interactAudio = new Audio("assets/sounds/interact.mp3");


var DBreceitas = {
    "doces":{
        "mousse-maracuja":[
            "Mousse de Maracujá",
            ["3 frutas de maracujá","1 caixa de leite condensado","1 caixa de creme de leite","100ml de água"],
            ["- Adicione a polpa do maracujá e a água em liquidificador e bata",
            "- Logo em seguida penere o suco e reserve em uma vasilha separada",
            "- Em seguida adicione o leite condensado e o creme de leite no liquidificador e bata",
            "- Enquanto bate, vá adicionando aos poucos o suco na mistura, e garanta que está bem batido",
            "- Após isso adicione toda a mistura em uma vasilha e deixe ela na geladeira por 1 hora no mínimo"]
        ]
    },
    "assados":{},
    "salgados":{},
    "bebidas":{}
}


function selecionar(botao) {
    interactAudio.play();
    
    if (botao == "doces") {
        receitasDoces.style.display = "block";
    } else if (botao == "assados") {
        receitasAssados.style.display = "block";
    } else if (botao == "salgados") {
        receitasSalgados.style.display = "block";
    } else if (botao == "bebidas") {
        receitasBebidas.style.display = "block";
    }

    header.style.animation = "animacao-selecionar-header 1s ease-in forwards";
    opcoes_tela.style.animation = "animacao-selecionar-opcoes 1s ease-in forwards";
    receitas_tela.style.animation = "animacao-selecionar-receitas 1s ease-in forwards";
}

receitaLista.addEventListener("click", (event) => {
    console.log(event.target)
})