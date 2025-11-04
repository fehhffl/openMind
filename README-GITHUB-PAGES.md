# PsicoConnect - Versão GitHub Pages

Este projeto foi configurado para funcionar no GitHub Pages com dados mockados, permitindo demonstração completa sem necessidade de backend.

## 📋 Funcionalidades Disponíveis

### Usuários Mockados

#### Psicólogos
- Dra. Maria Silva (maria.silva@psico.com)
- Dr. João Santos (joao.santos@psico.com)
- Dra. Ana Oliveira (ana.oliveira@psico.com)
- Dr. Carlos Mendes (carlos.mendes@psico.com)
- Dra. Patrícia Costa (patricia.costa@psico.com)

#### Pacientes
- Pedro Almeida (pedro.almeida@email.com)
- Julia Ferreira (julia.ferreira@email.com)
- Roberto Lima (roberto.lima@email.com)
- Amanda Souza (amanda.souza@email.com)
- Fernando Rocha (fernando.rocha@email.com)
- Beatriz Martins (beatriz.martins@email.com)

**Nota:** Para login, use qualquer email acima com qualquer senha.

## 🚀 Deploy no GitHub Pages

### Passo 1: Configurar o Repositório

1. Faça push da branch `github-pages` para o GitHub:
```bash
git add .
git commit -m "Configurar versão estática para GitHub Pages"
git push origin github-pages
```

### Passo 2: Configurar GitHub Pages

1. Vá para **Settings** → **Pages** no seu repositório
2. Em **Source**, selecione **GitHub Actions**
3. O workflow será executado automaticamente quando você fizer push

### Passo 3: Ajustar a URL Base

⚠️ **IMPORTANTE**: Edite o arquivo `vite.config.js` e substitua `'psico-connect'` pelo nome do seu repositório:

```javascript
// No arquivo vite.config.js
base: isGitHubPages ? '/SEU-REPOSITORIO/' : '/',
```

### Passo 4: Deploy Manual (Opcional)

Se preferir fazer deploy manual:

```bash
# Fazer build
npm run build:gh-pages

# Instalar gh-pages (se não tiver)
npm install -D gh-pages

# Deploy
npx gh-pages -d dist
```

## 🔧 Desenvolvimento Local

### Testar com Dados Mockados

1. Crie um arquivo `.env`:
```bash
VITE_USE_MOCK_API=true
```

2. Execute o projeto:
```bash
npm install
npm run dev
```

### Voltar para Backend Real

1. Edite o arquivo `.env`:
```bash
VITE_USE_MOCK_API=false
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

2. Execute o projeto normalmente

## 📁 Estrutura de Arquivos Mockados

- `src/services/mockData.js` - Dados mockados (usuários, notificações, etc.)
- `src/services/mockApi.js` - API mockada que simula o backend
- `src/services/mockSocket.js` - Socket.IO mockado para notificações

## 🌐 URLs do Site

Após o deploy, seu site estará disponível em:

```
https://SEU-USUARIO.github.io/SEU-REPOSITORIO/
```

## ✅ Funcionalidades Testáveis

- **Login/Registro**: Use qualquer email mockado com qualquer senha
- **Listagem de Psicólogos**: Visualize todos os psicólogos disponíveis
- **Listagem de Pacientes**: Visualize pacientes (para psicólogos)
- **Perfil**: Edite informações do perfil (salvas localmente)
- **Notificações**: Visualize notificações mockadas
- **Contato**: Simule envio de mensagens entre usuários

## 🔄 Atualizações

Para atualizar o site no GitHub Pages:

1. Faça as alterações necessárias
2. Commit e push para a branch `github-pages`:
```bash
git add .
git commit -m "Sua mensagem de commit"
git push origin github-pages
```

O GitHub Actions fará o deploy automaticamente!

## 📝 Notas Importantes

- Todos os dados são armazenados localmente no `localStorage`
- As alterações são perdidas ao limpar os dados do navegador
- O Socket.IO é simulado e não faz conexões reais
- Perfeito para demonstrações e testes de UI/UX

## 🆘 Troubleshooting

### Página em branco após deploy
- Verifique se a `base` no `vite.config.js` está correta
- Confirme que o GitHub Pages está ativo nas configurações

### Erro 404 ao navegar entre páginas
- Adicione um arquivo `404.html` igual ao `index.html` na pasta `dist`
- Ou configure o roteamento para Single Page Application

### Build falha no GitHub Actions
- Verifique se `npm ci` consegue instalar as dependências
- Confirme que o Node.js 18 está sendo usado

---

**Desenvolvido para demonstração no GitHub Pages** 🎭