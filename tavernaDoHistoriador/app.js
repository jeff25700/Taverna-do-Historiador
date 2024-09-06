function pesquisar() {

    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga a seção no console para verificação

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {

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

    // Atribui o HTML completo da lista de resultados à seção
    section.innerHTML = resultados;
}
