// Dados mockados para o GitHub Pages

// Usuários mockados
export const mockUsers = {
  psychologists: [
    {
      _id: 'psico1',
      name: 'Dra. Maria Silva',
      email: 'maria.silva@psico.com',
      specialty: 'Psicologia Clínica',
      experience: 10,
      crp: '06/123456',
      bio: 'Especialista em terapia cognitivo-comportamental com foco em ansiedade e depressão.',
      availability: 'Segunda a Sexta, 8h às 18h',
      consultationValue: 'R$ 150,00',
      phone: '(11) 98765-4321',
      profilePicture: 'https://i.pravatar.cc/300?img=1',
      role: 'psychologist',
      createdAt: new Date('2023-01-15').toISOString()
    },
    {
      _id: 'psico2',
      name: 'Dr. João Santos',
      email: 'joao.santos@psico.com',
      specialty: 'Psicologia Infantil',
      experience: 8,
      crp: '06/234567',
      bio: 'Atendimento especializado para crianças e adolescentes, com abordagem lúdica e acolhedora.',
      availability: 'Segunda a Quinta, 9h às 17h',
      consultationValue: 'R$ 180,00',
      phone: '(11) 98765-4322',
      profilePicture: 'https://i.pravatar.cc/300?img=2',
      role: 'psychologist',
      createdAt: new Date('2023-02-20').toISOString()
    },
    {
      _id: 'psico3',
      name: 'Dra. Ana Oliveira',
      email: 'ana.oliveira@psico.com',
      specialty: 'Neuropsicologia',
      experience: 12,
      crp: '06/345678',
      bio: 'Especialista em avaliação neuropsicológica e reabilitação cognitiva.',
      availability: 'Terça a Sexta, 10h às 19h',
      consultationValue: 'R$ 200,00',
      phone: '(11) 98765-4323',
      profilePicture: 'https://i.pravatar.cc/300?img=5',
      role: 'psychologist',
      createdAt: new Date('2023-03-10').toISOString()
    },
    {
      _id: 'psico4',
      name: 'Dr. Carlos Mendes',
      email: 'carlos.mendes@psico.com',
      specialty: 'Psicologia do Esporte',
      experience: 6,
      crp: '06/456789',
      bio: 'Trabalho com atletas e praticantes de atividade física para desenvolvimento mental e performance.',
      availability: 'Segunda, Quarta e Sexta, 14h às 20h',
      consultationValue: 'R$ 170,00',
      phone: '(11) 98765-4324',
      profilePicture: 'https://i.pravatar.cc/300?img=3',
      role: 'psychologist',
      createdAt: new Date('2023-04-05').toISOString()
    },
    {
      _id: 'psico5',
      name: 'Dra. Patrícia Costa',
      email: 'patricia.costa@psico.com',
      specialty: 'Terapia de Casal',
      experience: 15,
      crp: '06/567890',
      bio: 'Especialista em terapia de casal e familiar, mediação de conflitos e comunicação não-violenta.',
      availability: 'Terça a Sábado, 9h às 18h',
      consultationValue: 'R$ 220,00',
      phone: '(11) 98765-4325',
      profilePicture: 'https://i.pravatar.cc/300?img=9',
      role: 'psychologist',
      createdAt: new Date('2023-05-12').toISOString()
    }
  ],
  patients: [
    {
      _id: 'patient1',
      name: 'Pedro Almeida',
      email: 'pedro.almeida@email.com',
      phone: '(11) 97654-3210',
      age: 28,
      mainComplaint: 'Ansiedade generalizada',
      profilePicture: 'https://i.pravatar.cc/300?img=11',
      role: 'patient',
      createdAt: new Date('2023-06-01').toISOString()
    },
    {
      _id: 'patient2',
      name: 'Julia Ferreira',
      email: 'julia.ferreira@email.com',
      phone: '(11) 97654-3211',
      age: 35,
      mainComplaint: 'Estresse no trabalho',
      profilePicture: 'https://i.pravatar.cc/300?img=16',
      role: 'patient',
      createdAt: new Date('2023-06-15').toISOString()
    },
    {
      _id: 'patient3',
      name: 'Roberto Lima',
      email: 'roberto.lima@email.com',
      phone: '(11) 97654-3212',
      age: 42,
      mainComplaint: 'Problemas de relacionamento',
      profilePicture: 'https://i.pravatar.cc/300?img=13',
      role: 'patient',
      createdAt: new Date('2023-07-01').toISOString()
    },
    {
      _id: 'patient4',
      name: 'Amanda Souza',
      email: 'amanda.souza@email.com',
      phone: '(11) 97654-3213',
      age: 23,
      mainComplaint: 'Orientação vocacional',
      profilePicture: 'https://i.pravatar.cc/300?img=20',
      role: 'patient',
      createdAt: new Date('2023-07-20').toISOString()
    },
    {
      _id: 'patient5',
      name: 'Fernando Rocha',
      email: 'fernando.rocha@email.com',
      phone: '(11) 97654-3214',
      age: 31,
      mainComplaint: 'Depressão',
      profilePicture: 'https://i.pravatar.cc/300?img=15',
      role: 'patient',
      createdAt: new Date('2023-08-05').toISOString()
    },
    {
      _id: 'patient6',
      name: 'Beatriz Martins',
      email: 'beatriz.martins@email.com',
      phone: '(11) 97654-3215',
      age: 27,
      mainComplaint: 'Síndrome do pânico',
      profilePicture: 'https://i.pravatar.cc/300?img=21',
      role: 'patient',
      createdAt: new Date('2023-08-12').toISOString()
    }
  ]
};

