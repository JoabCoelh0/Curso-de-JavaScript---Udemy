/*  
    && -> todas as expressoes precisam ser verdadeiras para o resultado seja verdadeiro.

    || ->  true || folse -> vai retornar o "Valor vaerdadeiro"

    *false{ -> Valores falsos literais

        0
        '' "" ``
        null / undefined
        NaN
    }
*/

//function falaOi(){
//    return 'oi'
//}

//const vaiExecutar = 'joab'
//if(vaiExecutar == false){
//    console.log(false)
//}

//console.log(vaiExecutar && falaOi())

const a = 0
const b = null
const c = 'false'
const d = false
const e = NaN

console.log(a || b || c || d || e)