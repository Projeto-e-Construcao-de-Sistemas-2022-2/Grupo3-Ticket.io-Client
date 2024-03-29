###### <p align="center">[Projetos e Construção de Sistemas 2022.2](https://github.com/Projeto-e-Construcao-de-Sistemas-2022-2)</p>

<img src="./logo-light.png#gh-light-mode-only" alt="logo" style="width:100%">
<img src="./logo-dark.png#gh-dark-mode-only" alt="logo" style="width:100%">

###  [Repositório Backend 🖥️](https://github.com/Projeto-e-Construcao-de-Sistemas-2022-2/Grupo3-Ticket.io-Server) | [Repositório Frontend 💻](https://github.com/Projeto-e-Construcao-de-Sistemas-2022-2/Grupo3-Ticket.io-Client)

Aplicação web com soluções de gerenciamento de problemas voltados para desenvolvedores divididos em grupos solucionadores

## 👥 Grupo 3 
Clara Thais, Arlindo Soares, Renan Lima, Yuri Campos, Mariana Duarte

## ✏️ Protótipo do projeto
[https://balsamiq.cloud/sm9h52j/pbcq60x/r6B5C](https://balsamiq.cloud/sm9h52j/pbcq60x/r6B5C)

## 🌎 Implementação do projeto
[https://ticket-io-front-git-dev-jrmsrs.vercel.app](https://ticket-io-front-git-dev-jrmsrs.vercel.app)

## ❓ Guia
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### ⚙️ Pré-requisito
- [Node.js](https://nodejs.org/pt-br/) instalado na máquina
- [Ticket.io-Server](https://github.com/Projeto-e-Construcao-de-Sistemas-2022-2/Grupo3-Ticket.io-Server) rodando
- Autenticação e Realtime DataBase do [Google Firebase](http://firebase.google.com/) 

### 🔽 Instalação
Na pasta do projeto, execute o comando:

`npm install`

O Node.js instalará todas as dependências e frameworks listados em package.json.

Crie um arquivo '.env'  
`cat .env`

Coloque a variável de ambiente da url do backend (localhost:5000 por padrão) nesse arquivo seguindo o template:

```
REACT_APP_SERVER=http://localhost:5000

# Credenciais do Firebase
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=

# Endpoint do Realtime Database com todas as permissões
REACT_APP_RTDB_ENDPOINT=
```

O projeto estará pronto para ser compilado.

### 🚀 Rodar o projeto

Na pasta do projeto, execute o comando:

`npm start`

O aplicativo rodará em modo desenvolvimento e redirecionará para o navegador em [http://localhost:3000](http://localhost:3000).  

A página irá recarregar sempre que houver mudança em algum arquivo.