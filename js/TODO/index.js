var listElement=document.querySelector('.app ul')
var inputElement=document.querySelector('.app input')
var buttonElement=document.querySelector('.app button')

var todos =JSON.parse(localStorage.getItem('list_todos')) ||  []

function RenderTODOS(){
  listElement.innerHTML=''
  /*tudo o que tiver escrito na tela fica limpo
  pk ao xamar esta funcao na AddTodos ela nao repetir o que ja la estava
  e adicionar so o novo todo que foi inserido*/

  for(todo of todos){
    var todoElement=document.createElement('li')//criar o li
    var todoText=document.createTextNode(todo)//criar/guardar o texto do todo

    var linkElement=document.createElement('a')
    linkElement.setAttribute("href", "#")

    var posicao=todos.indexOf(todo)
    linkElement.setAttribute('onclick', 'RemoveTodos(' +posicao+ ')')

    var textLinkElement=document.createTextNode('Excluir')

    linkElement.appendChild(textLinkElement)
    todoElement.appendChild(todoText)//add do texto ao li
    todoElement.appendChild(linkElement)
    listElement.appendChild(todoElement)//add do li ao ul
  }
}

RenderTODOS()

function AddTodos(){
  var todoText=inputElement.value //pegar no textos que ta no input e guardar na variavel

  if(todoText=='')
    alert('TODO invalido')
  else
    todos.push(todoText)//add do todo ao array

  inputElement.value='' //limpar a zona de escrita do novo todo
  RenderTODOS()
  SaveToStorage()
}

buttonElement.onclick=AddTodos

function RemoveTodos(posicao){
  todos.splice(posicao, 1)//metodo para remover um elemento de um array
  RenderTODOS()
  SaveToStorage()
}

function SaveToStorage(){
  localStorage.setItem('list_todos', JSON.stringify(todos))
  //stringify tranforma o array em string
  //o localStorage nao suporta arrays
}