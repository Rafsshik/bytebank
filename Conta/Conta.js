
export class Conta {
    constructor(saldoInicial,cliente, agencia){
      if(this.constructor == Conta) {
        throw new Error("Você não deveria instaciar um objeto do tipo conta Diretamente, pois essa é uma classe abastrata");
      }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;  
    }

    set cliente(novoValor){
      if(novoValor instanceof Cliente) {
          this._cliente = novoValor; 
      }
  
  }

  get cliente(){
      return this._cliente;
  }
  
  get saldo (){
  return this._saldo;   
  }
  
   //Método abstrato
    sacar(valor) {
      throw new Error("o método Sacar da conta é abstrato");  
   
    }

    _sacar(valor, taxa){
      const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;  
        }

        return 0;
    }

    depositar(valor){
      this._saldo += valor;
    }

    transferir(valor, conta){
     const valorSacado = this.sacar(valor);
     conta.depositar(valorSacado);

    }

   
}