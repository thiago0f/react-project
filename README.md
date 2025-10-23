# React Ads - Componentes no React

Este projeto foi criado como parte do trabalho sobre Componentes no React. O objetivo é demonstrar os conceitos básicos do React, criando uma aplicação utilizando componentes funcionais.

## Estrutura do Projeto

Todos os componentes estão organizados dentro da pasta `./src/components`:

- [Header.jsx](src/components/Header.jsx) - Componente de cabeçalho
- [AdCard.jsx](src/components/AdCard.jsx) - Componente para exibir um anúncio individual
- [AdList.jsx](src/components/AdList.jsx) - Componente para exibir uma lista de anúncios
- [Footer.jsx](src/components/Footer.jsx) - Componente de rodapé
- [Layout.jsx](src/components/Layout.jsx) - Componente de layout principal

## Conceitos Aplicados

1. **Componentes Funcionais** - Todos os componentes foram criados como componentes funcionais do React
2. **Props** - Uso de props para passar dados entre componentes
3. **Children** - Uso da propriedade children para composição de componentes
4. **Estilização** - Cada componente possui seu próprio arquivo CSS

## Tecnologias Utilizadas

- React
- Vite
- CSS

## Como Executar

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento: `npm run dev`

## Estrutura de Componentes

```
App
└── Layout
    ├── Header
    ├── AdList
    │   └── AdCard (múltiplos)
    └── Footer
```