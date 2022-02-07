import { Conta } from "./Conta/Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

     
    // Proposta # usando no atributo para privado https://github.com/tc39/proposal-class-fields#private-field
    constructor(cliente, agencia){
  super(0,cliente, agencia);
  ContaCorrente.numeroDeContas += 1;
    }

   
     //sobreescrevendo o comportamento de sacar
    sacar(valor) {
      let taxa = 1.1;
      return this._sacar(valor, taxa);
      }
}
