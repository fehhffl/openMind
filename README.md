# PsicoConnect - Plataforma de Conexão entre Psicólogos e Pacientes

![PsicoConnect](https://img.shields.io/badge/PsicoConnect-v1.0.0-blue)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb)

Plataforma que conecta psicólogos estagiários com pacientes que buscam atendimento psicológico gratuito e de qualidade.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Contribuindo](#contribuindo)

## 🎯 Sobre o Projeto

O PsicoConnect é uma plataforma web que visa facilitar o acesso ao atendimento psicológico gratuito, conectando psicólogos estagiários (que precisam de horas práticas supervisionadas) com pacientes que buscam apoio emocional.

### Problema que resolve:
- **Para Pacientes**: Dificuldade de acesso a atendimento psicológico acessível
- **Para Psicólogos**: Necessidade de horas de prática supervisionada para formação

## ✨ Funcionalidades

### Para Pacientes 🙋‍♂️
- ✅ Cadastro e autenticação segura
- ✅ Visualização de perfis de psicólogos disponíveis
- ✅ Busca por especialidade
- ✅ Sistema de notificações em tempo real
- ✅ Recebimento de convites de psicólogos

### Para Psicólogos 🧠
- ✅ Cadastro com validação de CRP
- ✅ Visualização de pacientes disponíveis
- ✅ Envio de convites para pacientes
- ✅ Sistema de notificações em tempo real
- ✅ Gerenciamento de perfil profissional

### Recursos Técnicos 🛠️
- ✅ Autenticação JWT
- ✅ WebSocket para notificações em tempo real
- ✅ Design responsivo (mobile-first)
- ✅ Landing page moderna e atrativa
- ✅ Animações suaves e UX aprimorada

## 🚀 Tecnologias

### Frontend
- **React 19.1.1** - Biblioteca UI
- **React Router DOM** - Roteamento
- **Axios** - Cliente HTTP
- **Socket.io Client** - WebSocket
- **React Toastify** - Notificações toast
- **Vite** - Build tool

### Backend
- **Node.js + Express** - Servidor
- **MongoDB + Mongoose** - Banco de dados
- **Socket.io** - WebSocket server
- **JWT** - Autenticação
- **Bcrypt** - Hash de senhas
- **Helmet** - Segurança HTTP
- **Morgan** - Logger

## 📁 Estrutura do Projeto

```
psico-connect/
├── psico-connect-backend/     # Backend API
│   ├── src/
│   │   ├── config/           # Configurações
│   │   ├── controllers/      # Controladores
│   │   ├── middleware/       # Middlewares
│   │   ├── models/          # Modelos MongoDB
│   │   ├── routes/          # Rotas da API
│   │   ├── services/        # Serviços (Socket.io)
│   │   └── utils/           # Utilitários
│   ├── .env                 # Variáveis de ambiente
│   ├── package.json
│   └── server.js            # Entry point
│
├── src/                      # Frontend React
│   ├── components/          # Componentes reutilizáveis
│   ├── contexts/           # React Context
│   ├── pages/              # Páginas da aplicação
│   ├── services/           # Serviços (API, Socket)
│   └── styles/             # CSS
├── package.json
└── vite.config.js
```

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [MongoDB](https://www.mongodb.com/try/download/community) (v6 ou superior)
- [Git](https://git-scm.com/)

## 🔧 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/psico-connect.git
cd psico-connect
```

### 2. Configure o Backend

```bash
# Entre na pasta do backend
cd psico-connect-backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Edite o arquivo .env com suas configurações
# Certifique-se de que o MongoDB está rodando

# Inicie o servidor backend
npm run dev
```

O backend estará rodando em `http://localhost:5000`

### 3. Configure o Frontend

```bash
# Volte para a raiz do projeto
cd ..

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Inicie o servidor de desenvolvimento
npm run dev
```

O frontend estará rodando em `http://localhost:5173`

### 4. Acesse a aplicação

Abra seu navegador e acesse:
- **Frontend**: http://localhost:5173
- **API**: http://localhost:5000/api

## 🗄️ Variáveis de Ambiente

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/psicoconnect
JWT_SECRET=seu_segredo_super_secreto_aqui
JWT_EXPIRE=7d
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

## 📡 Endpoints da API

### Autenticação
- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Obter dados do usuário logado

### Usuários
- `GET /api/users/psychologists` - Listar psicólogos
- `GET /api/users/patients` - Listar pacientes (apenas psicólogos)
- `GET /api/users/:id` - Buscar usuário por ID
- `PUT /api/users/profile` - Atualizar perfil

### Notificações
- `POST /api/notifications` - Criar notificação
- `GET /api/notifications` - Listar notificações
- `PUT /api/notifications/:id/read` - Marcar como lida
- `PUT /api/notifications/read-all` - Marcar todas como lidas

## 🧪 Testando a Aplicação

1. **Acesse a Landing Page**: http://localhost:5173
2. **Cadastre um Psicólogo**:
   - Clique em "Cadastrar"
   - Selecione "Psicólogo"
   - Preencha os dados (não esqueça do CRP)
3. **Cadastre um Paciente**:
   - Em outra aba/navegador privado
   - Cadastre como "Paciente"
4. **Teste as funcionalidades**:
   - Login como psicólogo
   - Acesse "Pacientes"
   - Envie um convite
   - Login como paciente e veja a notificação

## 🤝 Contribuindo

Contribuições são sempre bem-vindas!

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC.

---

## 🚧 Próximas Funcionalidades

- [ ] Sistema de agendamento de consultas
- [ ] Chat em tempo real entre psicólogo e paciente
- [ ] Sistema de avaliações e reviews
- [ ] Upload de foto de perfil
- [ ] Videochamada integrada
- [ ] Painel administrativo
- [ ] Relatórios e estatísticas
- [ ] Sistema de lembretes por email
- [ ] Integração com calendário
- [ ] App mobile com React Native

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub!
