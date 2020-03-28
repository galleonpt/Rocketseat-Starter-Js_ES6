//spread em arrays

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2] //juntar(concatenar) os dois objetos

console.log(arr3)


//spread em objetos

const user = {
  nome: 'diego',
  idade: 23,
  empresa: 'rocketseat'
}

const user2 = {
  ...user,
  nome: 'jose'
}

console.log(user2)