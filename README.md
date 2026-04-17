#📄 README — Sistema de Gestão para Academia 💪

-----------------------------------------------------------------------------

📌 Sobre o projeto

Este projeto é um sistema web para gerenciamento de academia, com dois tipos de acesso:

🧑‍🏫 Admin/Professor

🧑‍🎓 Aluno

O sistema permite:

Cadastro de usuários
  
Controle de planos
  
Gestão de treinos
  
Visualização de horários/aulas

-----------------------------------------------------------------------------


##🚀 Como rodar o projeto (passo a passo)

-----------------------------------------------------------------------------

🧾 1. Pré-requisitos

Antes de tudo, você precisa ter instalado:

Node.js

👉 É o “motor” que roda JavaScript no computador

Git

👉 É tipo um “salvador de progresso” do seu código

Visual Studio Code


👉 É onde você escreve o código

-----------------------------------------------------------------------------

📥 2. Clonar o repositorio

terminal:

git clone URL_DO_REPOSITORIO 

cd gym-system


🧠 Explicação simples:

👉 Você está dizendo:

“Ei Git, me dá uma cópia desse projeto que está na internet”

💡 Analogia:
É como baixar um jogo no seu computador.

👉 cd significa: entrar na pasta

💡 Tipo:

“Entrar na pasta do projeto”

-----------------------------------------------------------------------------

📦 3. Rodar o BACKEND

cd backend

npm install

npx nodemon src/server.js


👉 O servidor irá rodar em:

http://localhost:3000
-


🧠 O que isso faz?

👉 Ele instala tudo que o projeto precisa para funcionar

💡 Analogia:
Você baixou um jogo…
Agora está instalando as peças que faltam.
-

🔹 nodemon

👉 Ele reinicia o servidor automaticamente

💡 Sem isso:

você teria que reiniciar manualmente toda hora 😩
-

🔹 server.js

👉 É o arquivo principal do backend

💡 Tipo:

“Começa por aqui”
-
🔹 Resultado

👉 Você liga o servidor

Servidor rodando na porta 3000

💡 Agora sua API está viva 🔥

-----------------------------------------------------------------------------

🎨 4. Rodar o FRONTEND

Abra a pasta frontend no navegador:

Clique duas vezes no index.html
ou
Use extensão do VS Code (Live Server)

👉 A aplicação irá rodar no navegador

-----------------------------------------------------------------------------

🔄 5. Atualizar o projeto

Antes de começar a trabalhar:   NÃO ESQUEÇAM DISSO

  git pull origin develop
  -

  🧠 O que isso faz?

👉 Atualiza seu projeto com o que o time fez

💡 Analogia:

“Baixar as novidades do grupo”

-----------------------------------------------------------------------------

🧠 Estrutura do projeto - CRIE AS PASTAS CONFORME ESSES NOMES

gym-system/

│

├── backend/

│     └── src/

│       ├── controllers/

│       ├── models/

│       ├── routes/

│       ├── middlewares/

│       └── server.js

│
├── frontend/

│   ├── index.html

│   ├── css/

│   ├── js/

│   └── pages/

-----------------------------------------------------------------------------


👥 Organização da equipe
🧑‍💻 Backend (2 pessoas)

Responsáveis por:

  API (rotas)
  
  Banco de dados
  
  Autenticação (login)
  
  Regras de negócio

  -----------------------------------------------------------------------------

📌 Tarefas sugeridas

Dev 1:

  Usuários (CRUD)
  
  Login e autenticação (JWT)
  
  Middleware de proteção

  -----------------------------------------------------------------------------  

Dev 2:

  Treinos
  
  Plan
  
  Aulas
  
  Regras de vencimento

  -----------------------------------------------------------------------------

🎨 Frontend (2 pessoas)

Responsáveis por:



  Interface (HTML, CSS, JS)
  
  Integração com API
  
  Experiência do usuário

-----------------------------------------------------------------------------

📌 Tarefas sugeridas

Dev 1:

  Tela de login e cadastro
  
  Dashboard admin

-----------------------------------------------------------------------------

Dev 2:

  Painel do aluno
  
  Lista de treinos e horários

-----------------------------------------------------------------------------

🔄 Fluxo de trabalho (Git)

  🌿 Criar uma branch
  
  git checkout -b feature/nome-da-feature
  -
  🧠 O que isso faz?

👉 Cria uma branch

💡 Analogia:
Imagina que o projeto é uma estrada principal 🚗

👉 Você cria uma rua paralela pra trabalhar sem atrapalhar ninguém

-----------------------------------------------------------------------------


📤 Enviar alterações

  git add .
  
  git commit -m "feat: descrição da alteração"
  
  git push origin feature/nome-da-feature
  -
  🔹 git add .

👉 “Separar o que eu quero salvar”

🔹 git commit

👉 “Salvar com uma mensagem”

💡 Tipo:

“Adicionei login”

🔹 git push

👉 “Enviar para o GitHub”

💡 Tipo:

“Subir meu progresso pra nuvem”

-----------------------------------------------------------------------------


🔁 Pull Request

  Criar PR no GitHub
  
  Aguardar revisão
  
  Fazer merge na branch develop
  -
  👉 Você pede:

“Galera, revisa meu código?”

💡 Isso evita:

bugs
erros
bagunça

-----------------------------------------------------------------------------

🔐 Rotas da API (exemplo inicial)

  👤 Usuários
  
  POST /users → Criar usuário
  
  GET /users → Listar usuários
  -
  👉 Significa:

“Criar um usuário”

Frontend manda:

{ "nome": "Julemar" }

Backend responde:

{ "id": 1, "nome": "Julemar" }

-----------------------------------------------------------------------------

🔐 Login

  POST /login → Autenticação

-----------------------------------------------------------------------------

🏋️ Treinos

  POST /treinos
  
  GET /treinos/:userId

-----------------------------------------------------------------------------

💳 Planos

  GET /planos
  
  PUT /users/:id/plano

-----------------------------------------------------------------------------


💡 Boas práticas do time - IMPORTANTÍSSIMO

  ❌ Não subir código direto na main
  
  ✔ Sempre usar branch
  
  ✔ Código organizado
  
  ✔ Testar antes de subir
  -
  👉 Por que não mexer na main?

Porque:

é o código principal
qualquer erro quebra tudo

💡 Analogia:

Não mexe no motor do carro enquanto ele está andando
  

-----------------------------------------------------------------------------

🚀 RESUMO FINAL (nível clareza total)

Você está:

Baixando o projeto (git clone)

Entrando na pasta (cd)

Instalando dependências (npm install)

Ligando o backend (nodemon)

Abrindo o frontend

Trabalhando em equipe com Git

-----------------------------------------------------------------------------

🚀 Próximas melhorias

  🔐 Autenticação com JWT
  
  💾 Banco de dados (MongoDB/PostgreSQL)
  
  📊 Dashboard com métricas
  
  📲 QR Code para acesso
  
  🧠 Objetivo do projeto

-----------------------------------------------------------------------------

Simular um sistema real de empresa, aplicando:

Arquitetura frontend/backend

API REST

Trabalho em equipe

Versionamento com Git

-----------------------------------------------------------------------------

