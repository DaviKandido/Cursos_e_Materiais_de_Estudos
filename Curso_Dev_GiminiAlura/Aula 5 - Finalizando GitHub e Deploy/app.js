
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
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if(campoPesquisa == ""){
        section.innerHTML = `<div class="item-resultado">Nenhum atleta foi encontrado</div>`
        return 
    }

    

    //coloca todas as entradas do compo pesquisa como minusculas
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultadoPesquisa = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    //Itera sobre os dados da pesquisa
    for( let dado of dados){

        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        //se o titulo ou a descrição inclui o campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            //então faça 
            resultadoPesquisa +=  `<div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">
                                ${dado.titulo}
                            </a>
                        </h2>
                    
                        <p class="descricao-meta">${dado.descricao}</p> 
                    
                        <a href="${dado.link}" target="_blank" rel="noopener">Mais informações</a>
                    </div>`


        }
        
        if(!resultadoPesquisa){
            resultadoPesquisa += `<div class="item-resultado">${campoPesquisa} não foi encontrado. Você precisa digitar o nome de um atleta ou esporte`
        }

        //Atualiza o conteúdo da seção com os resultados da pesquisa
        section.innerHTML = resultadoPesquisa;
        
    }

    //Log para debug
    console.log("Clicou")
}