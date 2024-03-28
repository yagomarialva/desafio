# Livraria - README

Este é um projeto de uma livraria moderna, com um backend e frontend, onde os livros são gerenciados.

## Pré-requisitos

- Docker instalado na máquina local ([Docker Installation Guide](https://docs.docker.com/get-docker/))

## Como Executar

Certifique-se de estar na raiz do projeto onde se encontra o arquivo `docker-compose.yml` e execute os seguintes comandos no terminal:

1. Construir e subir os contêineres:
    ```bash
    docker-compose up --build
    ```

Isso criará e executará os contêineres do PostgreSQL, backend e frontend.

A aplicação frontend estará disponível em `http://localhost:3001`.

## Como Parar e Remover os Contêineres

Para parar e remover os contêineres, execute o seguinte comando na raiz do projeto:

```bash
docker-compose down
```

Isso irá parar e remover os contêineres criados pelo Docker Compose.

## Acesso ao Banco de Dados PostgreSQL

O contêiner do PostgreSQL estará acessível na porta padrão `5432`. Você pode acessá-lo usando qualquer cliente PostgreSQL, como o `psql`, usando as credenciais abaixo:

- **Host:** localhost
- **Porta:** 5432
- **Usuário:** admin
- **Senha:** admin
- **Banco de Dados:** livraria

## Estrutura do Projeto

- `livraria-backend`: Contém o código-fonte do backend da aplicação.
- `livraria-frontend`: Contém o código-fonte do frontend da aplicação.

## Informações Adicionais

- Certifique-se de que as portas `3000` e `3001` em sua máquina local estejam disponíveis, pois essas são as portas em que o backend e o frontend serão executados, respectivamente.
- Para parar e remover os contêineres, consulte a seção "Como Parar e Remover os Contêineres" acima.
- Para obter mais informações sobre o Docker Compose, consulte a [Documentação Oficial do Docker Compose](https://docs.docker.com/compose/).

## Requisições Disponíveis

Endpoints disponíveis no backend para interagir com os recursos de livros.

### Requisições GET:

1. **Listar todos os livros:**
   - Método: GET
   - URL: `http://localhost:3000/livros`

### Requisições POST:

1. **Adicionar um novo livro:**
   - Método: POST
   - URL: `http://localhost:3000/livros`
   - Corpo da requisição:
     ```json
     {
       "titulo": "Título do Livro",
       "autor": "Autor do Livro",
       "ano": "Ano do Livro"
     }
     ```

### Requisições PUT:

1. **Atualizar um livro existente:**
   - Método: PUT
   - URL: `http://localhost:3000/livros/:id` (Substitua `:id` pelo ID do livro que deseja atualizar)
   - Corpo da requisição:
     ```json
     {
       "titulo": "Novo Título do Livro",
       "autor": "Novo Autor do Livro",
       "ano": "Novo Ano do Livro"
     }
     ```

### Requisições DELETE:

1. **Excluir um livro:**
   - Método: DELETE
   - URL: `http://localhost:3000/livros/:id` (Substitua `:id` pelo ID do livro que deseja excluir)

# Livraria Backend - Login

Este é o backend para um sistema de login simples, que fornece endpoints para autenticação de usuários.

## Requisições Do Login

Aqui estão os endpoints disponíveis no backend para autenticação de usuários.

### Requisições POST:

1. **Login de usuário:**
   - Método: POST
   - URL: `http://localhost:3000/api/auth/login`
   - Corpo da requisição:
     ```json
     {
       "username": "nome_de_usuario",
       "password": "senha_do_usuario"
     }
     ```

   - Resposta de sucesso:
     ```json
     {
       "token": "token_de_autenticacao"
     }
     ```

   - Resposta de erro:
     ```json
     {
       "error": "Mensagem_de_erro"
     }
     ```

2. **Cadastro de novo usuário:**
   - Método: POST
   - URL: `http://localhost:3000/api/auth/register`
   - Corpo da requisição:
     ```json
     {
       "username": "novo_nome_de_usuario",
       "password": "nova_senha_do_usuario"
     }
     ```

   - Resposta de sucesso:
     ```json
     {
       "message": "Usuário cadastrado com sucesso"
     }
     ```

   - Resposta de erro:
     ```json
     {
       "error": "Mensagem_de_erro"
     }
     ```


---
Este projeto foi desenvolvido com Docker e Docker Compose. Se você tiver algum problema ou dúvida, sinta-se à vontade para entrar em contato.
```
