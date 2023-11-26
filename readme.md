<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>DAILY-DIET-API</h1>
<h3>◦ Desenvolvido com o software e as ferramentas abaixo.</h3>

<p align="center">
<img src="https://img.shields.io/badge/Vitest-6E9F18.svg?style=flat-square&logo=Vitest&logoColor=white" alt="Vitest" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat-square&logo=Prisma&logoColor=white" alt="Prisma" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
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
- [📦 Recursos](#-Regras-da-Aplicação)
- [📂 Estrutura do Repositório](#-Estrutura-do-Repositório)
- [⚙️ Módulos](#módulos)
- [🚀 Início Rápido](#-início-rápido)
    - [🔧 Instalação](#-instalação)
    - [🤖 Executando o daily-diet-api](#-executando-o-daily-diet-api)
    - [🧪 Testes](#-testes)
- [🛣 Roteiro](#-roteiro)
- [🤝 Contribuições](#-contribuições)
- [📄 Licença](#-licença)
- [👏 Reconhecimentos](#-reconhecimentos)

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

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Dependency 1`

`- ℹ️ Dependency 2`

`- ℹ️ ...`

### 🔧 Installation

1. Clone the daily-diet-api repository:
```sh
git clone https://github.com/Anselmo-Dias/daily-diet-api
```

2. Change to the project directory:
```sh
cd daily-diet-api
```

3. Install the dependencies:
```sh
► INSERT-TEXT
```

### 🤖 Running daily-diet-api

```sh
► INSERT-TEXT
```

### 🧪 Tests
```sh
► INSERT-TEXT
```

---


## 🛣 Project Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Implement Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Anselmo-Dias/daily-diet-api/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/Anselmo-Dias/daily-diet-api/issues)**: Submit bugs found or log feature requests for ANSELMO-DIAS.

#### *Contributing Guidelines*

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License


This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#Top)

---

