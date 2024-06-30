import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(email, password);
      console.log('Iniciaste sesión exitosamente!');
      alert('¡Bienvenido! Has iniciado sesión correctamente.'); // <--- Agregué esta línea
    } catch (error) {
      if (error.message === 'User not found') {
        setError('El usuario no existe');
      } else if (error.message === 'Invalid password') {
        setError('La contraseña es incorrecta');
      } else {
        setError(error.message);
      }
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