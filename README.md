# MindEase — Cognitive Accessibility App

MindEase é uma aplicação projetada para **reduzir a sobrecarga cognitiva em ambientes digitais**, oferecendo uma experiência **guiada, previsível e adaptável** para usuários que enfrentam desafios relacionados a foco, ansiedade ou processamento de informação.

O projeto foi desenvolvido no contexto do **Hackathon da Pós-Graduação em Front-End Engineering da FIAP**, com foco em **acessibilidade cognitiva, experiência do usuário e arquitetura limpa**.

---

# Problema

Muitas plataformas digitais acabam gerando **sobrecarga mental**, causada principalmente por:

* Excesso de informação na interface
* Interfaces complexas e pouco previsíveis
* Falta de suporte para foco e organização mental
* Estímulos visuais excessivos
* Fluxos de interação pouco orientados

Esse problema impacta especialmente pessoas com:

* TDAH
* TEA (Transtorno do Espectro Autista)
* Dislexia
* Ansiedade digital
* Burnout
* Sobrecarga cognitiva

Como consequência, usuários podem experimentar **fadiga mental, dificuldade de concentração e aumento do estresse durante o uso de sistemas digitais**.

---

# Solução

MindEase propõe uma interface **minimalista, guiada e adaptativa**, projetada para reduzir a fadiga de decisão e ajudar o usuário a reorganizar seu estado cognitivo antes de iniciar uma atividade.

A experiência foi construída com base em princípios de **acessibilidade cognitiva**, priorizando:

* Simplicidade
* Previsibilidade
* Redução de estímulos
* Orientação gradual

O fluxo principal do aplicativo segue três etapas:

1. **Check-in emocional**
2. **Definição de foco cognitivo**
3. **Sessão guiada de respiração**

A experiência pode ser **adaptada ao perfil cognitivo do usuário**, ajustando níveis de complexidade e estímulos visuais.

---

# Funcionalidades

## Check-in Cognitivo

O usuário informa como está se sentindo no momento:

* Ansiedade
* Distração
* Sobrecarga

Essa etapa permite que a aplicação adapte a experiência ao estado atual do usuário.

---

## Definição de Prioridade Cognitiva

Após o check-in, o usuário seleciona o que precisa naquele momento:

* Clareza
* Foco
* Calma

Essa informação influencia a forma como a sessão guiada será conduzida.

---

## Sessão de Respiração Guiada

O aplicativo inicia uma sessão de respiração guiada para ajudar o usuário a:

* Reduzir estresse
* Reorganizar a atenção
* Estabilizar o ritmo cognitivo

A interface acompanha o ritmo da respiração por meio de **animações suaves e previsíveis**.

---

## Níveis de Complexidade

O usuário pode ajustar o nível de complexidade da interface:

* **Baixo** → interface mínima e foco no essencial
* **Médio** → equilíbrio entre orientação e simplicidade
* **Alto** → interface mais informativa

Esse recurso permite adaptar a aplicação a diferentes perfis cognitivos.

---

## Configurações de Acessibilidade

A aplicação inclui opções voltadas à personalização da experiência cognitiva:

* Modo foco
* Redução de animações
* Tema claro / escuro
* Modo daltônico
* Ajuste de complexidade da interface

Essas configurações permitem que o usuário **reduza estímulos ou aumente suporte visual conforme necessário**.

---

# Plataformas

O projeto possui duas aplicações dentro do mesmo repositório:

* 📱 **Mobile** — React Native + Expo
* 🌐 **Web** — React + Vite

---

# Arquitetura

O projeto segue princípios inspirados em **Clean Architecture**, garantindo separação clara entre camadas e responsabilidades.

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

Essa abordagem permite:

* Desacoplamento entre domínio e interface
* Maior testabilidade
* Facilidade de manutenção
* Evolução independente das camadas

---

# Stack Tecnológica

O projeto foi desenvolvido utilizando:

* **React Native**
* **Expo**
* **React**
* **Vite**
* **TypeScript**
* **Expo Router**
* **React Router**
* **Context API**
* **Clean Architecture**

A aplicação roda em:

* **Mobile (Android / iOS)**
* **Web**

---

# Estrutura do Projeto

```
mindease-app-fase5/
├── docs/
│   ├── 01_conceito.md
│   ├── 02_fluxo.md
│   ├── 03_arquitetura.md
│   ├── 04_stack.md
│   ├── 05_responsibilities.md
│   └── 06_design-system.md
│
├── figma/
│   Referência visual da interface
│
├── mobile/
│   Aplicação React Native (Expo)
│
├── web/
│   Aplicação Web (React + Vite)
│
└── src/
    Camadas de domínio e aplicação compartilhadas
```

---

# Documentação

A documentação conceitual e arquitetural do projeto está disponível em:

```
docs/
 ├── 01_conceito.md
 ├── 02_fluxo.md
 ├── 03_arquitetura.md
 ├── 04_stack.md
 ├── 05_responsibilities.md
 └── 06_design-system.md
```

Esses documentos descrevem:

* O conceito da solução
* O fluxo de experiência do usuário
* Decisões arquiteturais
* Organização das responsabilidades do sistema
* Princípios do design system utilizado

---

## Demonstração do Projeto
[Assista à apresentação completa no Google Drive](https://drive.google.com/file/d/15moVPwNkhSVvne8INn3S1evhY-dyQ_G3/view?usp=sharing)

---

Protótipo da interface no Figma:

https://www.figma.com/design/mKJU3AbHWYCCyqwy2INsAt/mindeasy-app-fase5

---

## Como Executar o Projeto Localmente

1. Clone o repositório:

```bash
git clone https://github.com/FIAP-GRUPO-7/mindease-app-fase5.git
cd mindease-app-fase5
```

2. Instale as dependências de cada aplicação.

### Aplicação Mobile

```bash
cd mobile
npm install
```

Inicie o projeto:

```bash
npm start
```

A aplicação pode ser executada em:

* Android (Expo Go)
* iOS (Expo Go)
* Emuladores
* Navegador via Expo Web

---

### Aplicação Web

```bash
cd web
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação será executada no navegador.

---

# Equipe

Projeto desenvolvido como parte do **Hackathon da FIAP — Pós-Graduação em Front-End Engineering**.

---

# Licença

Projeto acadêmico desenvolvido para **fins educacionais**.
