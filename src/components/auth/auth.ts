import jwt from 'jsonwebtoken';


const TOKEN_KEY = 'authToken';
const SECRET_KEY = 'senha1234';

export const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  console.log('Token obtido:', token);
  return token;
};

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
  console.log('Token definido:', token);
};

export const removeToken = () => {
  const token = getToken();
  localStorage.removeItem(TOKEN_KEY);
  console.log('Token removido:', token);
};

export const isTokenValid = () => {
  const token = getToken();

  console.log('Token obtido:', token);

  if (!token) {
    console.log('Token não encontrado');
    return false;
  }

  try {
    jwt.verify(token, 'senha1234', { algorithms: ['HS256'] }); // Substitua 'your-secret-key' pela chave usada para assinar o token no servidor
    console.log('Token válido');
    return true;
  } catch (error) {
    console.error('Erro ao verificar o token:', error);
    return false;
  }
};
