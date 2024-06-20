function creiaPessoa(nome, sobrenome, idade){
    return{
        nome, sobrenome, idade
    };
}

const pessoa1 = creiaPessoa('Joab', 'Coelho', 21)
const pessoa2 = creiaPessoa('lucas', 'emanuel', 23)
const pessoa3 = creiaPessoa('pedro', 'otavio', 45)
const pessoa4 = creiaPessoa('windson', 'francisco', 18)


console.log(pessoa1.nome)
console.log(pessoa2.nome)
console.log(pessoa3.nome)
console.log(pessoa4.nome)
