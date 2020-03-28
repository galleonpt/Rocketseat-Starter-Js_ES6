const arr = [1, 3, 4, 7, 8, 9]

//multiplicar tds os elementos do array pelo seu index
const newArr = arr.map(function (item, index) {
  return item * index
})
console.log(newArr)

//somar todos os elemntos do array
const sum = arr.reduce(function (total, seguinte) {
  return total + seguinte
})
console.log(sum)

//retorna um array novo com os numeros que se pares(pegou no array que ja tinhamos e filttou so os pares)
const filter = arr.filter(function (item) {
  return item % 2 === 0
})
console.log(filter)

//encontrar um elemento no array
const find = arr.find(function (item) {
  return item === 4
})
console.log(find)