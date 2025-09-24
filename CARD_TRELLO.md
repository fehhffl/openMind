🎯 PsicoConnect - Plataforma de Conexão Psicológica

📋 Descrição do Projeto
Desenvolver uma plataforma web que conecte pacientes a psicólogos estagiários que oferecem atendimento gratuito, promovendo acesso democratizado à saúde mental.

——————————————————————————

🔧 REQUISITOS FUNCIONAIS

Autenticação e Acesso:
• Tela de login com seleção de tipo de usuário (Paciente/Psicólogo)
• Sistema de autenticação com validação de credenciais
• Proteção de rotas para usuários não autenticados
• Logout funcional com limpeza de sessão

Página Principal (Home):
• Listagem de cards com psicólogos estagiários disponíveis
• Exibição de informações por card:
  - Nome do profissional
  - Foto/Avatar
  - Especialidades
  - Descrição do serviço
  - Disponibilidade de horários
  - Tempo de experiência
• Sistema de busca por nome ou descrição
• Filtro por especialidades
• Botão de contato em cada card (apenas para pacientes)

Diferenciação por Tipo de Usuário:
• Pacientes: Visualização completa com opção de contato
• Psicólogos: Visualização dos perfis sem opção de contato

——————————————————————————

📱 REQUISITOS NÃO-FUNCIONAIS

Design e UX:
• Interface moderna e intuitiva
• Design responsivo (mobile, tablet, desktop)
• Paleta de cores consistente e profissional
• Feedback visual para ações do usuário
• Animações suaves nas transições

Performance:
• Carregamento rápido das páginas
• Otimização de imagens e assets
• Lazy loading para listagens grandes

——————————————————————————

🎨 ESPECIFICAÇÕES DE DESIGN

Componentes Visuais:
• Cards de Psicólogos: Design clean com sombras sutis
• Tags de Especialidades: Pills coloridas para fácil identificação
• Botões CTA: Destaque visual para ações principais
• Header Fixo: Navegação sempre acessível
• Footer Informativo: Disclaimers sobre atendimento supervisionado

Esquema de Cores:
• Primária: Gradiente roxo/azul (#667eea → #764ba2)
• Secundária: Branco e tons de cinza
• Destaques: Tags coloridas para especialidades

——————————————————————————

📊 DADOS MOCKADOS

Credenciais de Teste:
• Paciente: paciente@demo.com / senha123
• Psicólogo: psicologo@demo.com / senha123

Base de Psicólogos:
• Mínimo de 6 profissionais com perfis diversos
• Diferentes especialidades (Ansiedade, Depressão, LGBTQIA+, etc.)
• Horários variados de atendimento
• Descrições personalizadas
• Tempo de experiência diferenciado

——————————————————————————

✅ CRITÉRIOS DE ACEITE

1. Login funcional com diferenciação de usuários
2. Listagem dinâmica de psicólogos
3. Sistema de busca e filtros operacional
4. Responsividade em todos os dispositivos
5. Botão de contato revelando informações (email)
6. Navegação fluida entre páginas
7. Logout com redirecionamento para login
8. Persistência de sessão (localStorage)

——————————————————————————

🛠 STACK TÉCNICA

• Framework: React
• Roteamento: React Router DOM
• Estilização: CSS Modules
• Build Tool: Vite
• State Management: Context API

——————————————————————————

📅 PRAZO DE ENTREGA
Sprint atual - Entrega do MVP funcional

💡 OBSERVAÇÕES
• Foco na experiência do usuário paciente
• Interface deve transmitir confiança e acolhimento
• Deixar claro que são estagiários supervisionados
• Preparar estrutura para futura integração com backend