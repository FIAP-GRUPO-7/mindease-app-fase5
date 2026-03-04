# MindEase — Cognitive Accessibility App

MindEase é uma aplicação projetada para **reduzir sobrecarga cognitiva em ambientes digitais**, oferecendo uma experiência guiada, previsível e adaptável para usuários que enfrentam desafios de foco, ansiedade ou processamento de informação.

O projeto foi desenvolvido no contexto do **Hackathon da Pós-Graduação em Front-End Engineering da FIAP**, com foco em **acessibilidade cognitiva e arquitetura limpa**.

---

# Problema

Muitas plataformas digitais criam **sobrecarga mental** devido a:

- Excesso de informação na interface
- Interfaces complexas e pouco previsíveis
- Falta de suporte para foco e organização mental
- Estímulos visuais excessivos

Esse problema impacta especialmente pessoas com:

- TDAH
- TEA (Autismo)
- Dislexia
- Burnout
- Ansiedade digital
- Sobrecarga cognitiva

---

# Solução

MindEase propõe uma interface **mínima, guiada e adaptativa**, que reduz a fadiga de decisão e ajuda o usuário a reorganizar seu estado cognitivo antes de iniciar uma tarefa.

O fluxo principal do aplicativo segue três etapas:

1. **Check-in emocional**
2. **Definição de foco**
3. **Sessão guiada de respiração**

A experiência se adapta ao nível de complexidade configurado pelo usuário, permitindo diferentes níveis de estímulo visual e informação.

---

# Funcionalidades

## Check-in Cognitivo

O usuário indica como está se sentindo no momento:

- Ansiedade
- Distração
- Sobrecarga

Isso permite adaptar a experiência da aplicação.

---

## Definição de Prioridade Cognitiva

O usuário seleciona o que precisa no momento:

- Clareza
- Foco
- Calma

---

## Respiração Guiada

O aplicativo inicia uma sessão de respiração guiada para reduzir estresse e reorganizar a atenção do usuário.

A interface acompanha o ritmo da respiração por meio de animações suaves.

---

## Níveis de Complexidade

O usuário pode ajustar o nível de complexidade da interface:

- **Baixo** → interface mínima, foco no essencial
- **Médio** → equilíbrio entre orientação e simplicidade
- **Alto** → interface mais informativa

Isso permite adaptar a aplicação a diferentes perfis cognitivos.

---

## Configurações de Acessibilidade

O usuário pode personalizar a experiência com:

- Modo foco
- Redução de animações
- Tema claro / escuro
- Nível de complexidade da interface

---

# Arquitetura

O projeto segue princípios de **Clean Architecture**, com separação clara entre camadas:

```
src
 ├── domain
 │    Entidades e regras de negócio
 │
 ├── application
 │    Casos de uso e lógica de orquestração
 │
 └── presentation
      Componentes e interface do usuário
```

Essa estrutura garante que o domínio permaneça **independente de frameworks** e facilita manutenção, testes e evolução do sistema.

---

# Stack Tecnológica

- **React Native**
- **Expo**
- **TypeScript**
- **Expo Router**
- **Context API**
- **Clean Architecture**

A aplicação roda em:

- **Mobile (Android / iOS)**
- **Web (via Expo Web)**

---

# Estrutura do Projeto

```
docs/
    Documentação conceitual e arquitetural do projeto

mobile/
    Aplicação React Native

src/
    Camadas de domínio e aplicação

figma/
    Referência visual da interface
```

---

# Documentação

A documentação completa do projeto está disponível em:

```
docs/
 ├── 01_conceito.md
 ├── 02_fluxo.md
 ├── 03_arquitetura.md
 ├── 04_stack.md
 ├── 05_responsibilities.md
 └── 06_design-system.md
```

---

# Referência Visual

Figma do projeto:

https://www.figma.com/design/mKJU3AbHWYCCyqwy2INsAt/mindeasy-app-fase5

---

# Como Rodar o Projeto

Instale as dependências:

```
cd mobile
npm install
```

Iniciar aplicação:

```
npm start
```

Rodar versão web:

```
npm run web
```

---

# Equipe

Projeto desenvolvido como parte do **Hackathon da FIAP — Pós-Graduação em Front-End Engineering**.

---

# Licença

Projeto acadêmico desenvolvido para fins educacionais.