
# Significado dos codigos de Status:

## Faixa dos 100 (Precessamento e continuidade)
status(100) -> continue
status(102) -> Processando

## Faixa dos 100 (sucesso, criação, aceitação)
status(200) -> OK! (Tudo aconteceu conforme o esperado, devolução de dados);
status(202) -> Accepted
status(204) -> No Content

## Faixa dos 100 (Redirecionamentos)
status(300) -> Redirecionamentos

## Faixa dos 400 (Erros da faixa do cliente)
status(400) -> unauthorized
status(404) -> Not Found (O que você pediu não foi encontrado ou recurso inexistente)

## Faixa do 500 (Erros da faixa do servidor)
status(500) -> Internal Server Erro


Transformação de array de Objetos em javascript:
app.use(express.json()); // Indica que a aplicação usara formatação JSON


permite rodar o servidor sem de forma semelhante ao nodemon, ou seja o node acompanhar as alterações sempre rexecutando o servidor quando necessário:
node --watch server.js

Introdução ao MONGODB:
- Acesse o site: https://www.mongodb.com/pt-br/cloud/atlas/register
- Crie uma conta
- Faça o cadastro inicial
- Crie um Deploy de seu cluster (Ou seja public um grupo que gerenciará seu recursos):
  - Insira nome
  - Deixe marcado a opção "Automate security setup" (Automatização das configurações de segurança)
  - Desmarque "Preload sample dataset" (Pré-carregar conjunto de dados de amostra)
- Escolha o serviço de nuvem desejado para guardar seu banco de dados: AWS, Google Cloud (Minha Preferencia), Azure
- Sua região de Preferencia (São Paulo, Minha preferencia)
- Não há necessidade de inserir tags (Opcional)

- Crie um usuário e guarde bem a senha gerado (Será necessários essas credencias posteriormente para a manipulação do banco)
- Escolha um método de conexão: Driver (Opção de minha Preferencia), Compass, Shell. MongoDB for VS Code, Atlas SQL

Sera gerado um instalador de dependia node:
npm intall mongoldb

E uma String de conexão ao banco de dados mongoDB:
Algo proximo ao exemplo: mongodb+srv://\[YOU-NAME\]:\[YOU-ACCESS-KEY\]@\[YOU-CLUSTER\].w3wk6.mongodb.net/?retryWrites=true&w=majority&appName=\[YOU-CLUSTER\]

