# 🚀 EXECUTAR AGORA - PsicoConnect

## ✅ Configuração Concluída!

Acabei de configurar:
- ✅ Arquivo `.env` do backend com seu MongoDB Atlas
- ✅ Arquivo `.env` do frontend
- ✅ Usuário MongoDB: `feforioni_db_user`
- ✅ Senha MongoDB: `Hpv7qcU8yhDLBbZ6`
- ✅ Connection String configurada corretamente!

---

## 📋 Execute estes comandos no seu terminal:

### 1️⃣ Corrigir Permissões do NPM (OBRIGATÓRIO)

```bash
sudo chown -R $(whoami) ~/.npm
```
*Digite sua senha do Mac quando solicitado*

---

### 2️⃣ Instalar Dependências do Backend

```bash
cd ~/Documents/Workspace/psico-connect/psico-connect-backend
npm install
```

---

### 3️⃣ Instalar Dependências do Frontend

```bash
cd ~/Documents/Workspace/psico-connect
npm install
```

---

### 4️⃣ Iniciar o Backend (Terminal 1)

```bash
cd ~/Documents/Workspace/psico-connect/psico-connect-backend
npm run dev
```

**Aguarde ver esta mensagem:**
```
╔═══════════════════════════════════════╗
║     PsicoConnect API Server          ║
║                                       ║
║  🚀 Server running on port 5000      ║
║  🌍 Environment: development         ║
║  📡 Socket.io: Enabled               ║
╚═══════════════════════════════════════╝
✅ MongoDB Connected: cluster0.mongodb.net
```

---

### 5️⃣ Iniciar o Frontend (Terminal 2 - NOVO TERMINAL)

```bash
cd ~/Documents/Workspace/psico-connect
npm run dev
```

**Aguarde ver:**
```
  VITE v5.0.8  ready in XXX ms

  ➜  Local:   http://localhost:5173/
```

---

### 6️⃣ Abrir no Navegador

Acesse: **http://localhost:5173**

---

## 🎯 Teste Rápido

### Criar Psicólogo:
1. Clique em **"Cadastrar"**
2. Selecione **"Psicólogo"**
3. Preencha:
   - Nome: `Dr. João Silva`
   - Email: `joao@teste.com`
   - Telefone: `11988888888`
   - CRP: `CRP 01/12345`
   - Senha: `senha123`
4. Clique em **"Criar Conta"**

### Criar Paciente:
1. **Nova aba anônima** (Ctrl+Shift+N / Cmd+Shift+N)
2. Acesse: http://localhost:5173
3. Clique em **"Cadastrar"**
4. Selecione **"Paciente"**
5. Preencha:
   - Nome: `Maria Santos`
   - Email: `maria@teste.com`
   - Telefone: `11977777777`
   - Senha: `senha123`
6. Clique em **"Criar Conta"**

### Testar Notificações:
1. **Como Psicólogo** (primeira aba):
   - Login: `joao@teste.com` / `senha123`
   - Clique em **"👥 Pacientes"**
   - Clique em **"📩 Enviar Convite"** para Maria

2. **Como Paciente** (aba anônima):
   - Login: `maria@teste.com` / `senha123`
   - Clique no **🔔** (sino)
   - Veja a notificação em tempo real!

---

## 🐛 Se der algum erro:

### "EACCES" ou "permission denied"
```bash
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) ~/Documents/Workspace/psico-connect
```

### "MongoDB connection failed"
- Verifique se o IP 0.0.0.0/0 está liberado no MongoDB Atlas
- Verifique se o usuário `psicoconnect` foi criado
- Verifique se a senha está correta no arquivo `.env`

### "Port 5000 already in use"
```bash
# Descobrir o processo
lsof -i :5000

# Matar o processo
kill -9 <PID>
```

### Frontend não abre
```bash
# Limpar e reinstalar
cd ~/Documents/Workspace/psico-connect
rm -rf node_modules
npm install
npm run dev
```

---

## ✅ Resumo dos Comandos (Copie e Cole)

```bash
# Passo 1: Corrigir permissões
sudo chown -R $(whoami) ~/.npm

# Passo 2: Instalar backend
cd ~/Documents/Workspace/psico-connect/psico-connect-backend && npm install

# Passo 3: Instalar frontend
cd ~/Documents/Workspace/psico-connect && npm install

# Passo 4: Rodar backend (Terminal 1)
cd ~/Documents/Workspace/psico-connect/psico-connect-backend && npm run dev

# Passo 5: Rodar frontend (Terminal 2 - ABRIR NOVO TERMINAL)
cd ~/Documents/Workspace/psico-connect && npm run dev
```

---

## 🎉 Pronto!

Seu **PsicoConnect** está configurado e pronto para rodar!

**Comece pelo Passo 1** e siga em ordem. 🚀
