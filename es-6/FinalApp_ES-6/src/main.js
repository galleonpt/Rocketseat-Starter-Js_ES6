import api from "./api";

class App {
  constructor() {
    this.repositories = []; //array para guardar todos os repositorios que se va buscar ao github

    this.formElement = document.getElementById("repo-form"); //para sabermos qnd o user faz o submit
    this.input = document.querySelector("input[name=repository]");
    this.listElement = document.getElementById("repo-list");

    this.registerHandelers(); //vai registar os eventos
  }

  //smp que o form for submetido é chamado o metodo addRepository
  registerHandelers() {
    this.formElement.onsubmit = event => {
      this.addRepository(event);
    };
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingEl = document.createElement("p");
      loadingEl.appendChild(document.createTextNode("Carregando!!!"));
      loadingEl.setAttribute("id", "loading");
      this.formElement.appendChild(loadingEl);
    } else {
      document.querySelector("#loading").remove();
    }
  }

  async addRepository(event) {
    event.preventDefault(); //previne que smp que se adiciona um repositorio ao form a pagina nao recarregue novamente

    const repoInput = this.input.value;

    //verifica se tem alguma coisa escrita no input
    if (repoInput.length === 0) return; //parar a funcao qnd o que for escrito no inout tiver tamanho 0(nao tiver nada escrito)

    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoInput}`);

      //so funciona se for de uma organizacao(se quisermos por de um user temos que tirar o owner pk o avatar_url esta ao msm nivel que o name)
      //desestruturacao para ir buscar os dados que nos queremos ao response.data
      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data;

      //adicionar uma repositorio que é passado como parametro
      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });

      //limpar o input qnd carregamos no botao adicionar
      this.input.value = "";

      this.render();
    } catch (err) {
      alert("O Repositorio nao existe!!!");
      this.input.value = "";
    }

    //temos que o chamar ca em baixo pk dependendo se ele entrou no try ou no catch temos que tirar a informacao de loading
    this.setLoading(false);
  }

  //metodo para listar os resitorios
  render() {
    //limpar a tela
    this.listElement.innerHTML = "";

    this.repositories.forEach(repo => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.setAttribute("target", "_blank");
      linkEl.appendChild(document.createTextNode("Acessar"));

      let li = document.createElement("li");
      li.appendChild(imgEl);
      li.appendChild(titleEl);
      li.appendChild(descriptionEl);
      li.appendChild(linkEl);

      this.listElement.appendChild(li);
    });
  }
}

new App();
