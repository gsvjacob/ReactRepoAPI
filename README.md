# Projeto API - React

Projeto desenvolvido em React com o objetivo de praticar o consumo de APIs utilizando `fetch` e `useEffect`.

## 🌐 Acesso ao projeto

Você pode acessar o projeto publicado no GitHub Pages:

🔗 [projeto-api](https://gsvjacob.github.io/ReactRepoAPI/)

## 📌 Sobre o projeto

O projeto realiza uma requisição para a API **JSONPlaceholder** e exibe uma lista de tarefas na tela.

As tarefas são carregadas utilizando:

- `useState` para armazenar os dados;
- `useEffect` para realizar a requisição ao carregar a página;
- `fetch` para consumir a API;
- `map()` para percorrer e exibir as tarefas.

A aplicação também apresenta o estado de carregamento enquanto os dados estão sendo buscados.

## 🔌 API utilizada

Foi utilizada a **JSONPlaceholder**, uma API REST gratuita para testes e estudos.

Endpoint utilizado:

```text
https://jsonplaceholder.typicode.com/todos?_limit=50