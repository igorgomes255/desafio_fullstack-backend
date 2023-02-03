# desafio_fullstack-backend

## Inicializando o projeto

#

<br>
<h1><b>1) .ENV </b></h1>
<br>

### Após clonar o repositorio para a sua maquina, é preciso adicionar um arquivo chamado .env e colocar as seguintes informações nele

```
SECRET_KEY=sua_secret_key

POSTGRES_HOST=localhost
POSTGRES_USER=seu_usuario_postgres
POSTGRES_PASSWORD=sua_senha_postgres
POSTGRES_PORT=sua_porta_postgres
POSTGRES_DB=_seu_banco_de_dados_postgres
```

<br>
<h1><b>1.2) Comandos </b></h1>
<br>

### Após colocar o env teremos que instalar as dependências do package.json através do comando `yarn`

### Após ter todas as dependências instaladas você poderá rodar as migrações afim de persistir as tabelas no banco de dados atráves do seguinte comando `yarn typeorm migration:run -d src/data-source.ts`

### Se até aqui deu tudo certo, rode o comando `yarn dev` para iniciar o servidor e poder consumir a API

---

<br>
<h1><b>2) Rotas da API </b></h1>
<br>

<h2 align ='center'> Criar usuário </h2>

`POST /user`

#

### Essa rota precisa passar obrigatoriamente um "full_name, email, password e phone".

```json
{
  "full_name": "User",
  "email": "user@gmail.com",
  "password": "123",
  "phone": "00999000000"
}
```

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 201 CREATED`

```json
{
  "full_name": "User",
  "email": "user@gmail.com",
  "phone": "00999000000",
  "id": "5085002c-17ce-4a7c-9197-6fa9343a97ca",
  "createdAt": "2023-01-30T20:26:30.616Z"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso já tenha e-mail cadastrado

` FORMATO DA RESPOSTA - STATUS 400 BAD REQUEST`

```json
{
  "message": "Email Already Exists"
}
```

Caso não tenha preenchido o full_name, email, password ou phone

` FORMATO DA RESPOSTA - STATUS 400 BAD REQUEST`

```json
{
  "message": "full_name is a required field"
}
```

#

<h2 align ='center'> Login usuário </h2>

`POST /login`

#

```json
{
  "email": "user@gmail.com",
  "password": "123"
}
```

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 201 CREATED`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imlnb3IzQGdtYWlsLmNvbSIsImlhdCI6MTY2NzMwNjg2MywiZXhwIjoxNjY3MzkzMjYzLCJzdWIiOiI2MDEwZGFlNy00NmM3LTRkMDMtYWEyYS1mZmY0OGVlZDgyNDQifQ.ILJAeWbdpucEqsdWow198hFFKJ6u3be2hTLnVp3kI2E"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso o e-mail ou senha estejam errados

` FORMATO DA RESPOSTA - STATUS 403 FORBIDDEN`

```json
{
  "message": "Wrong email/password"
}
```

#

<h2 align ='center'> Listar usuário </h2>

`GET /users/profile`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### Retorna apenas o seu próprio usuário.

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 OK`

```json
{
  "full_name": "User",
  "email": "user@gmail.com",
  "phone": "00999000000",
  "id": "5085002c-17ce-4a7c-9197-6fa9343a97ca",
  "createdAt": "2023-01-30T20:26:30.616Z"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h2 align ='center'> Atualizar informações do usuário </h2>

`PATCH /users/profile`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### Essa rota só pode ser atualizado pelo próprio usuário. É preciso informar name, email ou phone para atualizar algum desses campos

```json
{
  "full_name": "Usuário"
}
```

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 OK`

```json
{
  "message": "User updated"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h2 align ='center'> Deletar um usuário </h2>

`DELETE /users/profile`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### O usuário dono pode deletar apenas o seu próprio usuário

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 204 NO CONTENT`

```json
No body returned for response
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h2 align ='center'> Criar contato </h2>

`POST /contact`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### O usuário logado pode cadastrar seus contatos passando as seguintes informações: full_name,

### phone e email

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 201 CREATED`

```json
{
  "full_name": "usuario",
  "email": "usuario@gmail.com",
  "phone": "00992002020",
  "id": "6ad25d13-3e79-4430-b917-82c57f3eaf5f",
  "createdAt": "2023-02-03T15:54:31.144Z"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

Caso já tenha um contato salvo com o mesmo email

` FORMATO DA RESPOSTA - STATUS 400 BAD REQUEST`

```json
{
  "message": "Email already exists"
}
```

<h2 align ='center'> Listar todos os contatos </h2>

`GET /contact`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### O usuário logado poderá listar todos os seus contatos salvos

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 OK`

```json
[
  {
    "full_name": "usuario",
    "email": "usuario@gmail.com",
    "phone": "00992002020",
    "id": "6ad25d13-3e79-4430-b917-82c57f3eaf5f",
    "createdAt": "2023-02-03T15:54:31.144Z"
  },
  {
    "full_name": "usuario2",
    "email": "usuario2@gmail.com",
    "phone": "00992005050",
    "id": "e7b40fad-0b48-401d-811e-e77f2f35aa98",
    "createdAt": "2023-02-03T16:00:04.602Z"
  }
]
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

<h2 align ='center'> Atualizar informações dos contatos </h2>

`PATCH /contact/:id`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### Não é possível atualizar contatos de outros usuários, somente os seus. É preciso passar full_name, phone ou email para atualizar os dados de contato.

```json
{
  "full_name": "Usuário"
}
```

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 OK`

```json
{
  "message": "Contact updated"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h2 align ='center'> Deletar um contato </h2>

`DELETE /contact/:id`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### O usuário dono poderá deletar seus contatos

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 204 NO CONTENT`

```json
No body returned for response
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```
