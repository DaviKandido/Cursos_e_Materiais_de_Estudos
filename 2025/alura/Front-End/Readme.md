

# Voltando ao basico HTML, CSS e JS

- Nesta semana a Alura abriu as portas as pra uma oportunidade preciosíssima, com mais uma de suas imersões
  enriquecedoras, no qual vi uma oportunidade de aproveitar para refoçar minha base em tecnologias front-end
  e claro aprender algo novo com os incríveis professores Fernanda Degolin (Dev front-end na globo), Mayara Cardoso (Dev front-end no itau) e Guilherme Lima (Desenvolvedor de software e instrutor da Alura)


Dependência de JsonServer: 
  - npm i json-server -g

Para subir a pasta da API no jsonServer
  - json-server --watch api-artists/artists.json --port 8000


Para criar projetos React
  - npx create-react-app \[nome da aplicação\]


Para rodar o jsonServer junto do front-end:
   - npm install concurrently --save-dev


  "scripts": {
    "dev": "concurrently \"next dev --turbopack\" \"json-server --watch api-artists/artists.json --port 8000\"",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
