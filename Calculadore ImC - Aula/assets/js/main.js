//Capturando o formulario 
const form = document.querySelector('#form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault()
    const InputPeso = evento.target.querySelector('#peso')
    const InputAltura = evento.target.querySelector('#altura')
    
    
    const peso = Number(InputPeso.value);
    const altura = Number(InputAltura.value)

    if(!peso){
        setResultado('Peso Invalido', false)
        return;
    }
    
    if(!altura){
        setResultado('Altura Invalida', false)
        return;
    }


    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc)

    const msg = `Seu Imc é: ${imc}  (${nivelImc})`

    setResultado(msg, true)
});

function getNivelImc (imc) {
const nivel = [
    'Abaixo do peso', 
    'Peso Normal', 
    'Sobrepeso', 
    'Obesidade Grau 1', 
    'Obesiadade Grau 2', 
    'Obesidade Grau 3'
    ]


    if(imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]

}

function getImc (peso, altura) {
    const imc = peso / (altura**2)
    return imc.toFixed(2)
}

function CriaP () {
    const p = document.createElement('p') // criando um paragraco dinamicamente
    return p;
/*    p.classList.add('paragrafo-resultado')*///Criando uma classe para o paragrafo que foi criado.

}

function setResultado (msg, isValid) {
    const resultado =  document.querySelector('#resultado')
    resultado.innerHTML = '';
        
    
    const p = CriaP();

    if(isValid){
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p)//Adicionando o paragrafo que foi criado com o createElement, na saida resultado do HTML.
};


