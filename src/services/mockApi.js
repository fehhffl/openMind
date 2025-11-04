// Serviço de API mockado para GitHub Pages
import {
  mockUsers,
  mockNotifications,
  mockPatientsContacted,
  mockMessages,
  mockDelay,
  generateMockToken,
  getCurrentMockUser
} from './mockData';

class MockApiService {
  constructor() {
    this.initializeLocalStorage();
  }

  // Inicializa o localStorage com dados mockados
  initializeLocalStorage() {
    if (!localStorage.getItem('mock_notifications')) {
      localStorage.setItem('mock_notifications', JSON.stringify(mockNotifications));
    }
    if (!localStorage.getItem('mock_patients_contacted')) {
      localStorage.setItem('mock_patients_contacted', JSON.stringify(mockPatientsContacted));
    }
    if (!localStorage.getItem('mock_messages')) {
      localStorage.setItem('mock_messages', JSON.stringify(mockMessages));
    }
  }

  // Simula requisição com delay e resposta formatada
  async mockResponse(data, delay = 300) {
    await mockDelay(delay);
    return { data };
  }

  // AUTH ENDPOINTS
  async login(email, password) {
    await mockDelay();

    // Buscar usuário por email
    const allUsers = [...mockUsers.psychologists, ...mockUsers.patients];
    const user = allUsers.find(u => u.email === email);

    if (!user) {
      throw new Error('Email ou senha incorretos');
    }

    // Para demo, aceitar qualquer senha
    const token = generateMockToken(user);

    return this.mockResponse({
      token,
      user: {
        ...user,
        password: undefined // Não retornar senha
      }
    });
  }

  async register(formData) {
    await mockDelay();

    // Verificar se email já existe
    const allUsers = [...mockUsers.psychologists, ...mockUsers.patients];
    const exists = allUsers.some(u => u.email === formData.email);

    if (exists) {
      throw new Error('Email já cadastrado');
    }

    // Criar novo usuário mockado
    const newUser = {
      _id: `user_${Date.now()}`,
      ...formData,
      profilePicture: `https://i.pravatar.cc/300?img=${Math.floor(Math.random() * 50)}`,
      createdAt: new Date().toISOString()
    };

    // Adicionar aos dados mockados (apenas em memória)
    if (formData.role === 'psychologist') {
      mockUsers.psychologists.push(newUser);
    } else {
      mockUsers.patients.push(newUser);
    }

    const token = generateMockToken(newUser);

    return this.mockResponse({
      message: 'Usuário registrado com sucesso!',
      token,
      user: {
        ...newUser,
        password: undefined
      }
    });
  }

  // USERS ENDPOINTS
  async getUsers(role) {
    await mockDelay();

    if (role === 'psychologist') {
      return this.mockResponse(mockUsers.psychologists);
    } else if (role === 'patient') {
      return this.mockResponse(mockUsers.patients);
    }

    return this.mockResponse([...mockUsers.psychologists, ...mockUsers.patients]);
  }

  async getPsychologists() {
    return this.getUsers('psychologist');
  }

  async getPatients() {
    return this.getUsers('patient');
  }

  async updateProfile(updateData) {
    await mockDelay();

    const currentUser = getCurrentMockUser();
    if (!currentUser) {
      throw new Error('Usuário não autenticado');
    }

    // Atualizar dados do usuário mockado
    const updatedUser = {
      ...currentUser,
      ...updateData
    };

    // Atualizar no array correspondente (apenas em memória)
    if (currentUser.role === 'psychologist') {
      const index = mockUsers.psychologists.findIndex(u => u._id === currentUser._id);
      if (index !== -1) {
        mockUsers.psychologists[index] = updatedUser;
      }
    } else {
      const index = mockUsers.patients.findIndex(u => u._id === currentUser._id);
      if (index !== -1) {
        mockUsers.patients[index] = updatedUser;
      }
    }

    return this.mockResponse({
      message: 'Perfil atualizado com sucesso!',
      user: updatedUser
    });
  }

  async getPatientsContacted() {
    await mockDelay();

    const currentUser = getCurrentMockUser();
    if (!currentUser) {
      throw new Error('Usuário não autenticado');
    }

    // Obter pacientes contatados do localStorage
    const stored = localStorage.getItem('mock_patients_contacted');
    const patientsContacted = stored ? JSON.parse(stored) : mockPatientsContacted;

    return this.mockResponse(patientsContacted[currentUser._id] || []);
  }

