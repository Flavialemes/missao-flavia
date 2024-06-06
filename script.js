const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-perguntA");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const pergunta =[
    { //primeiro objeto da lista de perguntas 
        enunciado: "pergunta 1",
        alternativa: ["alternativa1","alternativa2"]

    },
    {//segundo objeto da lista de pergunta 
        enunciado: "pergunta 2",
        alternativa: ["alternativa1","alternativa2"]

    }
]