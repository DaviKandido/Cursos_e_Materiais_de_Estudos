
# DIA 5

Finialização do projeto, Publicação no Google Cloud: configuração de API e Integração com o Gemini

torna a pasta acessavel:
- app.use(express.static("uploads"));

Exemplo de acesso: 
- http://localhost:3000/uploads/${id}.png

Uso da api do gemini para gerar descrições para as imagens:
- instalação da dependência:
    npm i @google/generative-ai

- criação de uma pasta service com um aquivo chamado geminiService, que fico responsável em usar a api do gemini para gerar descrições
para as imagens 

ou seja agora a estrutura de pastas do projeto projeto será:

┣ 📂 node_modules: (Gerar Descrição)

📂 src 
┣ 📂 config: Configurações do projeto, como a conexão com o banco de dados. 
┣ 📂 controllers: Funções que lidam com a lógica de negócio. 
┣ 📂 models: Interação com o banco de dados. 
┣ 📂 routes: Configuração das rotas da API.
┣ 📂 service: Serviços/APIs utilizadas

📂 uploads: imagens guardadas no servidor

- .gitignore
- package-lock.json
- package.json
- server.js


Medidas de segurança como CROSS-ORIGIN RESOUCE SHARING (CORS) ou seja, medida de segurança para o compartilhamento de origem cruzada
    - Garante que apenas o meu servidor tera acesso as rotas e requisições oferecidas

baixar a biblioteca do cors
    - npm i cors


## Linkagem com o Front-End

linkamos o projeto ao front-end:
    - Abrimos a pasta do projeto em uma janela separada
    - No terminal do front end fazer a instalação do projeto: npm i
    - criamos um arquivo .env que conterá a url de acesso de api feita no back-end


## Subida do projeto na Clound (CLound run)

Preparamos ela para subi-la para a google cloud
  - baixou se a biblioteca dotenv no back-end (para garantir que a cloud acesse as variaveis de ambiente)
  - npm intall dotenv
  - importou a biblioteca no postModel: import 'dotenv/config';
  - criou-se um arquivo service.sh na raiz do projeto

Mudou-se o acesso do banco de dados do MongoDB para permitir o acesso do google Cloud
    - Acessou-se o projeto no Atlas do mongoDB
    - Na aba security em Network Access
    - Editou-se o IP (IP address) de acesso ao banco 

Acessou-se o site da google cloud
No terminal (Shell), no canto superior direito
    - Clonou-se o repositório do projeto: 
      - git clone \[Caminho_de_Acesso_ao_Repositório\]
  
    - Em seguida entrou-se no diretório clonado:
      - ls
      - cd \[Nome_do_Repositorio\]/
  
    - Rodou-se o arquivo sh:
      - bash service.sh

Abriu-se o editor (conto superior central do terminal [shell do Cloud])
Criou-se os arquivos de variáveis de ambiente novamente: .env
removeu o arquivo de .gitignore (Evita quebra de processos pela Cloud): 
    - cat .gitignore
    - rm .gitignore
  
Reestalou as dependências:
    - npm install
  
Chamado do serviço da cloud:
    - gclound run deploy --source . --port=3000

gcloun: Chama o serviço cloud
run: Para rodar/iniciar
deploy: O que vamos fazer (colocar na nuvem)
--source: deploy a partir de uma base de codigo fonte
. : diretório que esta
--port=3000: em que porta o serviço esta rodando (e padrão do cloud usar a 8000)

Em seguida ele pedira um nome (caso seja o mesmo da pasta só confirme)
Depois escolha onde será feito o deploy:
    - 30 (opção para a america do sul em São Paulo)

Depois pergutara se quer que qualquer pessoa acesse a API:
    - y (como padrão)

A cloud devolvera uma url de acesso a alicação onde podera ser usado cada rota
  - ex: back-end-instabytes-\[Numero_Clound\].\[Servidor_de_Deploy\].run.app/\[rota\]