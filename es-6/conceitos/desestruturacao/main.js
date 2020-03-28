const user = {
  nome: 'jose',
  idade: 19,
  morada: {
    cidade: 'braga',
    freguesia: 's.vicente'
  }
}

const {
  nome,
  idade,
  morada: {
    cidade
  }
} = user

console.log(nome, idade, cidade)

function mostraNome({
  nome,
  morada: {
    cidade
  }
}) {
  console.log(nome, cidade)
}

mostraNome(user)