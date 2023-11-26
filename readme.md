<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>DAILY-DIET-API</h1>
<h3>◦ Exceção de Status HTTP: 401</h3>
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
- [📦 Recursos](#-recursos)
- [📂 Estrutura do Repositório](#-estrutura-do-repositório)
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


## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                            | Summary                   |
| ---                                                                                             | ---                       |
| [.eslintrc.json](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/.eslintrc.json)       | HTTPStatus Exception: 401 |
| [.env.example](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/.env.example)           | HTTPStatus Exception: 401 |
| [package.json](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/package.json)           | HTTPStatus Exception: 401 |
| [package-lock.json](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/package-lock.json) | HTTPStatus Exception: 401 |
| [tsconfig.json](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/tsconfig.json)         | HTTPStatus Exception: 401 |

</details>

<details closed><summary>Prisma</summary>

| File                                                                                           | Summary                   |
| ---                                                                                            | ---                       |
| [schema.prisma](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/prisma/schema.prisma) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>Migrations</summary>

| File                                                                                                                  | Summary                   |
| ---                                                                                                                   | ---                       |
| [migration_lock.toml](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/prisma/migrations/migration_lock.toml) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>20231115174617_update</summary>

| File                                                                                                                            | Summary                   |
| ---                                                                                                                             | ---                       |
| [migration.sql](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/prisma/migrations/20231115174617_update/migration.sql) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>20231114184947_update_table_user</summary>

| File                                                                                                                                       | Summary                   |
| ---                                                                                                                                        | ---                       |
| [migration.sql](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/prisma/migrations/20231114184947_update_table_user/migration.sql) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>20231114184539_update_table_user</summary>

| File                                                                                                                                       | Summary                   |
| ---                                                                                                                                        | ---                       |
| [migration.sql](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/prisma/migrations/20231114184539_update_table_user/migration.sql) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>20231115175434_update</summary>

| File                                                                                                                            | Summary                   |
| ---                                                                                                                             | ---                       |
| [migration.sql](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/prisma/migrations/20231115175434_update/migration.sql) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>20231114164214_add_password_in_table_user</summary>

| File                                                                                                                                                | Summary                   |
| ---                                                                                                                                                 | ---                       |
| [migration.sql](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/prisma/migrations/20231114164214_add_password_in_table_user/migration.sql) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>20231114161725_create_table</summary>

| File                                                                                                                                  | Summary                   |
| ---                                                                                                                                   | ---                       |
| [migration.sql](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/prisma/migrations/20231114161725_create_table/migration.sql) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>20231114162434_update_tables</summary>

| File                                                                                                                                   | Summary                   |
| ---                                                                                                                                    | ---                       |
| [migration.sql](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/prisma/migrations/20231114162434_update_tables/migration.sql) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>20231114181625_add_session_id_in_table_food</summary>

| File                                                                                                                                                  | Summary                   |
| ---                                                                                                                                                   | ---                       |
| [migration.sql](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/prisma/migrations/20231114181625_add_session_id_in_table_food/migration.sql) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>Src</summary>

| File                                                                                | Summary                   |
| ---                                                                                 | ---                       |
| [app.ts](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/src/app.ts)       | HTTPStatus Exception: 401 |
| [server.ts](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/src/server.ts) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>Routes</summary>

| File                                                                                   | Summary                   |
| ---                                                                                    | ---                       |
| [food.ts](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/src/routes/food.ts) | HTTPStatus Exception: 401 |
| [user.ts](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/src/routes/user.ts) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>Middleware</summary>

| File                                                                                                                       | Summary                   |
| ---                                                                                                                        | ---                       |
| [checkSessionIdExists.ts](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/src/middleware/checkSessionIdExists.ts) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>Test</summary>

| File                                                                                               | Summary                   |
| ---                                                                                                | ---                       |
| [routes.spec.ts](https://github.com/Anselmo-Dias/daily-diet-api/blob/main/src/test/routes.spec.ts) | HTTPStatus Exception: 401 |

</details>

---

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

