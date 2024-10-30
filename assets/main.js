const header = document.getElementById("cabecalho");
const opcoes_tela = document.getElementById("opcoes");
const receitas_tela = document.getElementById("receitas");

const receitasDoces = document.getElementById("doces");
const receitasAssados = document.getElementById("assados");
const receitasSalgados = document.getElementById("salgados");
const receitasBebidas = document.getElementById("bebidas");

const itemsReceita = document.getElementById("lista-receitas").getElementsByClassName("item-receita");
const receitaLista = document.getElementById("lista-receitas");

const interactAudio = new Audio("assets/sounds/interact.mp3");

var listaSelecionada;

const nomeReceita = document.getElementById("nome-receita");
const bannerReceita = document.getElementById("banner-receita");
const ingredientes = document.getElementById("ingredientes");
const modoDePreparo = document.getElementById("modo-de-preparo");
const fullviewReceita = document.getElementById("fullview-receita");


var DBreceitas = {
    "doces":[
        "mousse-maracuja",[
            "Mousse de Maracujá",
            ["3 frutas de maracujá","1 caixa de leite condensado","1 caixa de creme de leite","100ml de água"],
            ["- Adicione a polpa do maracujá e a água em liquidificador e bata",
            "- Logo em seguida penere o suco e reserve em uma vasilha separada",
            "- Em seguida adicione o leite condensado e o creme de leite no liquidificador e bata",
            "- Enquanto bate, vá adicionando aos poucos o suco na mistura, e garanta que está bem batido",
            "- Após isso adicione toda a mistura em uma vasilha e deixe ela na geladeira por 1 hora no mínimo."]
        ],
        "chocolate-quente",[
            "Chocolate quente",
            ["1/2 xícaras de leite","2 colheres de chocolate em pó ","1 colher de essência de baunilha","1 caixa de creme de leite","1 dose de conhaque","Açúcar a gosto"],
            ["- Na panela, adicione o leite, o chocolate em pó, o açúcar e a essência de baunilha",
            "- Misture bem e leve ao fogo alto até começar a borbulhar assim que isso acontecer, desligue o fogo, espere 5 minutos e adicione o conhaque",
            "- Espere mais 2 minutos, adicione o creme de leite e misture bem ",
            "- Sove um pouco e conhecer a contar as coxinhas abrindo-as, coloque o recheio de frango com requeijão e feche",
            "- Misture tudo até ficar bem homogêneo e sirva quente."]
        ]
    ],

    "assados":[
        "ratatouille",[
            "Ratatouille",
            ["2 abobrinha","2 cebola","1 pimentão verde","1 pimentão vermelho ","Alecrim a gosto","Alho a gosto","Louro a gosto","2 berinjela","3 tomate","1 pimentão amarelo","Azeite a gosto","Manjericão","Sal a gosto","Molho de tomate para cobrir o fundo da forma"],
            ["- Corte os vegetais em rodelas finas sem as sementes",
            "- Cubra o fundo da forma com o molho de tomate",
            "- Monte tudo intercalado com os vegetais",
            "- Amasse o alho e espalhe por cima adicionando o sal e o alecrim a gosto ",
            "- Regue com um pouco de azeite e cubra com papel manteiga ou alumínio",
            "- Leve ao forno por 40 minutos a uma temperatura de 180°C a 200°C"]
        ],
        "lasanha",[
            "Lasanha a Bolonhesa",
            ["500g de massa de lasanha","2 creme de leite","3 colheres de farinha","500g de mussarela","2 copos de leite","3 colheres de óleo","3 dentes de alho amassado","500g de carne","3 colheres de manteiga","500g de presunto","1 cebola ralada","Sal a gosto","1 caixa de molho de tomate","1 pacote de queijo ralado"],
            ["- Cozinhe a massa segundo as orientações do fabricante, despeje em um reformatório com água gelada para não grudar e reserve",
            "- Refogue o alho, a cebola, a carne moída, o molho de tomate, deixe cozinhar em 3 minutos e reserve",
            "- Derreta a margarina, coloque as 3 colheres de farinhas de trigo e mexa",
            "- Despeje o leite aos poucos e continue mexendo",
            "- Por último, coloque o creme de leite, mexa por 1 minuto e desligue fogão",
            "- Despeje uma parte do molho à bolonhesa em um refratário, a metade da massa, a metade do presunto, a metade da mussarela, todo o molho branco e o restante da massa",
            "- Repita as camadas até a borda do recipiente",
            "- Finalize com o queijo ralado e leve ao forno alto (220° C), preaquecido, por cerca de 20 minutos."]
        ]
    ],

    "salgados":[
        "bolinho-chuva",[
            "Bolinho de chuva",
            ["400 gramas de polvilho doce","200 grama de açúcar", "50 gramas de queijo mussarela", "1 colher de fermento", "3 ovos", "Óleo"],
            ["- Adicione em uma vasilha o polvilho, o açúcar e o queijo e misture bem",
            "- Após isso adicione os ovos e o fermento e amasse (talvez seja necessário o auxílio das mãos)", 
            "- A massa irá fica bem quebradiça mas modelavel, modele em bolinhas",
            "- Em uma panela adicione o óleo e deixe em fogo médio",
            "- Com o óleo já quente adicione as bolinhas frite-as",
            "- Após douradas tire e as sirva",
            "- Se quiser pode passar em canela com açúcar assim que sair da panela."]
        ],
        "coxinha",[
            "Coxinha",
            ["4 xícaras de trigo","4 xícaras de leite","1 caldo de galinha","1/2 colher de margarina","Frango desfiado","Farinha de rosca","Requeijão"],
            ["- Leve ao fogo o leite, margarina e o caldo",
            "- Deixe ferver, despeje de uma só vez o trigo e bata muito bem",
            "- Depois tire de panela e ponha em cima de um superfície",
            "- Sove um pouco e conhecer a contar as coxinhas abrindo-as, coloque o recheio de frango com requeijão e feche",
            "- Passe na farinha de rosca.",
            "- Coloque para fritar até ficar dourado e sirva."]
        ]
    ],

    "bebidas":[
        "caipirinha",[
            "Caipirinha",
            ["1 limão grande","2 colheres de açúcar","Gelo a gosto","Cachaça"],
            ["- Pegue o limão coloque-o na horizontal e retire as duas pontas, vire-o na vertical e corte-o ao meio, retire os meio (parte branca) do limão e fatie",
            "- Coloque o limão fatiado e duas colheres bem cheias de açúcar dentro de um corpo próprio para a bebida e com um socador esprema até que saia todo todo o suco do limão",
            "- Coloque pedras de gelo até encher o copo (aproximadamente 12 Pedra pequenas de gelo) e encha o copo com a cachaça ",
            "- Mexa bem com uma colher ou coloque em uma coqueteleira e serva-se."]
        ]
    ]
}


