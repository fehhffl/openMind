import axios from 'axios';
import mockApi from './mockApi';

// Detectar se estamos no GitHub Pages ou em desenvolvimento local
const isGitHubPages = window.location.hostname.includes('github.io') ||
                      import.meta.env.VITE_USE_MOCK_API === 'true';

let api;

// Se estiver no GitHub Pages, usar API mockada
if (isGitHubPages) {
  console.log('🎭 Usando API mockada para GitHub Pages');
  api = mockApi;
} else {
  // Caso contrário, usar API real
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  api = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Interceptor para adicionar o token em todas as requisições
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Interceptor para tratar erros de resposta
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        // Retornar mensagem de erro do backend
        const message = error.response.data.message || 'Erro ao processar requisição';
        return Promise.reject(new Error(message));
      }

      return Promise.reject(error);
    }
  );
}

export default api;