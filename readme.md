<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>DAILY-DIET-API</h1>
<h3> Desenvolvido com o software e as ferramentas abaixo.</h3>

<p align="center">
<img src="https://img.shields.io/badge/Vitest-6E9F18.svg?style=flat-square&logo=Vitest&logoColor=white" alt="Vitest" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat-square&logo=Prisma&logoColor=white" alt="Prisma" />
<img src="https://img.shields.io/badge/Fastify-000000.svg?style=flat-square&logo=Fastify&logoColor=white" alt="Fastify" />
</p>
<img src="https://img.shields.io/github/license/Anselmo-Dias/daily-diet-api?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/Anselmo-Dias/daily-diet-api?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/Anselmo-Dias/daily-diet-api?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/Anselmo-Dias/daily-diet-api?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Sumário
- [📖 Sumário](#-sumário)
- [📍 Visão Geral](#-visão-geral)
- [📦 Regras da Aplicação](#-Regras-da-Aplicação)
- [📂 Estrutura do Repositório](#-Estrutura-do-Repositório)
- [⚙️ Módulos](#Rotas)
- [🔧 Instalação](#-Instalação)
- [🤖 Executando](#-Executando)
- [🧪 Testes](#-Testes)
- [📄 Licença](#-Licença)

---

## 📍 Visão Geral

Uma aplicação criada com intuito de facilitar o controle da sua dieta

---

## 📦 Regras da Aplicação

### Regras da aplicação

- [x] Deve ser possível criar um usuário <br/>
- [x] Deve ser possível identificar o usuário entre as requisições <br/>
- [x] Deve ser possível registrar uma refeição feita, com as seguintes informações: 

    *As refeições devem ser relacionadas a um usuário.*
    
    - Nome
    - Descrição
    - Data e Hora
    - Está dentro ou não da dieta

- [x] Deve ser possível editar uma refeição, podendo alterar todos os dados acima <br/>
- [x] Deve ser possível apagar uma refeição <br/>
- [x] Deve ser possível listar todas as refeições de um usuário <br/>
- [x] Deve ser possível visualizar uma única refeição <br/>
- [X] Deve ser possível recuperar as métricas de um usuário <br/>
    - Quantidade total de refeições registradas
    - Quantidade total de refeições dentro da dieta
    - Quantidade total de refeições fora da dieta
    - Melhor sequência de refeições dentro da dieta
- [x] O usuário só pode visualizar, editar e apagar as refeições o qual ele criou

---


## 📂 Estrutura do Repositório

```sh
└── daily-diet-api/
    ├── .env.example
    ├── .eslintrc.json
    ├── package-lock.json
    ├── package.json
    ├── prisma/
    │   ├── migrations/
    │   │   ├── 20231114161725_create_table/
    │   │   ├── 20231114162434_update_tables/
    │   │   ├── 20231114164214_add_password_in_table_user/
    │   │   ├── 20231114181625_add_session_id_in_table_food/
    │   │   ├── 20231114184539_update_table_user/
    │   │   ├── 20231114184947_update_table_user/
    │   │   ├── 20231115174617_update/
    │   │   ├── 20231115175434_update/
    │   │   └── migration_lock.toml
    │   └── schema.prisma
    ├── src/
    │   ├── app.ts
    │   ├── middleware/
    │   │   └── checkSessionIdExists.ts
    │   ├── routes/
    │   │   ├── food.ts
    │   │   └── user.ts
    │   ├── server.ts
    │   └── test/
    │       └── routes.spec.ts
    └── tsconfig.json
````

---


## ⚙️ Rotas

<details closed><summary>Food</summary>

| Rota                                                                                            | Metodo                   |
| ---                                                                                             | ---                       |
| /food       | GET |
| /food/:id       | GET |
| /food       | POST |
| /food/:id       | PUT |
| /food/:id       | DELETE |

</details>

<details closed><summary>User</summary>

| Rota                                                                                            | Metodo                   |
| ---                                                                                             | ---                       |
| /metrics       | GET |
| /register       | POST |

</details>

<details closed><summary>Rotas e Requisitos</summary>

## 🛣️ Rotas e Requisitos

### 🍲 Food

#### `GET /food`

Retorna todas as refeições registradas pelo usuário autenticado.

**Pré-requisitos:**
- [x] O usuário deve estar autenticado com uma sessão válida.

---

#### `GET /food/:id`

Retorna uma refeição específica com base no ID fornecido.

**Pré-requisitos:**
- [x] O usuário deve estar autenticado com uma sessão válida.

---

#### `POST /food`

Registra uma nova refeição com os seguintes dados no corpo da requisição:
- `name` (string): Nome da refeição.
- `userId` (string): ID do usuário proprietário da refeição.
- `description` (string): Descrição da refeição.
- `inDiet` (enum): Indica se a refeição está na dieta (`diet`) ou não (`nodiet`).

**Pré-requisitos:**
- [x] O usuário deve estar autenticado com uma sessão válida.

---

#### `PUT /food/:id`

Atualiza uma refeição existente com os seguintes dados no corpo da requisição:
- \`name\` (string): Novo nome da refeição.
- \`description\` (string): Nova descrição da refeição.
- \`inDiet\` (enum): Indica se a refeição está na dieta (\`diet\`) ou não (\`nodiet\`).

**Pré-requisitos:**
- [x] O usuário deve estar autenticado com uma sessão válida.

---

#### `DELETE /food/:id`

Exclui uma refeição com base no ID fornecido.

**Pré-requisitos:**
- [x] O usuário deve estar autenticado com uma sessão válida.

---

### 📊 User

#### `GET /metrics`

Retorna métricas relacionadas às refeições do usuário autenticado, incluindo:
- `quantityFood`: Quantidade total de refeições registradas.
- `diet`: Quantidade total de refeições dentro da dieta.
- `noDiet`: Quantidade total de refeições fora da dieta.
- `sequenceDiet`: Melhor sequência de refeições dentro da dieta.

**Pré-requisitos:**
- [x] O usuário deve estar autenticado com uma sessão válida.

---

### 📝 Registro de Usuário

#### `POST /register`

Registra um novo usuário com os seguintes dados no corpo da requisição:
- \`name\` (string): Nome do usuário.
- \`email\` (string): Endereço de e-mail do usuário (deve ser único).
- \`password\` (string): Senha do usuário.

**Pré-requisitos:**
- [ ] Não requer autenticação.

---

</details>

---

### 🔧 Instalação

1. Clonar repositorio:
```sh
git clone https://github.com/Anselmo-Dias/daily-diet-api
```

2. Mudar para o diretorio:
```sh
cd daily-diet-api
```

3. Install the dependencies:
```sh
► npm install
```

### 🤖 Executando

```sh
► npm run dev
```

### 🧪 Testes
```sh
► npm test
```

---

## 📄 Licença

Este projeto esta sob a [MIT license](LICENSE) para mais detalhes.
<br />

## :iphone: Social
- Siga - me no  [instagram](https://www.instagram.com/_anselmo.dev/)
<br />

[**Return**](#Top)


