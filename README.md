# PsicoConnect - Frontend

Aplicação web desenvolvida em React para conectar psicólogos e pacientes.

## 📋 Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone [url-do-repositorio]
cd psico-connect
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

### 4. Execute o projeto

```bash
npm run dev
```

A aplicação estará disponível em: **http://localhost:3000**

## 📦 Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção

## 🛠️ Stack

- **React** - Framework frontend
- **Vite** - Build tool
- **React Router** - Roteamento
- **Axios** - Requisições HTTP
- **Socket.io Client** - WebSocket para real-time

## 📁 Estrutura do projeto

```
src/
├── components/     # Componentes reutilizáveis
├── contexts/       # Context API (autenticação)
├── pages/          # Páginas da aplicação
├── services/       # Serviços (API, Socket)
└── styles/         # Arquivos CSS
```

## ⚠️ Importante

- Certifique-se de que o backend está rodando na porta 5000 antes de iniciar o frontend
- O MongoDB deve estar rodando para o sistema funcionar completamente

## 🐛 Problemas comuns

**Erro de CORS**: Verifique se o backend está rodando e se a URL está correta no `.env`

**Porta em uso**: Se a porta 3000 estiver ocupada, o Vite escolherá outra automaticamente

---

Desenvolvido com ❤️ por Felipe Forioni