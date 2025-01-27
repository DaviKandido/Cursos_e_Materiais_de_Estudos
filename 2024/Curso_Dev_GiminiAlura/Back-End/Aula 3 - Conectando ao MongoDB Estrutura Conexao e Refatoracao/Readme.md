
# DIA 3

Como dito anteriormente escolhemos como opção de banco de dados em nuvem o mongoDB
Para importar as dependências do mongo no projeto utilizou:
 - npm install mongodb

Volte a acessa o site do mongoDB atlas e siga esses passo:
  - Vá em add data (Adicionar dados)
  - Create database on Atlas (Criar base de dados com o Atlas)
  - De um nome e insira uma coleção a base de dados

Na pasta do projeto crie um arquivo .env para servir para guardar as variáveis de ambiente
   -  e coloque dentro desse arquivo algo parecido com isso:
      -  STRING_CONEXAO = mongodb+srv://\[YOU-NAME\]:\[YOU-ACCESS-KEY\]@\[YOU-CLUSTER\].w3wk6.mongodb.net/?retryWrites=true&w=majority&appName=\[YOU-CLUSTER\]

Após isso no package.json e,m scripts insira essa linha de comando

  "scripts": {
    "dev": "node --watch --env-file=.env server.js",
    "test": ""
  },


Agora sempre que for executar o seu projeto use:
  - npm run dev 
  - ou seja, executando a linha de comando contida em scripts->dev

Para acessa a variável de ambiente contida em .env basta usar: process.env.\[Nome da variável\]

obs: lembre-se de ter em um arquivo .gitignore as seguintes informações:
  - node_modules
  - .env


Crie duas pasta em seu projeto:
  - src e dentro dela outra chamada config
  - Dentro da pasta config crie um arquivo .js que servira de conexão ao banco de dados ex: dbCondig.js

Ou seja aprendemos uma estrutura de pastas responsáveis pela separação de responsabilidades

# Estrutura de Pastas do Projeto

Esta organização segue um padrão comum de arquitetura em projetos Node.js. Ela separa responsabilidades e mantém o código modular e organizado.

---

## **1. Pasta `src`**
Contém o código-fonte principal da aplicação. Dentro dela estão subpastas para diferentes camadas do projeto.

### **a. `config`**
- **Propósito:** Armazena configurações do projeto, como conexão com o banco de dados, variáveis de ambiente ou outras configurações globais.
- **Exemplo de funcionalidade:** Configurar o acesso ao MongoDB ou carregar as variáveis do `.env`.

### **b. `controllers`**
- **Propósito:** Contém os *controladores*, que lidam com a lógica de negócio da aplicação e processam as requisições HTTP.
- **Arquivo destacado:** `postsController.js`  
  **Função:** Controla as operações relacionadas aos posts, como listar, criar ou editar posts.

### **c. `models`**
- **Propósito:** Define os *modelos de dados*, ou seja, a estrutura dos dados e sua interação com o banco de dados.
- **Arquivo destacado:** `postsModel.js`  
  **Função:** Interage diretamente com a coleção de `posts` no banco de dados.

### **d. `routes`**
- **Propósito:** Define as rotas da API, mapeando os endpoints HTTP para as funções do controlador.
- **Arquivo destacado:** `postsRouts.js`  
  **Função:** Configura os endpoints relacionados aos posts, como `/posts`, `/posts/:id`, etc.

---

## **2. Arquivo `.env`**
- **Propósito:** Armazena variáveis sensíveis, como credenciais de banco de dados ou chaves de API, fora do código-fonte.
- **Importância:** Evita que informações confidenciais sejam expostas em repositórios públicos.

---

## **3. Pasta `node_modules`**
- **Propósito:** Gerenciada pelo npm, contém todas as dependências do projeto instaladas.
- **Importância:** Facilita a reutilização de bibliotecas de terceiros no desenvolvimento.

---

## **4. Arquivo `package.json` e `package-lock.json`**
- **Propósito:**  
  - `package.json`: Define as dependências, scripts e metadados do projeto.  
  - `package-lock.json`: Garante a consistência das versões das dependências.
- **Importância:** Controlam o ambiente de desenvolvimento.

---

## **5. Arquivo `server.js` ou `server.ts`**
- **Propósito:** Arquivo principal da aplicação, onde o servidor é configurado e iniciado.
- **Diferença:**
  - `server.js`: Versão em JavaScript.

---

## **Importância da Estrutura**
1. **Separação de responsabilidades:** Facilita o desenvolvimento, manutenção e testes do código.
2. **Escalabilidade:** Permite adicionar novas funcionalidades sem bagunçar o projeto.
3. **Padrão reconhecível:** Ajuda outros desenvolvedores a entenderem rapidamente a estrutura do projeto.