// Notificações mockadas
export const mockNotifications = [
  {
    _id: 'notif1',
    userId: 'psico1',
    title: 'Novo paciente interessado',
    message: 'Pedro Almeida demonstrou interesse em agendar uma consulta.',
    type: 'patient_interest',
    read: false,
    createdAt: new Date('2024-01-20T10:30:00').toISOString(),
    patientInfo: mockUsers.patients[0]
  },
  {
    _id: 'notif2',
    userId: 'psico1',
    title: 'Consulta confirmada',
    message: 'Julia Ferreira confirmou a consulta para quinta-feira às 14h.',
    type: 'appointment_confirmed',
    read: false,
    createdAt: new Date('2024-01-19T15:45:00').toISOString(),
    patientInfo: mockUsers.patients[1]
  },
  {
    _id: 'notif3',
    userId: 'patient1',
    title: 'Resposta do psicólogo',
    message: 'Dra. Maria Silva respondeu ao seu interesse em consulta.',
    type: 'psychologist_response',
    read: true,
    createdAt: new Date('2024-01-18T09:15:00').toISOString(),
    psychologistInfo: mockUsers.psychologists[0]
  },
  {
    _id: 'notif4',
    userId: 'psico2',
    title: 'Novo paciente interessado',
    message: 'Roberto Lima quer agendar uma sessão de terapia de casal.',
    type: 'patient_interest',
    read: false,
    createdAt: new Date('2024-01-21T11:00:00').toISOString(),
    patientInfo: mockUsers.patients[2]
  },
  {
    _id: 'notif5',
    userId: 'patient2',
    title: 'Lembrete de consulta',
    message: 'Sua consulta com Dr. João Santos é amanhã às 16h.',
    type: 'appointment_reminder',
    read: false,
    createdAt: new Date('2024-01-20T18:00:00').toISOString(),
    psychologistInfo: mockUsers.psychologists[1]
  }
];

// Pacientes contatados (para psicólogos)
export const mockPatientsContacted = {
  'psico1': [
    {
      ...mockUsers.patients[0],
      contactedAt: new Date('2024-01-15').toISOString(),
      status: 'em_atendimento',
      lastMessage: 'Vamos agendar nossa próxima sessão?'
    },
    {
      ...mockUsers.patients[1],
      contactedAt: new Date('2024-01-10').toISOString(),
      status: 'aguardando_resposta',
      lastMessage: 'Obrigada pela primeira consulta, foi muito esclarecedora.'
    }
  ],
  'psico2': [
    {
      ...mockUsers.patients[2],
      contactedAt: new Date('2024-01-18').toISOString(),
      status: 'em_atendimento',
      lastMessage: 'Podemos marcar para próxima semana?'
    }
  ],
  'psico3': [
    {
      ...mockUsers.patients[3],
      contactedAt: new Date('2024-01-12').toISOString(),
      status: 'finalizado',
      lastMessage: 'Muito obrigada pelo acompanhamento!'
    },
    {
      ...mockUsers.patients[4],
      contactedAt: new Date('2024-01-20').toISOString(),
      status: 'em_atendimento',
      lastMessage: 'Estou me sentindo melhor após nossas sessões.'
    }
  ]
};

// Função auxiliar para simular delay de rede
export const mockDelay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

// Função para gerar token JWT mockado
export const generateMockToken = (user) => {
  // Token fake mas com estrutura similar a um JWT real
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(JSON.stringify({
    userId: user._id,
    email: user.email,
    role: user.role,
    exp: Date.now() + 86400000 // 24 horas
  }));
  const signature = btoa('mock-signature');
  return `${header}.${payload}.${signature}`;
};

// Função para decodificar token mockado
export const decodeMockToken = (token) => {
  try {
    const [, payload] = token.split('.');
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
};

// Função para obter usuário atual do localStorage
export const getCurrentMockUser = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const decoded = decodeMockToken(token);
  if (!decoded) return null;

  // Buscar usuário nos dados mockados
  const allUsers = [...mockUsers.psychologists, ...mockUsers.patients];
  return allUsers.find(u => u._id === decoded.userId) || null;
};

// Mensagens de chat mockadas
export const mockMessages = {
  'psico1-patient1': [
    {
      _id: 'msg1',
      sender: 'patient1',
      receiver: 'psico1',
      message: 'Olá Dra. Maria, gostaria de agendar uma consulta.',
      timestamp: new Date('2024-01-15T10:00:00').toISOString()
    },
    {
      _id: 'msg2',
      sender: 'psico1',
      receiver: 'patient1',
      message: 'Olá Pedro! Claro, tenho horários disponíveis na quinta-feira.',
      timestamp: new Date('2024-01-15T10:30:00').toISOString()
    },
    {
      _id: 'msg3',
      sender: 'patient1',
      receiver: 'psico1',
      message: 'Perfeito! Pode ser às 15h?',
      timestamp: new Date('2024-01-15T11:00:00').toISOString()
    },
    {
      _id: 'msg4',
      sender: 'psico1',
      receiver: 'patient1',
      message: 'Confirmado! Te aguardo quinta-feira às 15h.',
      timestamp: new Date('2024-01-15T11:15:00').toISOString()
    }
  ],
  'psico1-patient2': [
    {
      _id: 'msg5',
      sender: 'patient2',
      receiver: 'psico1',
      message: 'Dra. Maria, preciso remarcar nossa sessão.',
      timestamp: new Date('2024-01-16T14:00:00').toISOString()
    },
    {
      _id: 'msg6',
      sender: 'psico1',
      receiver: 'patient2',
      message: 'Sem problemas, Julia. Qual horário seria melhor para você?',
      timestamp: new Date('2024-01-16T14:30:00').toISOString()
    }
  ]
};