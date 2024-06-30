import React, { useState } from 'react';

const users = []; // Array para almacenar los usuarios

const createUser = async (email, password, name) => {
  // ... (la función createUser sigue igual)
};

const login = async (email, password) => {
  try {
    // Buscar al usuario en el array de usuarios
    const user = users.find((user) => user.email === email);
    if (!user) {
      throw new Error('El usuario no existe');
    }

    // Verificar la contraseña
    if (user.password !== password) {
      throw new Error('La contraseña es incorrecta');
    }

    // El usuario se ha logueado correctamente
    return user;
  } catch (error) {
    throw error;
  }
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await login(email, password);
      console.log('Iniciaste sesión exitosamente!');
      alert(`¡Bienvenido, ${user.name}! Has iniciado sesión correctamente.`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 text-white p-8 pt-6 pb-8 mb-4 rounded">
      <h2 className="text-2xl mb-4 animate-pulse text-white">Iniciar sesión</h2>
      <label className="block mb-2">
        <span className="text-white">Correo electrónico</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={`w-full px-4 py-2 mt-2 border rounded-md ${error ? 'border-red-500' : ''}`}
          style={{ color: 'black' }}
        />
      </label>
      <label className="block mb-2">
        <span className="text-white">Contraseña</span>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className={`w-full px-4 py-2 mt-2 border rounded-md ${error ? 'border-red-500' : ''}`}
          style={{ color: 'black' }}
        />
      </label>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Iniciar sesión
      </button>
      <p className="text-lg text-white animate-pulse mt-4">¿No tienes cuenta? Regístrate</p>
    </form>
  );
};

export default Login;