function selecionar(botao) {
    interactAudio.play();
    listaSelecionada = botao

    if (botao == "doces") {
        receitaLista.innerHTML = 
        `<ul>
            <li id="mousse-maracuja" class="item-receita">Mousse de Maracujá</li>
            <li id="chocolate-quente" class="item-receita">Cholocate Quente</li>
        </ul>`
    } else if (botao == "assados") {
        receitaLista.innerHTML = 
        `<ul>
            <li id="ratatouille" class="item-receita">Ratatouille</li>
            <li id="lasanha" class="item-receita">Lasanha a Bolonhesa</li>
        </ul>`
    } else if (botao == "salgados") {
        receitaLista.innerHTML = 
        `<ul>
            <li id="bolinho-chuva" class="item-receita">Bolinho de Chuva</li>
            <li id="coxinha" class="item-receita">Coxinha</li>
        </ul>`
    } else if (botao == "bebidas") {
        receitaLista.innerHTML = 
        `<ul>
            <li id="caipirinha" class="item-receita">Caipirinha</li>
        </ul>`
    }

    header.style.animation = "animacao-selecionar-header 1s ease-in forwards";
    opcoes_tela.style.animation = "animacao-selecionar-opcoes 1s ease-in forwards";
    receitas_tela.style.animation = "animacao-selecionar-receitas 1s ease-in forwards";
}

