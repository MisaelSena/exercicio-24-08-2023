import { Locadora } from "./Locadora.js";
import { Veiculo } from "./Veículos.js";

const placa = document.getElementById('placa-veiculo');
const nome = document.getElementById('nome-veiculo');
const ano = document.getElementById('ano-veiculo');
const cor = document.getElementById('cor-veiculo');
const valor = document.getElementById('valor-veiculo');
const tabelaVeiculosDisponiveis = document.getElementById('tabela-veiculos-disponiveis');
const tabelaVeiculosAlugados = document.getElementById('tabela-veiculos-alugados');
const btnCadastrar = document.getElementById('cadastrar');

btnCadastrar.addEventListener("click",cadastarVeiculo)
document.addEventListener("click",(event)=>{
    const idBtn = event.target.id;
    const textoBtn = event.target.textContent;
    let index = "";
    switch (textoBtn) {
        case "Alugar":
            index = idBtn.replace("alugar[","").replace("]","");
            locadora.alugarVeiculo(Number(index));
            console.log(textoBtn);
            renderizaDisponiveis();
            renderizaAlugados();
            break;
        case "Devolver":
            index = idBtn.replace("devolver[","").replace("]","");
            locadora.devolverVeiculo(Number(index));
            console.log(textoBtn);
            renderizaDisponiveis();
            renderizaAlugados();
        case "Excluir":
            index = idBtn.replace("excluir[","").replace("]","");
            locadora.excluirVeiculo(Number(index));
            console.log(textoBtn);
            renderizaDisponiveis();
            renderizaAlugados();
        default:
            break;
    }   
    /*const index = idBtnAlugar.replace("alugar[","").replace("]","");
    locadora.alugarVeiculo(Number(index));
    console.log(textoBtn);
    renderizaDisponiveis();*/    
    }
    )

const locadora = new Locadora();

function cadastarVeiculo(event) {
    const veiculo = new Veiculo(placa.value,nome.value,ano.value,cor.value,valor.value,true);
    locadora.cadastarVeiculo(veiculo);
    limpaInputsCadastro();
    renderizaDisponiveis();     
}

function renderizaDisponiveis() {
    tabelaVeiculosDisponiveis.innerHTML = '';
    locadora.veiculos.forEach((element, index)=>{
        if (element.disponivel===true) {
            tabelaVeiculosDisponiveis.innerHTML += `<tr>
                <th id="${index}" scope="row">${index+1}</th>
                <td>${element.placa}</td>
                <td>${element.nome}</td>
                <td>${element.ano}</td>
                <td>${element.cor}</td>
                <td>${element.valor}</td>
                <td><button id="excluir[${index}]" class="btn btn-danger">Excluir</button> | <button id="alugar[${index}]"class="btn btn-success">Alugar</button></td>
            </tr>`;
        }
        }        
    )
}

function renderizaAlugados() {
    tabelaVeiculosAlugados.innerHTML = '';
    locadora.veiculos.forEach((element, index)=>{
        if (element.disponivel===false) {
            tabelaVeiculosAlugados.innerHTML += `<tr>
                <th id="${index}" scope="row">${index+1}</th>
                <td>${element.placa}</td>
                <td>${element.nome}</td>
                <td>${element.ano}</td>
                <td>${element.cor}</td>
                <td>${element.valor}</td>
                <td><button id="devolver[${index}]"class="btn btn-warning">Devolver</button></td>
            </tr>`;
        }
        }        
    )
}


function limpaInputsCadastro() {
    placa.value = '';
    nome.value = '';
    ano.value = '';
    cor.value = '';
    valor.value = '';
}





