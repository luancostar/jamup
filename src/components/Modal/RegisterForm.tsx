// src/components/RegisterModal/RegisterModal.tsx
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import RegisterForm from './RegisterForm';

export default function RegisterModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <a href="#" className="font-medium text-black hover:underline">
          Crie uma conta!
        </a>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0 z-40" />
        <Dialog.Content className="fixed z-50 left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-lg font-semibold">Criar conta</Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-gray-500 hover:text-black">
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          <RegisterForm />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
