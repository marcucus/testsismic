import React, { useState } from "react";
import { User } from "../../types/User";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

interface UserFormProps {
  onAdd: (user: User) => void;
  onClose: (close: boolean) => void;
}

// Définition des types pour le formulaire
interface FormState {
  name: string;
  email: string;
  age: string; // Maintenu comme string pour la saisie utilisateur, converti en nombre avant l'ajout
  isActive: boolean;
}

const UserForm: React.FC<UserFormProps> = ({ onAdd, onClose }) => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    age: "",
    isActive: false,
  });

  // Fonction pour valider chaque champ du formulaire
  const validateForm = (): boolean => {
    // Vérifie que le nom n'est pas vide
    if (!form.name.trim()) {
      alert("Name is required.");
      return false;
    }

    // Vérifie que l'email est valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Invalid email format.");
      return false;
    }

    // Vérifie que l'âge est un nombre valide dans la plage spécifiée
    const age = parseInt(form.age);
    if (isNaN(age) || age < 18 || age > 100) {
      alert("Age must be a number between 18 and 100.");
      return false;
    }

    return true;
  };

  // Gestion de l'envoi du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Crée un nouvel utilisateur et l'ajoute
    const newUser: User = {
      id: Date.now(),
      name: form.name.trim(),
      email: form.email.trim(),
      age: parseInt(form.age),
      isActive: form.isActive,
    };

    onAdd(newUser);
    setForm({ name: "", email: "", age: "", isActive: false }); // Réinitialisation du formulaire
    onClose(true); // Ferme la modale
  };

  return (
    <Dialog open={true} onClose={() => onClose(true)} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
            <div>
              <div className="flex">
                <h1 className="mr-auto text-xl font-bold">Create User</h1>
                <button
                  className="ml-auto size-7 items-center justify-center rounded-full bg-gray-200"
                  onClick={() => onClose(true)}
                >
                  X
                </button>
              </div>

              <div className="pt-3 text-center sm:pt-5">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-6">
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="border p-2 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="border p-2 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Age"
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                    required
                    min={18}
                    max={100}
                    className="border p-2 rounded"
                  />
                  <label className="flex justify-center gap-1">
                    <input
                      type="checkbox"
                      checked={form.isActive}
                      onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                    />
                    Active
                  </label>
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-900 text-white px-4 py-2 rounded"
                  >
                    Add User
                  </button>
                </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default UserForm;