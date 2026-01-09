PT-BR:
# MindEase — Visão Geral da Arquitetura

Este documento define a estrutura arquitetural do aplicativo MindEase,
garantindo consistência cognitiva, escalabilidade e separação clara de responsabilidades.

---

## Princípios Arquiteturais

- Design orientado a comportamento  
- Domínio cognitivo isolado da interface  
- Separação clara entre as camadas de domínio, aplicação e interface  
- Lógica compartilhada entre as plataformas Web e Mobile  

---

## Arquitetura em Camadas

### 1. Camada de Domínio

A camada de domínio representa o modelo cognitivo da aplicação.  
Ela não contém dependências de UI, frameworks ou infraestrutura.

Responsabilidades:
- Definir estados cognitivos  
- Definir regras de sessão  
- Definir comportamentos centrais  

Elementos principais:
- Entidade `CognitiveState`  
- Entidade `Session`  
- Casos de uso relacionados à transição de estados  

---

### 2. Camada de Aplicação

Esta camada orquestra os casos de uso do domínio e controla o fluxo da aplicação.

Responsabilidades:
- Iniciar e encerrar sessões  
- Alterar estados cognitivos  
- Coordenar a execução guiada  

Essa camada atua como a ponte entre a interface e a lógica de domínio.

---

### 3. Camada de Infraestrutura

Responsável por lidar com preocupações externas ao domínio.

Responsabilidades:
- Persistência (local storage, async storage)  
- Temporizadores  
- Adaptadores de notificação  

Essa camada **nunca** contém regras de negócio.

---

### 4. Camada de Interface (UI)

Representa a forma como os usuários interagem com o sistema.

Responsabilidades:
- Renderizar a interface com base no estado atual  
- Encaminhar ações do usuário para a camada de aplicação  
- Nunca implementar lógica cognitiva diretamente  

As interfaces Web e Mobile consomem os mesmos contratos da aplicação.

---

## Casos de Uso Principais

- `StartSession`  
- `ChangeCognitiveState`  
- `ExecuteTask`  
- `EndSession`  

Cada caso de uso é independente de UI e plataforma.

---

## Fluxo de Dados

Ação do Usuário → UI  
UI → Camada de Aplicação  
Aplicação → Domínio  
Domínio → Aplicação  
Aplicação → UI  

A interface reage às mudanças de estado, mas não decide comportamentos.

---

## Objetivo Arquitetural

Garantir que o sistema sempre assuma as decisões cognitivas,
protegendo o usuário de complexidade desnecessária e fadiga de decisão.


EN:
# MindEase — Architecture Overview

This document defines the architectural structure of the MindEase application,
ensuring cognitive consistency, scalability, and separation of concerns.

---

## Architectural Principles

- Behavior-driven design
- Cognitive domain isolated from UI
- Clear separation between domain, application, and interface layers
- Shared logic between Web and Mobile platforms

---

## Layered Architecture

### 1. Domain Layer

The domain layer represents the cognitive model of the application.
It contains no UI, framework, or infrastructure dependencies.

Responsibilities:
- Define cognitive states
- Define session rules
- Define core behaviors

Main elements:
- CognitiveState entity
- Session entity
- Use cases related to state transitions

---

### 2. Application Layer

This layer orchestrates domain use cases and controls the application flow.

Responsibilities:
- Start and end sessions
- Change cognitive states
- Coordinate guided execution

This layer acts as the bridge between UI and domain logic.

---

### 3. Infrastructure Layer

Handles external concerns.

Responsibilities:
- Persistence (local storage, async storage)
- Timers
- Notification adapters

This layer never contains business rules.

---

### 4. Interface Layer (UI)

Represents how users interact with the system.

Responsibilities:
- Render interface based on current state
- Forward user actions to application layer
- Never implement cognitive logic directly

Web and Mobile interfaces consume the same application contracts.

---

## Core Use Cases

- StartSession
- ChangeCognitiveState
- ExecuteTask
- EndSession

Each use case is independent of UI and platform.

---

## Data Flow

User Action → UI  
UI → Application Layer  
Application → Domain  
Domain → Application  
Application → UI  

The UI reacts to state changes but does not decide behavior.

---

## Architectural Goal

Ensure that the system always assumes cognitive decisions,
protecting the user from unnecessary complexity and decision fatigue.
