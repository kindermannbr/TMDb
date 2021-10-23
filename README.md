# Explicação sobre o projeto:

Este projeto tem o intuito de buscar informações de filmes, utilizando a API do site https://www.themoviedb.org/?language=pt-BR

## Pré requisitos:

Antes de iniciar o projeto, você precisará gerar chaves da API, conforme é explicado nesse vídeo: https://www.youtube.com/watch?v=mbImkkJFxBs

Toda a documentação da API, está no link https://developers.themoviedb.org/3/getting-started/introduction

## Como rodar o projeto:

Obs.: todo o projeto deve ser utilizado localmente (localhost).

Há o arquivo server.js criando uma API, utilizando a porta 8000, com isso sendo necessário acessar a API no endereço http://localhost:8000

Primeiro inicie o node no arquivo server.js. *Comando:* node .\src\server.js

Para ter certeza se a API está disponível, acesse http://localhost:8000 no seu navegador.
Caso retorne json, a API está acessível.

Após o passo acima, você pode abrir o arquivo index.html no seu navegador, que irá apresentar algumas imagens, títulos e data de lançamento do filme.

Obs.: foi utilizando try catch no projeto, com isso caso apresente algum problema, será informado no console do navegador.

## Arquivo findmovie.js

O arquivo findmovie.js foi criado, para exemplo de como chamar a API, buscando um filme específico.
Você precisará passar o ID do filme, como parâmetro da API.