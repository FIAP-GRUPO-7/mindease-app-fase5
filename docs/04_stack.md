PT-BR:
# MindEase — Stack de Tecnologia

Este documento define a stack de tecnologia utilizada no projeto MindEase,
alinhada aos objetivos de acessibilidade cognitiva e aos princípios de arquitetura limpa.

---

## Princípios Centrais da Stack

- Previsibilidade acima de novidade  
- Simplicidade acima de abstração  
- Lógica compartilhada entre plataformas  
- Baixa carga cognitiva para desenvolvedores e usuários  

---

## Aplicação Web

- Framework: Next.js  
- Linguagem: TypeScript  
- Estilização: CSS Modules (ou Tailwind com controle rigoroso)  
- Gerenciamento de Estado: React Context + Camada de Aplicação  
- Acessibilidade: HTML semântico nativo + animações controladas  

**Justificativa:**  
O Next.js oferece um ambiente estável e escalável, permitindo controle refinado
sobre renderização, performance e acessibilidade.

---

## Aplicação Mobile

- Framework: React Native  
- Linguagem: TypeScript  
- Gerenciamento de Estado: Lógica de domínio e aplicação compartilhadas  
- Armazenamento: AsyncStorage  

**Justificativa:**  
O React Native permite o reaproveitamento da lógica cognitiva do domínio e mantém
consistência comportamental com a aplicação web.

---

## Lógica Compartilhada

- Camada de Domínio: TypeScript puro (agnóstico a frameworks)  
- Camada de Aplicação: Casos de uso e lógica de orquestração  
- Nenhuma dependência de UI ou plataforma  

---

## Ferramentas

- Controle de Versão: Git + GitHub  
- Qualidade de Código: ESLint + Prettier  
- Testes: Jest (domínio e casos de uso)  
- CI/CD: GitHub Actions (opcional)  

---

## O Que Evitamos Intencionalmente

- Bibliotecas pesadas de UI  
- Gerenciadores globais de estado complexos  
- Frameworks de gamificação  
- Abstrações excessivamente complexas  

---

## Objetivo da Stack

Sustentar uma experiência calma, previsível e cognitivamente acessível,
sem adicionar complexidade técnica desnecessária.


EN:
# MindEase — Technology Stack

This document defines the technology stack used in the MindEase project,
aligned with the cognitive accessibility goals and clean architecture principles.

---

## Core Principles for the Stack

- Predictability over novelty
- Simplicity over abstraction
- Shared logic between platforms
- Low cognitive overhead for developers and users

---

## Web Application

- Framework: Next.js
- Language: TypeScript
- Styling: CSS Modules (or Tailwind with strict control)
- State Management: React Context + Application Layer
- Accessibility: Native semantic HTML + controlled animations

Reasoning:
Next.js provides a stable and scalable environment while allowing fine-grained
control over rendering, performance, and accessibility.

---

## Mobile Application

- Framework: React Native
- Language: TypeScript
- State Management: Shared domain and application logic
- Storage: AsyncStorage

Reasoning:
React Native allows reuse of cognitive domain logic and keeps behavioral
consistency with the web application.

---

## Shared Logic

- Domain Layer: Pure TypeScript (framework agnostic)
- Application Layer: Use cases and orchestration logic
- No UI or platform dependencies

---

## Tooling

- Version Control: Git + GitHub
- Code Quality: ESLint + Prettier
- Testing: Jest (domain and use cases)
- CI/CD: GitHub Actions (optional)

---

## What We Intentionally Avoid

- Heavy UI libraries
- Complex global state managers
- Gamification frameworks
- Over-engineered abstractions

---

## Stack Goal

Support a calm, predictable, and cognitively accessible experience
without adding unnecessary technical complexity.
