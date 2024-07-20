function meuEscopo(){
    const form = document.querySelector('.form');
    const result = document.querySelector('.resultado')

    const pessoas = []

   // form.onsubmit = function(evento){
   //     evento.preventDefault()
   //     console.log('foi envado')
    //};

    function recebeEventoForm(evento){
        evento.preventDefault()

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura') 
        
        let pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }
        pessoas.push(pessoa)
        
        console.log(pessoas)

        result.innerHTML += `O seu nome é ${nome.value},${sobrenome.value} <br> Pesa ${peso.value}kg <br> <ede ${altura.value} metros.`
    }


    

    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()