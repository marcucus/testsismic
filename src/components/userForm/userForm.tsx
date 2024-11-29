import React, { useState } from "react";
import { User } from "../../types/User";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

interface UserFormProps {
  onAdd: (user: User) => void;
  onClose: (close: boolean) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onAdd, onClose }) => {
    const [form, setForm] = useState({ name: "", email: "", age: "", isActive: false });

    // Envoi des informations du nouvel utilisateur puis ferme le pop-up
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newUser: User = {
            id: Date.now(),
            name: form.name,
            email: form.email,
            age: parseInt(form.age),
            isActive: form.isActive,
        };
        onAdd(newUser);
        setForm({ name: "", email: "", age: "", isActive: false });
        onClose(true);
    };

return (

    <Dialog open={true} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>

                <div className="flex">
                    <h1 className="mr-auto text-xl font-bold">Create User</h1>
                    <button className="ml-auto size-7 items-center justify-center rounded-full bg-gray-200" onClick={() => onClose(true)}>
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
                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-900 text-white px-4 py-2 rounded">
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