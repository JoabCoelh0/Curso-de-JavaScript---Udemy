/* 
Luiz Otavio Miranda tem 30 anos, pesa 84 kg
tem 1.80 de altura e seu IMC e de 25.
Luiz Otavio nasceu em 1982
*/

let nome = 'joab'
let sobrenome = 'Coelho'
let idade = 21
let peso = 70
let alturaEmM = 1.75
let IMC = peso / (alturaEmM * alturaEmM)
const anoAtual = 2024
let anoNascimento;
anoNascimento = anoAtual - idade

console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso}. Tem ${alturaEmM} de altura e seu Indice de Massa Corporal(IMC) é ${IMC.toFixed([2])}.
${nome} ${sobrenome} nasceu em ${anoNascimento}
`);