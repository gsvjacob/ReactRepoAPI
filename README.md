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

A aplicação também apresenta um estado de carregamento enquanto os dados estão sendo buscados.

## 🔌 API utilizada

Foi utilizada a **JSONPlaceholder**, uma API REST gratuita para testes e estudos.

Endpoint utilizado:

```text
https://jsonplaceholder.typicode.com/todos?_limit=50
````

A API retorna uma lista de tarefas contendo informações como:

* `id` — identificador da tarefa;
* `title` — título da tarefa;
* `completed` — indica se a tarefa foi concluída.

## 🎨 Estilização

A interface foi estilizada utilizando **Bootstrap**, buscando manter um visual simples, limpo e organizado.

A estilização e a organização visual da aplicação foram realizadas com **auxílio de Inteligência Artificial (IA)**.

A IA foi utilizada especificamente como ferramenta de apoio na criação e melhoria da interface visual, enquanto a implementação da lógica de consumo da API foi desenvolvida utilizando React.

## 🛠️ Tecnologias utilizadas

* **React**
* **Vite**
* **JavaScript**
* **Bootstrap**
* **Fetch API**
* **JSONPlaceholder**
* **Git**
* **GitHub**
* **GitHub Pages**

## 🚀 Como executar localmente

Clone o repositório:

```bash
git clone https://github.com/gsvjacob/ReactRepoAPI.git
```

Entre na pasta do projeto:

```bash
cd ReactRepoAPI
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Depois, acesse o endereço informado pelo Vite, normalmente:

```text
http://localhost:5173/
```

## 📦 Publicação

O projeto foi publicado utilizando **GitHub Pages** e o pacote `gh-pages`.

Para gerar a versão de produção:

```bash
npm run build
```

Para publicar a aplicação:

```bash
npx gh-pages -d dist
```

## 📚 Objetivo

Este projeto foi desenvolvido como atividade de estudo de desenvolvimento web, com o objetivo de praticar:

* Consumo de APIs;
* Requisições assíncronas;
* Uso do `useEffect`;
* Gerenciamento de estado com `useState`;
* Renderização de listas utilizando `map()`;
* Estilização utilizando Bootstrap;
* Versionamento com Git e GitHub;
* Deploy utilizando GitHub Pages.