receitaLista.addEventListener("click", (event) => {
    let receitaID = event.target.id;
    let receitaIDContent;

    if (DBreceitas.doces.includes(receitaID)) {
        receitaIDContent = DBreceitas.doces[(DBreceitas.doces.indexOf(receitaID) + 1)];
        
        nomeReceita.innerHTML = receitaIDContent[0];
        bannerReceita.src = `assets/receitas/${receitaID}.jpeg`;
        fullviewReceita.src = `assets/receitas/${receitaID}.jpeg`;
        ingredientes.innerHTML = "";
        receitaIDContent[1].forEach(function(element) {
            ingredientes.innerHTML = ingredientes.innerHTML+`<li>${element}</li>`
        });
        modoDePreparo.innerHTML = "";
        receitaIDContent[2].forEach(function(element) {
            modoDePreparo.innerHTML = modoDePreparo.innerHTML+`${element}<br>`
        });
    }

    if (DBreceitas.assados.includes(receitaID)) {
        receitaIDContent = DBreceitas.assados[(DBreceitas.assados.indexOf(receitaID) + 1)];
        
        nomeReceita.innerHTML = receitaIDContent[0];
        bannerReceita.src = `assets/receitas/${receitaID}.jpeg`;
        fullviewReceita.src = `assets/receitas/${receitaID}.jpeg`;
        ingredientes.innerHTML = "";
        receitaIDContent[1].forEach(function(element) {
            ingredientes.innerHTML = ingredientes.innerHTML+`<li>${element}</li>`
        });
        modoDePreparo.innerHTML = "";
        receitaIDContent[2].forEach(function(element) {
            modoDePreparo.innerHTML = modoDePreparo.innerHTML+`${element}<br>`
        });
    }

    if (DBreceitas.salgados.includes(receitaID)) {
        receitaIDContent = DBreceitas.salgados[(DBreceitas.salgados.indexOf(receitaID) + 1)];
        
        nomeReceita.innerHTML = receitaIDContent[0];
        bannerReceita.src = `assets/receitas/${receitaID}.jpeg`;
        fullviewReceita.src = `assets/receitas/${receitaID}.jpeg`;
        ingredientes.innerHTML = "";
        receitaIDContent[1].forEach(function(element) {
            ingredientes.innerHTML = ingredientes.innerHTML+`<li>${element}</li>`
        });
        modoDePreparo.innerHTML = "";
        receitaIDContent[2].forEach(function(element) {
            modoDePreparo.innerHTML = modoDePreparo.innerHTML+`${element}<br>`
        });
    }

    if (DBreceitas.bebidas.includes(receitaID)) {
        receitaIDContent = DBreceitas.bebidas[(DBreceitas.bebidas.indexOf(receitaID) + 1)];
        
        nomeReceita.innerHTML = receitaIDContent[0];
        bannerReceita.src = `assets/receitas/${receitaID}.jpeg`;
        fullviewReceita.src = `assets/receitas/${receitaID}.jpeg`;
        ingredientes.innerHTML = "";
        receitaIDContent[1].forEach(function(element) {
            ingredientes.innerHTML = ingredientes.innerHTML+`<li>${element}</li>`
        });
        modoDePreparo.innerHTML = "";
        receitaIDContent[2].forEach(function(element) {
            modoDePreparo.innerHTML = modoDePreparo.innerHTML+`${element}<br>`
        });
    }

})