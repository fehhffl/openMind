# 🚀 Quick Start Guide - PsicoConnect

Guia rápido para rodar o projeto em menos de 5 minutos!

## ⚡ Setup Rápido

### 1. Instalar Dependências

```bash
# Backend
cd psico-connect-backend
npm install
cd ..

# Frontend
npm install
```

### 2. Configurar MongoDB

**Opção A: MongoDB Local**
```bash
# Certifique-se de que o MongoDB está rodando
mongod
```

**Opção B: MongoDB Atlas (Cloud - Gratuito)**
1. Acesse https://www.mongodb.com/cloud/atlas
2. Crie uma conta gratuita
3. Crie um cluster
4. Copie a connection string
5. Use no arquivo .env do backend

### 3. Configurar Variáveis de Ambiente

**Backend:**
```bash
cd psico-connect-backend
cp .env.example .env
# Edite o .env se necessário
```

Conteúdo mínimo do `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/psicoconnect
JWT_SECRET=meu_super_secret_key_12345
```

**Frontend:**
```bash
# Na raiz do projeto
cp .env.example .env
```

### 4. Iniciar os Servidores

**Terminal 1 - Backend:**
```bash
cd psico-connect-backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### 5. Acessar a Aplicação

Abra o navegador em: **http://localhost:5173**

## 🎯 Teste Rápido

1. **Cadastrar Psicólogo:**
   - Clique em "Cadastrar"
   - Selecione "Psicólogo"
   - Nome: `Dr. João Silva`
   - Email: `joao@psicologo.com`
   - CRP: `CRP 01/12345`
   - Senha: `senha123`

2. **Cadastrar Paciente** (nova aba):
   - Clique em "Cadastrar"
   - Selecione "Paciente"
   - Nome: `Maria Santos`
   - Email: `maria@paciente.com`
   - Senha: `senha123`

3. **Testar Notificações:**
   - Login como psicólogo
   - Acesse "👥 Pacientes"
   - Clique em "Enviar Convite" para Maria
   - Login como paciente (outra aba)
   - Clique no sino 🔔 para ver a notificação!

## 🐛 Troubleshooting

### Erro de Conexão com MongoDB
```bash
# Verificar se o MongoDB está rodando
mongo --version
mongod --version

# Iniciar MongoDB (Mac/Linux)
brew services start mongodb-community

# Iniciar MongoDB (Windows)
net start MongoDB
```

### Porta 5000 já está em uso
```bash
# Mude a porta no backend/.env
PORT=5001
```

### Erro de CORS
- Certifique-se de que o `FRONTEND_URL` no backend/.env está correto
- Deve ser: `http://localhost:5173`

## 📚 Comandos Úteis

```bash
# Ver logs do backend
cd psico-connect-backend && npm run dev

# Limpar cache do npm
npm cache clean --force

# Reinstalar dependências
rm -rf node_modules package-lock.json && npm install

# Verificar portas em uso (Mac/Linux)
lsof -i :5000
lsof -i :5173
```

## ✅ Checklist Pré-Deploy

- [ ] MongoDB está rodando
- [ ] Variáveis de ambiente configuradas
- [ ] Dependências instaladas (backend e frontend)
- [ ] Backend rodando em http://localhost:5000
- [ ] Frontend rodando em http://localhost:5173
- [ ] Consegue criar conta de psicólogo
- [ ] Consegue criar conta de paciente
- [ ] Notificações funcionando

## 🎉 Pronto!

Seu PsicoConnect está rodando!

Para mais detalhes, consulte o [README.md](./README.md) principal.
