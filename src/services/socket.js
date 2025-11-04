// Detectar se estamos no GitHub Pages
const isGitHubPages = window.location.hostname.includes('github.io') ||
                      import.meta.env.VITE_USE_MOCK_API === 'true';

let socket = null;

// Funções que serão exportadas
export let initSocket;
export let getSocket;
export let disconnectSocket;
export let onNotification;
export let offNotification;
export let onMessage;
export let offMessage;
export let onUserStatus;
export let offUserStatus;
export let emitTyping;

// Inicialização assíncrona baseada no ambiente
if (isGitHubPages) {
  // Usar mock socket para GitHub Pages
  console.log('🎭 Usando Socket mockado para GitHub Pages');

  // Importar mock socket dinamicamente
  import('./mockSocket').then(mockSocketModule => {
    initSocket = mockSocketModule.initSocket;
    getSocket = mockSocketModule.getSocket;
    disconnectSocket = mockSocketModule.disconnectSocket;

    onNotification = (callback) => {
      const socket = getSocket();
      if (socket) {
        socket.on('notification', callback);
      }
    };

    offNotification = () => {
      const socket = getSocket();
      if (socket) {
        socket.off('notification');
      }
    };

    onMessage = (callback) => {
      const socket = getSocket();
      if (socket) {
        socket.on('message', callback);
      }
    };

    offMessage = () => {
      const socket = getSocket();
      if (socket) {
        socket.off('message');
      }
    };

    onUserStatus = (callback) => {
      const socket = getSocket();
      if (socket) {
        socket.on('user:status', callback);
      }
    };

    offUserStatus = () => {
      const socket = getSocket();
      if (socket) {
        socket.off('user:status');
      }
    };

    emitTyping = (recipientId, isTyping) => {
      const socket = getSocket();
      if (socket) {
        socket.emit(isTyping ? 'typing:start' : 'typing:stop', { recipientId });
      }
    };
  });

  // Funções temporárias até o módulo carregar
  initSocket = () => { console.log('Mock socket carregando...'); return null; };
  getSocket = () => null;
  disconnectSocket = () => {};
  onNotification = () => {};
  offNotification = () => {};
  onMessage = () => {};
  offMessage = () => {};
  onUserStatus = () => {};
  offUserStatus = () => {};
  emitTyping = () => {};

} else {
  // Usar socket.io real
  import('socket.io-client').then(({ io }) => {
    const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000';

    initSocket = (token) => {
      if (socket) {
        return socket;
      }

      socket = io(SOCKET_URL, {
        auth: {
          token
        },
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5
      });

      socket.on('connect', () => {
        console.log('✅ Socket connected');
        socket.emit('user:online');
      });

      socket.on('disconnect', () => {
        console.log('❌ Socket disconnected');
      });

      socket.on('connect_error', (error) => {
        console.error('Socket connection error:', error);
      });

      return socket;
    };

    getSocket = () => {
      return socket;
    };

    disconnectSocket = () => {
      if (socket) {
        socket.disconnect();
        socket = null;
      }
    };

    // Helper functions para eventos específicos
    onNotification = (callback) => {
      if (socket) {
        socket.on('notification', callback);
      }
    };

    offNotification = () => {
      if (socket) {
        socket.off('notification');
      }
    };

    onMessage = (callback) => {
      if (socket) {
        socket.on('message', callback);
      }
    };

    offMessage = () => {
      if (socket) {
        socket.off('message');
      }
    };

    onUserStatus = (callback) => {
      if (socket) {
        socket.on('user:status', callback);
      }
    };

    offUserStatus = () => {
      if (socket) {
        socket.off('user:status');
      }
    };

    emitTyping = (recipientId, isTyping) => {
      if (socket) {
        socket.emit(isTyping ? 'typing:start' : 'typing:stop', { recipientId });
      }
    };
  });

  // Funções temporárias até o socket.io carregar
  initSocket = () => { console.log('Socket.IO carregando...'); return null; };
  getSocket = () => null;
  disconnectSocket = () => {};
  onNotification = () => {};
  offNotification = () => {};
  onMessage = () => {};
  offMessage = () => {};
  onUserStatus = () => {};
  offUserStatus = () => {};
  emitTyping = () => {};
}