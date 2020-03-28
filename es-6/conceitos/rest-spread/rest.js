//REST em objetos

const user = {
  nome: 'diego',
  idade: 23,
  empresa: 'rocketseat'
}

const {
  nome,
  ...resto
} = user

console.log(nome, resto)


//REST em arrays

const arr = [1, 2, 3, 4]

const narr = [a, b, ...c] = arr

console.log(a, b, c)


//REST em parametros de funcoes

/* function teste(...params) {
    return params
  }
  console.log(teste(1, 2, 3, 4)) cria um array com estes valores
*/

//somar os valores todos do array com rest
function soma(...params) {
  return params.reduce((total, next) => total + next)
}

console.log(soma(1, 2, 3, 4))