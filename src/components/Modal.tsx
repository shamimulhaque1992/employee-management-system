import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Record<string, FormDataEntryValue>) => void;
  children: React.ReactNode;
  isUpdate: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, children, isUpdate }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSubmit(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-4/12">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-white">{isUpdate ? 'Edit Employee' : 'Add Employee'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4 dark:text-white">
          {children}
          <div className="flex justify-between">
            <button onClick={onClose} className="mt-2 text-red-600 dark:text-red-400 border border-red-600 dark:border-red-400 rounded-md px-4 py-2 hover:bg-red-600 dark:hover:bg-red-900 hover:text-white transition duration-200">Cancel</button>
            <button type="submit" className="mt-2 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition duration-200">{isUpdate ? 'Update Employee' : 'Add Employee'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal; 