import React from 'react';
import Login from './login';
import CreateUser from './CreateUser';

export default function App() {
  return (
    <main className="h-screen flex flex-col bg-gray-900 text-white">
      <header className="py-4">
        <div className="text-4xl font-bold text-center tracking-wider uppercase">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">¡Bienvenido!</span>
        </div>
      </header>
      <section className="flex flex-col justify-center py-12">
        <div className="flex flex-row justify-center gap-4">
          <CreateUser className="w-1/2" />
          <Login className="w-1/2" />
        </div>
      </section>
    </main>
  );
}