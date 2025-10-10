import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000';

let socket = null;

export const initSocket = (token) => {
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

export const getSocket = () => {
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

// Helper functions para eventos específicos
export const onNotification = (callback) => {
  if (socket) {
    socket.on('notification', callback);
  }
};

export const offNotification = () => {
  if (socket) {
    socket.off('notification');
  }
};

export const onMessage = (callback) => {
  if (socket) {
    socket.on('message', callback);
  }
};

export const offMessage = () => {
  if (socket) {
    socket.off('message');
  }
};

export const onUserStatus = (callback) => {
  if (socket) {
    socket.on('user:status', callback);
  }
};

export const offUserStatus = () => {
  if (socket) {
    socket.off('user:status');
  }
};

export const emitTyping = (recipientId, isTyping) => {
  if (socket) {
    socket.emit(isTyping ? 'typing:start' : 'typing:stop', { recipientId });
  }
};