  // NOTIFICATIONS ENDPOINTS
  async getNotifications() {
    await mockDelay();

    const currentUser = getCurrentMockUser();
    if (!currentUser) {
      throw new Error('Usuário não autenticado');
    }

    // Obter notificações do localStorage
    const stored = localStorage.getItem('mock_notifications');
    const notifications = stored ? JSON.parse(stored) : mockNotifications;

    // Filtrar notificações do usuário atual
    const userNotifications = notifications.filter(n => n.userId === currentUser._id);

    return this.mockResponse(userNotifications);
  }

  async createNotification(notificationData) {
    await mockDelay();

    const currentUser = getCurrentMockUser();
    if (!currentUser) {
      throw new Error('Usuário não autenticado');
    }

    // Criar nova notificação
    const newNotification = {
      _id: `notif_${Date.now()}`,
      ...notificationData,
      read: false,
      createdAt: new Date().toISOString()
    };

    // Adicionar ao localStorage
    const stored = localStorage.getItem('mock_notifications');
    const notifications = stored ? JSON.parse(stored) : mockNotifications;
    notifications.unshift(newNotification);
    localStorage.setItem('mock_notifications', JSON.stringify(notifications));

    // Se for notificação de interesse de paciente, adicionar aos contatados
    if (notificationData.type === 'patient_interest' && currentUser.role === 'psychologist') {
      const patientsStored = localStorage.getItem('mock_patients_contacted');
      const patientsContacted = patientsStored ? JSON.parse(patientsStored) : mockPatientsContacted;

      if (!patientsContacted[currentUser._id]) {
        patientsContacted[currentUser._id] = [];
      }

      const patientInfo = mockUsers.patients.find(p => p._id === notificationData.patientId);
      if (patientInfo) {
        patientsContacted[currentUser._id].push({
          ...patientInfo,
          contactedAt: new Date().toISOString(),
          status: 'aguardando_resposta',
          lastMessage: notificationData.message
        });
        localStorage.setItem('mock_patients_contacted', JSON.stringify(patientsContacted));
      }
    }

    return this.mockResponse({
      message: 'Notificação enviada com sucesso!',
      notification: newNotification
    });
  }

  async markNotificationAsRead(notificationId) {
    await mockDelay();

    // Atualizar notificação no localStorage
    const stored = localStorage.getItem('mock_notifications');
    const notifications = stored ? JSON.parse(stored) : mockNotifications;

    const notification = notifications.find(n => n._id === notificationId);
    if (notification) {
      notification.read = true;
      localStorage.setItem('mock_notifications', JSON.stringify(notifications));
    }

    return this.mockResponse({ message: 'Notificação marcada como lida' });
  }

  async markAllNotificationsAsRead() {
    await mockDelay();

    const currentUser = getCurrentMockUser();
    if (!currentUser) {
      throw new Error('Usuário não autenticado');
    }

    // Marcar todas as notificações do usuário como lidas
    const stored = localStorage.getItem('mock_notifications');
    const notifications = stored ? JSON.parse(stored) : mockNotifications;

    notifications.forEach(n => {
      if (n.userId === currentUser._id) {
        n.read = true;
      }
    });

    localStorage.setItem('mock_notifications', JSON.stringify(notifications));

    return this.mockResponse({ message: 'Todas as notificações foram marcadas como lidas' });
  }

  async deleteNotification(notificationId) {
    await mockDelay();

    // Remover notificação do localStorage
    const stored = localStorage.getItem('mock_notifications');
    const notifications = stored ? JSON.parse(stored) : mockNotifications;

    const filtered = notifications.filter(n => n._id !== notificationId);
    localStorage.setItem('mock_notifications', JSON.stringify(filtered));

    return this.mockResponse({ message: 'Notificação removida com sucesso' });
  }

  // MESSAGES ENDPOINTS (Chat)
  async getMessages(otherUserId) {
    await mockDelay();

    const currentUser = getCurrentMockUser();
    if (!currentUser) {
      throw new Error('Usuário não autenticado');
    }

    // Obter mensagens do localStorage
    const stored = localStorage.getItem('mock_messages');
    const allMessages = stored ? JSON.parse(stored) : mockMessages;

    // Buscar conversas entre os dois usuários
    const chatKey1 = `${currentUser._id}-${otherUserId}`;
    const chatKey2 = `${otherUserId}-${currentUser._id}`;

    const messages = allMessages[chatKey1] || allMessages[chatKey2] || [];

    return this.mockResponse(messages);
  }

