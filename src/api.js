const API_URL = "https://anaislaguna-desback.onrender.com";

export async function loginUser(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error('Credenciales incorrectas');
  }

  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data;
}

export async function createUser(name, email, password) {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  });

  if (!response.ok) {
    throw new Error('Error al crear usuario');
  }

  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data;
}