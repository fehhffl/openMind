// Mock Socket.IO para GitHub Pages
// Simula as funcionalidades do socket sem conexão real

class MockSocket {
  constructor() {
    this.connected = false;
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);

    // Simular algumas notificações após um delay
    if (event === 'notification') {
      setTimeout(() => {
        this.simulateNotification();
      }, 5000);
    }
  }

  emit(event, data) {
    console.log(`[MockSocket] Emitindo evento: ${event}`, data);
    // Simular resposta do servidor
    if (event === 'join') {
      console.log(`[MockSocket] Usuário ${data} entrou no sistema`);
    }
  }

  off(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    }
  }

  disconnect() {
    this.connected = false;
    console.log('[MockSocket] Desconectado');
  }

  connect() {
    this.connected = true;
    console.log('[MockSocket] Conectado (modo mock)');
  }

  simulateNotification() {
    // Simular uma notificação ocasional
    const mockNotification = {
      _id: `mock_notif_${Date.now()}`,
      title: 'Notificação de Teste',
      message: 'Esta é uma notificação simulada para demonstração.',
      type: 'info',
      createdAt: new Date().toISOString()
    };

    if (this.listeners['notification']) {
      this.listeners['notification'].forEach(callback => {
        callback(mockNotification);
      });
    }
  }
}

// Instância global do socket mockado
let mockSocket = null;

export const initSocket = (token) => {
  console.log('[MockSocket] Inicializando socket mockado');
  if (!mockSocket) {
    mockSocket = new MockSocket();
  }
  mockSocket.connect();

  // Simular entrada do usuário
  if (token) {
    const payload = JSON.parse(atob(token.split('.')[1]));
    mockSocket.emit('join', payload.userId);
  }

  return mockSocket;
};

export const getSocket = () => {
  if (!mockSocket) {
    console.warn('[MockSocket] Socket não inicializado');
    mockSocket = new MockSocket();
  }
  return mockSocket;
};

export const disconnectSocket = () => {
  if (mockSocket) {
    mockSocket.disconnect();
    mockSocket = null;
  }
};

// Funções auxiliares para emular comportamento do socket real
export const subscribeToNotifications = (callback) => {
  const socket = getSocket();
  socket.on('notification', callback);

  // Cleanup function
  return () => {
    socket.off('notification', callback);
  };
};

export const subscribeToMessages = (callback) => {
  const socket = getSocket();
  socket.on('message', callback);

  return () => {
    socket.off('message', callback);
  };
};

export const sendTypingStatus = (receiverId, isTyping) => {
  const socket = getSocket();
  socket.emit(isTyping ? 'typing:start' : 'typing:stop', { receiverId });
};

export default mockSocket;