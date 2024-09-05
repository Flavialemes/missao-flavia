
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é uma vantagem de ter um ateliê de costura especializado em peças sob medida?",
        alternativas: [
            {
                texto: "Personalização completa das peças",
                afirmacao: "Um ateliê de costura sob medida permite que os clientes obtenham roupas ajustadas perfeitamente ao seu corpo e estilo, garantindo um ajuste ideal."
            },
            {
                texto: "Redução de custos em comparação com marcas de luxo.",
                afirmacao: "Embora a personalização possa oferecer um ajuste superior, os custos de roupas sob medida podem ser mais altos devido ao trabalho artesanal e aos materiais utilizados."
            }
           
        ]
    },
    {
        enunciado: "Como a sustentabilidade pode ser integrada em um ateliê de costura?",
        alternativas: [
            {
                texto: "Utilização de tecidos reciclados e orgânicos",
                afirmacao: "Incorporar tecidos reciclados e orgânicos ajuda a reduzir o impacto ambiental da produção de roupas, promovendo práticas mais sustentáveis."

            },
            {
                texto: "Oferecer serviços de reforma e conserto de roupas.",
                afirmacao: " Serviços de reforma e conserto ajudam a prolongar a vida útil das roupas, diminuindo a necessidade de novos produtos e reduzindo o desperdício."
            }
           
        ]
    },
    {
        enunciado: "Qual é um benefício da digitalização no processo de design e produção de roupas em um ateliê?",
        alternativas: [
            {
                texto: "Aumento da eficiência no processo de design",
                afirmacao:"O uso de softwares de design e modelagem digital permite uma criação mais rápida e precisa de padrões, economizando tempo e recursos."
            },
            {
                texto: "Possibilidade de produção em massa com menos personalização",
                afirmacao:"Embora a digitalização facilite a produção em larga escala, ela pode limitar a personalização, a menos que sejam implementadas soluções específicas para customização."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal ="";

function mostraPergunta(){
    if (atual>=perguntas.length){
        mostraResultado();
       return;
    }
    perguntaAtual =perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}
 function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("clicki", ()=>
        respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
 }
 function respostaSelecionada (opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + "";
    atual++
    mostraPergunta();
 }
 function mostraResultado(){
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
 }
mostraPergunta ();