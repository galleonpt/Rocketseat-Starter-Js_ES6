/*class List {
  constructor() {
    this.data = [];
  }

  add(dados) {
    this.data.push('novo todo')
    console.log(this.data)
  }
}

class TodoList extends List { //herança
  constructor() { //add variaveis a classe filho
    super()
    this.name = 'jose'
  }
  mostraNome() {
    console.log(this.name)
  }
}

var minhaLista = new TodoList()

document.querySelector('#novotodo').onclick = function () {
  minhaLista.add()
}

minhaLista.mostraNome()*/



/*class TodoList {
  constructor() {
    _todos = []
  }

  static addTodo() {//da errro pk este metodo utiliza o array que foi definido em cima mas ele nao o consegue "ver"
    //pk e estatico
    this._todos.push('novotodo')
    console.log(_todos)
  }
}

TodoList.addTodo()
TodoList.addTodo()
TodoList.addTodo()*/


//FORMA CORRETA DE USAR METODOS ESTATICOS
class Matematica {
  static soma(x, y) {
    return (x + y)
  }
}

console.log(Matematica.soma(1, 2))