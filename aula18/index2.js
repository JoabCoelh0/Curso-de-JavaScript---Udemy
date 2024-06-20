const pessoa1 = {
    nome: 'joab',
    sobrenome: 'Coelho',
    idade: 25,
    
    fala() {
        console.log(`A minha idade é ${this.idade}`)
    },

    incrementa(){
        this.idade++
    }

};

pessoa1.fala()
pessoa1.incrementa()

pessoa1.fala()
pessoa1.incrementa()

pessoa1.fala()
pessoa1.incrementa()