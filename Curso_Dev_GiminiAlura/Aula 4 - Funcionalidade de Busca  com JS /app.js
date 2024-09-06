
    // dados.forEach(element => {
    //     section.innerHTML += `<div class="item-resultado">
    //     <h2>
    //         <a href="#" target="_blank">
    //             ${element.titulo}
    //         </a>
    //     </h2>

    //     <p class="descricao-meta">${element.descricao}</p>

    //     <a href="${element.link}" target="_blank" rel="noopener">Mais informações</a>
    // </div>`  
    // });

//Ao clicar as informações de busca são mostradas
function pesquisar(){

    //Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    //Inicializa uma string que armazenará os resultados da pesquisa
    let resultadoPesquisa = ""

    //Itera sobre os dados da pesquisa
    for( let dado of dados){

        //Concatena o HTML para cada resultado na string resultadoPesquisa
        resultadoPesquisa +=  `<div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">
                            ${dado.titulo}
                        </a>
                    </h2>
                
                    <p class="descricao-meta">${dado.descricao}</p> 
                
                    <a href="${dado.link}" target="_blank" rel="noopener">Mais informações</a>
                </div>`

    //Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultadoPesquisa;
    }

    //Log para debug
    console.log("Clicou")
}