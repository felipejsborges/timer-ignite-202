[Figma](https://www.figma.com/file/cnWBhgJ3ADZ6XNYSE9bZtA/Ignite-Timer-(Community)?node-id=0%3A1&t=Xm1ATfOUwPxmraBb-0)

[X] Clean unused files
[X] Install styled components, eslint, react-router-dom
[X] Create global style
[X] Create Default Layout
[X] Style Default Layout
[X] App Context
[X] Save state on storage
[X] Home page
[X] Create forms with react-hook-form and validation
[X] Implement countdown feature
[X] Set document.title with countdown time
[X] Interrupt a cycle
[X] History page
[X] List of suggestion in task title input

# Css In JS
- Styled components

# Styled Components
- Componentes estilizados, ou seja, ele sempre cria um componente: export Button = styled.button
- Precisa da extensão do styled components
- Serve para nao precisar usar um monte de classe
- Consigo cascatear as estilizações
- Estilo global é criado com arquivo ts tbm
```ts
// global.ts - precisa importar no App.tsx
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`...`
```
- Tem como criar temas, sem precisar usar as variáveis do css
- Quando usa ${} no css, da pra pegar as "props", e sempre tem tbm o "theme" dentro de "props"
- Não tipa automaticamente, precisa criar um arquivo de definição de tipos .d.ts
```
import 'styled-components';
import {defaultTheme} from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
```

# ESlint
- Precisa ter a extensão instala
- precisar ter a opção "editor.codeActionsOnSave": { "source.fixAll.eslint": true}

# Controlled vs Uncontrolled Inputs
- Controlled eu salvo o dado do input em um estado
	- Benefícios: facilmente tenho acesso ao valor; consigo criar efeitos colaterais quando houver alterações no input
	- Malefício: sempre que altera o estado, renderiza o componente novamente
- Uncontrolled eu nao preciso salvar em um estado
	- Benefícios: mais performance, pois não precisa renderizar o componente novamente
	- Malefício: perde a reatividade de quando está no estado

# React Hook Form
- Combina Controlled e Uncontrolled Inputs para ter reatividade e performance

# useEffect
- Usado para não repetir ações em diversas funções. Ex: add um item, chamo a API p atualizar a lista. removo um item, chamo a API p atualizar a lista. Mais fácil por um useEffect "escutando" o state da lista
- Cuidado quando estiver usando useEffect apenas para atualizar estado, sem depender de nenhuma outra ação, como uma request a API por exemplo

# Prop Drilling
- Quando tem muitas propriedades para comunicação entre componentes

# Context API
- Resolve o prop drilling
- Permite compartilhar informações com vários componentes
- Tem que estar no componente pai dos componentes que precisa das info que está no context
- O ideal é ser agnóstico a bibliotecas

# useReducer
- Quando tenho várias funções que atualizam mais de um estado
- Quando tenho um estado complexo para gerenciar
- Pra facilitar os actions, da pra usar o immer