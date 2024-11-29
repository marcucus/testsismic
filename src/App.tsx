import React, { useState } from 'react';
import { User } from './types/User';
import logo from './logo.svg';
import './App.css';
import UserTable from './components/userTable/userTable';
import UserForm from './components/userForm/userForm';

const generateUsers = (): User[] => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    age: Math.floor(Math.random() * 82) + 18,
    isActive: Math.random() > 0.5,
  }));
};

function App() {

  const [users, setUsers] = useState<User[]>(generateUsers());
  const [modal, setModal] = useState<Boolean>(false);

  // Ajouter un utilisateur
  const handleAddUser = (newUser: User) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    console.log(newUser);
  };

  // Supprimer un utilisateur
  const handleDeleteUser = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  // Fermer le popup
  const handleOpenModal = () => {
    setModal(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold p-6">Test Technique Sismic</h1>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
                <h1 className="text-base font-semibold text-gray-900">Utilisateurs</h1>
                <p className="mt-2 text-sm text-gray-700">
                    Liste de tout les utilisateur incluant leur nom, titre, e-mail et rôle.
                </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                    type="button"
                    onClick={ () => setModal(true)}
                    className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    + Nouvel utilisateur
                </button>
            </div>
        </div>
        {modal ? <UserForm onAdd={handleAddUser} onClose={handleOpenModal}/> : ""}
        <UserTable users={users} onDelete={handleDeleteUser}/>
      </div>
    </div>
  );
}

export default App;
