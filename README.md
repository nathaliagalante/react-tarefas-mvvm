# Lista de Tarefas - React MVVM

Mini projeto de estudo desenvolvido com React e Vite para praticar a arquitetura MVVM (Model-View-ViewModel).

## Funcionalidades

- Adicionar tarefas;
- Marcar tarefas como concluídas;
- Remover tarefas;
- Filtrar tarefas por todas, pendentes ou concluídas;
- Exibir a quantidade de tarefas pendentes.

## Arquitetura

O projeto separa as responsabilidades em três partes:

- **Model:** representa uma tarefa e concentra regras relacionadas aos dados. Arquivo: `src/Model.js`.
- **ViewModel:** gerencia o estado da interface, processa as ações do usuário e fornece dados preparados para a tela. Arquivo: `src/ViewModel.jsx`.
- **View:** renderiza os componentes React e encaminha as interações para o ViewModel. Arquivo: `src/View.jsx`.

## Estrutura

```text
src/
  Model.js
  ViewModel.jsx
  View.jsx
  main.jsx
  style.css
```

## Como executar

Na pasta do projeto, instale as dependências e execute o servidor de desenvolvimento:

```bash
npm install
npm run dev
```
