import React, { useState } from 'react';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name.length < 3) {
      setError('El nombre debe tener al menos 3 caracteres');
    } else if (password.length < 3) {
      setError('La contraseña debe tener al menos 3 caracteres');
    } else if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
    } else {
      try {
        const data = await createUser(name, email, password);
        console.log('Usuario creado exitosamente!');
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 text-white p-8 pt-6 pb-8 mb-4 rounded">
      <h2 className="text-2xl mb-4 animate-pulse text-white">Crear cuenta</h2>
      <label className="block mb-2">
        <span className="text-white">Nombre</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={`w-full px-4 py-2 mt-2 border rounded-md ${error ? 'border-red-500' : ''}`}
          style={{ color: 'black' }}
        />
      </label>
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
      <label className="block mb-2">
        <span className="text-white">Confirmar contraseña</span>
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          className={`w-full px-4 py-2 mt-2 border rounded-md ${error ? 'border-red-500' : ''}`}
          style={{ color: 'black' }}
        />
      </label>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Crear cuenta
      </button>
      <p className="text-lg text-white animate-pulse mt-4">Si ya tienes cuenta, inicia sesión</p>
    </form>
  );
};

export default CreateUser;