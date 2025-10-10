# 🚀 Como Iniciar o PsicoConnect

## ⚠️ Primeiro Passo Importante: Corrigir Permissões do NPM

Há um problema de permissões no cache do npm que precisa ser corrigido primeiro.

**Execute este comando no terminal:**

```bash
sudo chown -R $(whoami) ~/.npm
```

Digite sua senha quando solicitado.

---

## 📋 Passos para Rodar o Projeto

### 1️⃣ Instalar Dependências

**Terminal 1 - Backend:**
```bash
cd ~/Documents/Workspace/psico-connect/psico-connect-backend
npm install
```

**Terminal 2 - Frontend:**
```bash
cd ~/Documents/Workspace/psico-connect
npm install
```

### 2️⃣ Configurar Variáveis de Ambiente

**Backend:**
```bash
cd ~/Documents/Workspace/psico-connect/psico-connect-backend
cp .env.example .env
```

Crie um arquivo `.env` com o seguinte conteúdo:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/psicoconnect
JWT_SECRET=meu_super_secret_key_para_jwt_12345
JWT_EXPIRE=7d
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**Frontend:**
```bash
cd ~/Documents/Workspace/psico-connect
cp .env.example .env
```

Crie um arquivo `.env` com o seguinte conteúdo:
```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

### 3️⃣ Iniciar MongoDB

**Opção A - MongoDB Local:**
```bash
# Se você tem MongoDB instalado localmente
brew services start mongodb-community
# ou
mongod
```

**Opção B - MongoDB Atlas (Cloud - Recomendado):**
1. Acesse: https://www.mongodb.com/cloud/atlas
2. Crie uma conta gratuita
3. Crie um cluster (tier gratuito)
4. Clique em "Connect" → "Connect your application"
5. Copie a connection string
6. Substitua no arquivo `psico-connect-backend/.env`:
   ```
   MONGODB_URI=sua_connection_string_aqui
   ```

### 4️⃣ Iniciar os Servidores

**Terminal 1 - Backend:**
```bash
cd ~/Documents/Workspace/psico-connect/psico-connect-backend
npm run dev
```

Você deve ver algo como:
```
╔═══════════════════════════════════════╗
║     PsicoConnect API Server          ║
║                                       ║
║  🚀 Server running on port 5000      ║
║  🌍 Environment: development         ║
║  📡 Socket.io: Enabled               ║
╚═══════════════════════════════════════╝
✅ MongoDB Connected: ...
✅ Socket.io initialized
```

**Terminal 2 - Frontend:**
```bash
cd ~/Documents/Workspace/psico-connect
npm run dev
```

Você deve ver algo como:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 5️⃣ Acessar a Aplicação

Abra seu navegador em: **http://localhost:5173**

---

## 🎯 Teste Rápido

### Criar Conta de Psicólogo:
1. Na landing page, clique em **"Cadastrar"**
2. Selecione **"Psicólogo"**
3. Preencha:
   - Nome: `Dr. João Silva`
   - Email: `joao@psicologo.com`
   - Telefone: `(11) 98888-8888`
   - CRP: `CRP 01/12345`
   - Senha: `senha123`
   - Confirmar Senha: `senha123`
4. Clique em **"Criar Conta"**

### Criar Conta de Paciente:
1. Abra uma **nova aba anônima/privada** (Ctrl+Shift+N ou Cmd+Shift+N)
2. Acesse: **http://localhost:5173**
3. Clique em **"Cadastrar"**
4. Selecione **"Paciente"**
5. Preencha:
   - Nome: `Maria Santos`
   - Email: `maria@paciente.com`
   - Telefone: `(11) 97777-7777`
   - Senha: `senha123`
   - Confirmar Senha: `senha123`
6. Clique em **"Criar Conta"**

### Testar Notificações em Tempo Real:
1. **Como Psicólogo:**
   - Faça login como `joao@psicologo.com`
   - Clique no botão **"👥 Pacientes"** no topo
   - Você verá Maria Santos na lista
   - Clique em **"📩 Enviar Convite"**
   - Verá uma confirmação verde: "Notificação enviada!"

2. **Como Paciente (na aba anônima):**
   - Faça login como `maria@paciente.com`
   - Clique no sino **🔔** no topo
   - Você verá a notificação do Dr. João!
   - A notificação apareceu **em tempo real** via WebSocket!

---

## 🎨 Explore as Funcionalidades

### Landing Page
- Design moderno com animações
- Cards flutuantes
- Estatísticas
- Call-to-actions

### Dashboard
- Lista de psicólogos (para pacientes)
- Filtros por especialidade
- Busca por nome
- Cards informativos

### Notificações
- Centro de notificações
- Badge de não lidas
- Notificações em tempo real
- Marcar como lida
- Deletar notificações

### Página de Pacientes (apenas psicólogos)
- Lista de todos os pacientes
- Busca por nome
- Enviar convites
- Informações de contato

---

## 🐛 Troubleshooting

### MongoDB não conecta?
```bash
# Verificar se está rodando
ps aux | grep mongod

# Iniciar MongoDB
brew services start mongodb-community
# ou
mongod --dbpath ~/data/db
```

### Porta 5000 já em uso?
```bash
# Descobrir o que está usando a porta
lsof -i :5000

# Matar o processo
kill -9 PID_DO_PROCESSO
```

### Erro de CORS?
- Verifique se o `FRONTEND_URL` no backend/.env está correto
- Deve ser: `http://localhost:5173`

### Frontend não carrega?
```bash
# Limpar cache do Vite
rm -rf node_modules/.vite
npm run dev
```

---

## ✅ Checklist

Antes de testar, certifique-se:

- [ ] Permissões do npm corrigidas (`sudo chown -R $(whoami) ~/.npm`)
- [ ] Dependências do backend instaladas
- [ ] Dependências do frontend instaladas
- [ ] MongoDB rodando
- [ ] Arquivo `.env` criado no backend
- [ ] Arquivo `.env` criado no frontend
- [ ] Backend rodando (porta 5000)
- [ ] Frontend rodando (porta 5173)
- [ ] Consegue acessar http://localhost:5173

---

## 📞 Precisa de Ajuda?

Se encontrar algum erro:

1. Verifique os logs no terminal do backend
2. Verifique os logs no terminal do frontend
3. Abra o console do navegador (F12) para ver erros de JavaScript
4. Certifique-se de que o MongoDB está rodando

---

## 🎉 Pronto!

Seu PsicoConnect está funcionando!

Agora você pode:
- ✅ Cadastrar usuários (pacientes e psicólogos)
- ✅ Fazer login
- ✅ Ver listas de psicólogos/pacientes
- ✅ Enviar notificações em tempo real
- ✅ Filtrar e buscar

**Divirta-se explorando! 🚀**
