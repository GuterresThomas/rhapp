import jwt from 'jsonwebtoken';


const TOKEN_KEY = 'authToken';
const SECRET_KEY = 'senha1234';


// Função para definir o token no armazenamento local
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
  console.log('token setado:', token)
};

// Função para obter o token do armazenamento local
export const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  console.log('token pego:', token);
  return token;
};

// Função para verificar se o token é válido
export const isTokenValid = () => {
  const token = getToken();

  if (token) {
    try {
      // Verificar o token usando a chave secreta
      jwt.verify(token, 'senha1234');
      return true;
    } catch (error) {
      // Token inválido ou expirado
      return false;
    }
  }

  // Token não existe no armazenamento local
  return false;
};