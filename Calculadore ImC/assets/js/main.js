function calcular(){
    let peso = document.getElementById("Peso").value;
    let altura = document.getElementById('Altura').value;
    let saida = document.getElementById('saida')

    let calcular = peso / (altura*altura)

    
    console.log(peso)
    console.log(altura)


    saida.innerHTML = calcular.toFixed(2)

    if(calcular <= 18.5){
        saida.innerHTML = `Seu IMC é: <strong> ${calcular.toFixed(2)}</strong>, Você está A baixo do peso!`
    } else if( calcular > 18.5 && calcular < 24.9){
        saida.innerHTML = `Seu IMC é: <strong> ${calcular.toFixed(2)}</strong>, Você está com peso Normal!`
    } else if( calcular > 25 && calcular < 29.9){
        saida.innerHTML = `Seu IMC é: <strong> ${calcular.toFixed(2)}</strong>, Você está com Sobrepeso!`
    } else if(calcular > 30 && calcular < 34.9){
        saida.innerHTML = `Seu IMC é: <strong> ${calcular.toFixed(2)}</strong>, Você está com Obesiadade Grau 1!`
    } else if(calcular > 35 && calcular < 39.9){
        saida.innerHTML = `Seu IMC é: <strong> ${calcular.toFixed(2)}</strong>, Você está com Obesiadade Grau 1!`
    } else if(calcular >= 40){
        saida.innerHTML = `Seu IMC é:   <strong> ${calcular.toFixed(2)}</strong>, Você está com Obesiadade Grau 3!`
    }
}