  async sendMessage(receiverId, message) {
    await mockDelay();

    const currentUser = getCurrentMockUser();
    if (!currentUser) {
      throw new Error('Usuário não autenticado');
    }

    // Criar nova mensagem
    const newMessage = {
      _id: `msg_${Date.now()}`,
      sender: currentUser._id,
      receiver: receiverId,
      message,
      timestamp: new Date().toISOString()
    };

    // Adicionar ao localStorage
    const stored = localStorage.getItem('mock_messages');
    const allMessages = stored ? JSON.parse(stored) : mockMessages;

    const chatKey = `${currentUser._id}-${receiverId}`;
    if (!allMessages[chatKey]) {
      allMessages[chatKey] = [];
    }
    allMessages[chatKey].push(newMessage);

    localStorage.setItem('mock_messages', JSON.stringify(allMessages));

    return this.mockResponse({
      message: 'Mensagem enviada com sucesso!',
      data: newMessage
    });
  }

  // APPOINTMENTS ENDPOINTS
  async getAppointments() {
    await mockDelay();

    // Retornar appointments mockados
    return this.mockResponse([
      {
        _id: 'apt1',
        patientId: 'patient1',
        psychologistId: 'psico1',
        date: new Date('2024-02-01T15:00:00').toISOString(),
        status: 'confirmado',
        notes: 'Primeira consulta'
      },
      {
        _id: 'apt2',
        patientId: 'patient2',
        psychologistId: 'psico1',
        date: new Date('2024-02-05T14:00:00').toISOString(),
        status: 'pendente',
        notes: 'Acompanhamento'
      }
    ]);
  }

  async createAppointment(appointmentData) {
    await mockDelay();

    const newAppointment = {
      _id: `apt_${Date.now()}`,
      ...appointmentData,
      status: 'pendente',
      createdAt: new Date().toISOString()
    };

    return this.mockResponse({
      message: 'Agendamento criado com sucesso!',
      appointment: newAppointment
    });
  }
}

// Criar instância única do serviço mockado
const mockApiService = new MockApiService();

// Criar objeto compatível com axios
const mockApi = {
  // Interceptors mockados (para compatibilidade)
  interceptors: {
    request: {
      use: () => {}
    },
    response: {
      use: () => {}
    }
  },

  // Métodos HTTP
  get: async (url) => {
    // Remover a barra inicial se houver
    const endpoint = url.startsWith('/') ? url.substring(1) : url;

    switch (endpoint) {
      case 'users/psychologists':
        return mockApiService.getPsychologists();

      case 'users/patients':
        return mockApiService.getPatients();

      case 'users/patients-contacted':
        return mockApiService.getPatientsContacted();

      case 'notifications':
        return mockApiService.getNotifications();

      case 'appointments':
        return mockApiService.getAppointments();

      default:
        // Para mensagens com ID de usuário
        if (endpoint.startsWith('messages/')) {
          const userId = endpoint.split('/')[1];
          return mockApiService.getMessages(userId);
        }
        console.log('Endpoint não mockado:', endpoint);
        return mockApiService.mockResponse([]);
    }
  },

  post: async (url, data) => {
    const endpoint = url.startsWith('/') ? url.substring(1) : url;

    switch (endpoint) {
      case 'auth/login':
        return mockApiService.login(data.email, data.password);

      case 'auth/register':
        return mockApiService.register(data);

      case 'notifications':
        return mockApiService.createNotification(data);

      case 'appointments':
        return mockApiService.createAppointment(data);

      default:
        // Para mensagens
        if (endpoint.startsWith('messages/')) {
          const userId = endpoint.split('/')[1];
          return mockApiService.sendMessage(userId, data.message);
        }
        console.log('Endpoint não mockado:', endpoint);
        return mockApiService.mockResponse({ success: true });
    }
  },

  put: async (url, data) => {
    const endpoint = url.startsWith('/') ? url.substring(1) : url;

    if (endpoint === 'users/profile') {
      return mockApiService.updateProfile(data);
    } else if (endpoint === 'notifications/read-all') {
      return mockApiService.markAllNotificationsAsRead();
    } else if (endpoint.match(/notifications\/.*\/read/)) {
      const notificationId = endpoint.split('/')[1];
      return mockApiService.markNotificationAsRead(notificationId);
    }

    console.log('Endpoint não mockado:', endpoint);
    return mockApiService.mockResponse({ success: true });
  },

  delete: async (url) => {
    const endpoint = url.startsWith('/') ? url.substring(1) : url;

    if (endpoint.startsWith('notifications/')) {
      const notificationId = endpoint.split('/')[1];
      return mockApiService.deleteNotification(notificationId);
    }

    console.log('Endpoint não mockado:', endpoint);
    return mockApiService.mockResponse({ success: true });
  },

  patch: async (url, data) => {
    console.log('PATCH não mockado:', url);
    return mockApiService.mockResponse({ success: true });
  }
};

// Exportar tanto o serviço quanto o objeto mockado
export { mockApiService };
export default mockApi;