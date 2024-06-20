let numero = prompt('Digite um numero: ')
let numeropPrincipal = document.getElementById('numeroPrincipal') 
let texto = document.getElementById('texto')

numeroPrincipal.innerHTML = `${numero }`
texto.innerHTML = ''
texto.innerHTML += `Raiz quadrada: <strong>${numero ** (1/2)}</strong> <br/>`
texto.innerHTML += ` ${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong> <br/>`
texto.innerHTML += `E NaN: ${Number.isNaN(numero)} <br/> `
texto.innerHTML += `Arredondandopara baixo: <strong>${Math.floor(numero)}</strong> <br/>`
texto.innerHTML += `Arredondando para cima <strong>${Math.ceil(numero)}</strong> <br/>`
texto.innerHTML += `Arredondando para cima <strong>${Math.ceil(numero)}</strong> <br/>`

