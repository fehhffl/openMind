# 🗄️ Setup MongoDB para PsicoConnect

Você tem **2 opções** para rodar o MongoDB:

## ✅ Opção 1: MongoDB Atlas (Cloud - RECOMENDADO)

**Vantagens:**
- ✅ Grátis para sempre (512 MB)
- ✅ Não precisa instalar nada
- ✅ Funciona de qualquer lugar
- ✅ Setup em 5 minutos

### Passos:

1. **Criar conta no MongoDB Atlas:**
   - Acesse: https://www.mongodb.com/cloud/atlas/register
   - Cadastre-se com Google ou Email

2. **Criar um Cluster:**
   - Escolha o plano **FREE** (M0 Sandbox)
   - Selecione a região mais próxima (ex: São Paulo ou Virginia)
   - Clique em **"Create Cluster"**
   - Aguarde 3-5 minutos para criação

3. **Configurar Acesso:**
   - Clique em **"Database Access"** no menu lateral
   - Clique em **"Add New Database User"**
   - Crie um usuário:
     - Username: `psicoconnect`
     - Password: `psicoconnect123` (ou gere uma senha)
     - Permissão: **"Read and write to any database"**
   - Clique em **"Add User"**

4. **Liberar Acesso de Qualquer IP:**
   - Clique em **"Network Access"** no menu lateral
   - Clique em **"Add IP Address"**
   - Clique em **"Allow Access from Anywhere"** (0.0.0.0/0)
   - Clique em **"Confirm"**

5. **Obter Connection String:**
   - Volte para **"Database"** no menu lateral
   - Clique em **"Connect"** no seu cluster
   - Escolha **"Connect your application"**
   - Copie a connection string (algo como):
     ```
     mongodb+srv://psicoconnect:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```
   - **IMPORTANTE:** Substitua `<password>` pela senha que você criou

6. **Configurar no Backend:**
   - Edite o arquivo `psico-connect-backend/.env`
   - Cole sua connection string:
     ```env
     MONGODB_URI=mongodb+srv://psicoconnect:psicoconnect123@cluster0.xxxxx.mongodb.net/psicoconnect?retryWrites=true&w=majority
     ```

7. **Pronto!** Agora você pode rodar o backend.

---

## 🔧 Opção 2: MongoDB Local (Requer instalação)

### Para macOS:

```bash
# Instalar Homebrew (se não tiver)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar MongoDB
brew tap mongodb/brew
brew install mongodb-community@7.0

# Iniciar MongoDB
brew services start mongodb-community@7.0

# Verificar se está rodando
brew services list | grep mongodb
```

### Para Windows:

1. Baixe o instalador: https://www.mongodb.com/try/download/community
2. Execute o instalador
3. Escolha "Complete" installation
4. Marque "Install MongoDB as a Service"
5. Após instalar, o MongoDB já estará rodando

### Para Linux (Ubuntu/Debian):

```bash
# Importar chave pública
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Adicionar repositório
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Atualizar e instalar
sudo apt-get update
sudo apt-get install -y mongodb-org

# Iniciar serviço
sudo systemctl start mongod
sudo systemctl enable mongod

# Verificar status
sudo systemctl status mongod
```

### Configurar no Backend (Local):

Se usar MongoDB local, use essa connection string no `.env`:

```env
MONGODB_URI=mongodb://localhost:27017/psicoconnect
```

---

## 🧪 Testar Conexão

Depois de configurar, teste se funciona:

```bash
cd ~/Documents/Workspace/psico-connect/psico-connect-backend
npm run dev
```

Você deve ver:
```
✅ MongoDB Connected: cluster0.xxxxx.mongodb.net
```

Se der erro, verifique:
- [ ] Connection string está correta
- [ ] Senha substituída corretamente (sem `<` e `>`)
- [ ] IP liberado no Network Access (0.0.0.0/0)
- [ ] Usuário criado com permissões corretas

---

## 🎯 Recomendação

**Use MongoDB Atlas (Opção 1)** - É mais rápido e não precisa instalar nada!

Após configurar, volte para o arquivo **START_HERE.md** e continue com o passo 4. 🚀
