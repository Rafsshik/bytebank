import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    
    static numeroDeContas = 0;
    agencia;   
    _cliente; 

     // Proposta # usando no atributo para privado https://github.com/tc39/proposal-class-fields#private-field
    _saldo = 0;    



    set cliente(novoValor){
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor; 
        }
    
    }

    get cliente(){
        return this._cliente;
    }
    
    get saldo (){
    return this._saldo;    // consegue pegar - mais se atribuir no index não é possível 
    }
    

    constructor(agencia, cliente){
  this.agencia = agencia;
  this.cliente = cliente;
  ContaCorrente.numeroDeContas += 1;
    }


    sacar(valor) {
        
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;  
        }

    }

    depositar(valor){
      if(valor <= 0)  
      {
        return; 
      } 
      this._saldo += valor;
    }

    transferir(valor, conta){
        
     const valorSacado = this.sacar(valor);
     conta.depositar(valorSacado);

     //conta.cidade = "São Paulo";  /---- POR SE TRATRAR DE OBJETO É POSSÍVEL SER ALTERADO DENTRO DA CLASSE
     //valor = 20; -----  Pelo valor ser vinculado a conta não é possível pq não é a copia mais sim a legitima
	 
     
    }
}
