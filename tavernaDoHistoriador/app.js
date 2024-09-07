function pesquisar() {

    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga a seção no console para verificação

    let buscarHistoria = document.getElementById("buscarHistoria").value

    //se buscarHistoria for uma string sem nada
    if (buscarHistoria == "" || (buscarHistoria === " ")) {
        section.innerHTML = ("<p> pesquisa não encontrada </p>")
        return
    }

    buscarHistoria = buscarHistoria.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        // se titulo includes buscarHistoria
        if (titulo.includes(buscarHistoria) || descricao.includes(buscarHistoria) || tags.includes(buscarHistoria)) {

            // Concatena o HTML de cada item de resultado à string 'resultados'
            resultados += `
        <div class="item-resultado">
            <h2>
                <a href=${dado.link} target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta"> ${dado.descricao} </p>
            <a href='https://pt.wikipedia.org/wiki/Primeira_Guerra_Mundial' target="_blank">Mais informações</a>
        </div>`;
        }

        if (!resultados) {
            resultados = '<p>pesquisa não encontrada. Você precisa digitar algo relacionado a eventos históricos</p>'
        }

    }

    // Atribui o HTML completo da lista de resultados à seção
    section.innerHTML = resultados;
}function pesquisar() {

    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga a seção no console para verificação

    let buscarHistoria = document.getElementById("buscarHistoria").value

    //se buscarHistoria for uma string sem nada
    if (buscarHistoria == "") {
        section.innerHTML = ("<p> pesquisa não encontrada </p>")
        return
    }

    buscarHistoria = buscarHistoria.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        // se titulo includes buscarHistoria
        if (titulo.includes(buscarHistoria) || descricao.includes(buscarHistoria) || tags.includes(buscarHistoria)) {

            // Concatena o HTML de cada item de resultado à string 'resultados'
            resultados += `
        <div class="item-resultado">
            <h2>
                <a href=${dado.link} target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta"> ${dado.descricao} </p>
            <a href='https://pt.wikipedia.org/wiki/Primeira_Guerra_Mundial' target="_blank">Mais informações</a>
        </div>`;
        }
        // faça isso...
        console.log(dado.titulo.includes(buscarHistoria));

    }

    // Atribui o HTML completo da lista de resultados à seção
    section.innerHTML = resultados;
}
