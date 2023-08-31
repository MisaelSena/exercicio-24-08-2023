import { Veiculo } from "./Veículos.js";

export class Locadora extends Veiculo{
    veiculos;
    constructor(placa, nome, ano, cor, valor, disponivel, veiculos){
        super(placa, nome, ano, cor, valor, disponivel)
        this.veiculos = [];
    }
    cadastarVeiculo(veiculo){
        this.veiculos.push(veiculo);
    }
    alugarVeiculo(posicaoLista){
        this.veiculos.forEach((element,index)=>{
            if(index === posicaoLista){
                element.disponivel = false;
            }
        });
    }
}