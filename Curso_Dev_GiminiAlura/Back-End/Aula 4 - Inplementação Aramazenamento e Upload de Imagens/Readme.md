
# DIA 4

Apresentação dos verbos excessencias para um CRUD
  - CRIAR (post)
  - LER (get)
  - DELETAR (Delete)
  - ATUALIZAR (put)

Envio de informações ao para serem guardados no banco de dados


Explicação de uma requisição:

1. Linha de Requisição
  Contém informações básicas sobre a requisição, como:
  Método: Define a ação a ser realizada (ex: GET, POST, PUT, DELETE).
  URL: O recurso desejado no servidor (ex: /api/usuarios).
  Versão do Protocolo: Geralmente HTTP/1.1 ou HTTP/2.

2. Cabeçalhos (Headers)
  Metadados da requisição que dão contexto sobre o cliente e os dados sendo enviados. Exemplos:
  Content-Type: O tipo de dados no corpo da requisição (ex: application/json).
  Authorization: Token ou credencial para autenticação.
  User-Agent: Informações sobre o cliente que está fazendo a requisição (ex: navegador ou API).

3. Corpo (Body)
  Dados que são enviados na requisição, geralmente em métodos como POST ou PUT.
  Pode conter informações como:
  Formulários (ex: dados de login).
  Dados estruturados (ex: JSON: { "nome": "João", "idade": 30 }).
  Arquivos (ex: upload de imagens).
  Em requisições GET, o corpo geralmente está vazio, e os dados são passados pela URL.


Apreemos a importância do uso do try catch, para o tratamento de excessoes em um servidor back end:

      try{

         //Ação a ser executa que pode levantar exceção (ou seja, pode dar errado)
      }catch(erro){
      
        //Tratamento da exceção, ou retorno de resposta indicando a falha ocorrida
      }


Uso do thunder Client para teste de requisições, ex: envio de dados


uso da biblioteca MULTER para a manipulação de arquivos como imagens
  - Redirecionamento dos arquivos para pastas
  - Guardas os arquivos no próprio servido

Instalação do multer: npm install multer

os testes de envio de imagens foram feitos através da plataforma postaman devido a impossibilidade de envio de arquivos pelo thunder Client