import { Locadora } from "./Locadora.js";
import { Veiculo } from "./Veículos.js";

const placa = document.getElementById('placa-veiculo');
const nome = document.getElementById('nome-veiculo');
const ano = document.getElementById('ano-veiculo');
const cor = document.getElementById('cor-veiculo');
const valor = document.getElementById('valor-veiculo');
const tabelaVeiculosDisponiveis = document.getElementById('tabela-veiculos-disponiveis');
const btnCadastrar = document.getElementById('cadastrar');

btnCadastrar.addEventListener("click",cadastarVeiculo)

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
                <td><button class="btn btn-danger">Excluir</button> | <button class="btn btn-success" onclick="alugar(${index})">Alugar</button></td>
            </tr>`;
        }
        }        
    )
}

function alugar(posicaoLista) {
    locadora.alugarVeiculo(posicaoLista);
}

function limpaInputsCadastro() {
    placa.value = '';
    nome.value = '';
    ano.value = '';
    cor.value = '';
    valor.value = '';
}





