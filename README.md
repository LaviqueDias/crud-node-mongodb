<h1 align="center">
  CRUD-NODE-MONGODB
</h1>


Este projeto consiste em uma aplicação web simples para gerenciamento de pessoas, desenvolvida com Node.js e estruturada com o auxílio do express-generator. A aplicação permite realizar operações básicas de CRUD (Create, Read, Update, Delete), como adicionar, visualizar, editar e remover registros de pessoas contendo informações como nome e idade. O MongoDB Community Server é utilizado como banco de dados para armazenamento persistente.


## Tecnologias
 
- [NodeJs](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Dependências utilizadas

- **cookie-parser**: Gerenciamento de cookies.
- **debug**: Utilitário para debug em Node.js.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **ejs**: Template engine para renderização de páginas dinâmicas.
- **express**: Framework web para criação da aplicação.
- **http-errors**: Criação de erros HTTP personalizados.
- **mongodb**: Driver oficial do MongoDB para Node.js.
- **morgan**: Middleware para registro de logs HTTP.

## Instalação e Configuração

1. Tenha o Node.js e o MongoDB Community Server instalados na sua máquina.
2. No mesmo nível da pasta "bin"(que veio na instalação do seu MongoDB Community Server) crie uma pasta chamada "data", onde os dados irão ficar armazenados. Entre na pasta "bin" e Inicialize o servidor do MongoDB utilizando o comando:
```
./mongod --dbpath /home/lavique/mongodb-linux-x86_64-amazon2023-8.0.4/data
```
4. Clone o repositório:
```
git clone https://github.com/seuusuario/seuprojeto.git
cd seuprojeto
```
3. Instale as dependências:
```
npm install
```
4. Configure o arquivo .env com a URL de conexão ao MongoDB e o nome do seu Banco de Dados:
```
MONGO_URI=mongodb://27.0.0.1:27017
MONGO_DATABASE=nome_do_seu_banco_de_dados
```
5. Inicie o servidor:
```
npm start
```
6. Acesse a aplicação em http://localhost:3000

## API Endpoints

Para fazer as requisições HTTP abaixo, fiz uma interface web básica. Contudo, caso deseje, pode utilizar qualquer ferramente que teste API's, como o [postman](https://www.postman.com/):

- Registrar Pessoa 
```
URL: http://localhost:3000/save
Método HTTP: POST

Body:

  {
    "name": "People 1",
    "age" : "10"
  }
```

- Listar Pessoas
```
URL: http://localhost:3000/
Método HTTP: GET
```

- Atualizar Pessoa
```
URL: http://localhost:3000/update
Método HTTP: POST

Body:

  {
    "id" : "678d6199573e40b8c77dcec0",
    "name" : "People 1 Atualizado",
    "age" : 50
  }
```

- Deletar Pessoa
```
URL: http://localhost:3000/delete
Método HTTP: POST

Body:

  {
    "id" : "678d6199573e40b8c77dcec0" 
  }
```
