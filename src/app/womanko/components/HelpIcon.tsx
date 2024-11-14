// components/HelpIcon.tsx
import React, { useState } from 'react';
import { MdHelpOutline } from 'react-icons/md';
import Modal from './HelpModal'; // Import the Modal component

const HelpIcon: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <MdHelpOutline
        className="absolute top-0 right-0 text-2xl cursor-pointer hover:text-blue-500"
        onClick={openModal}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HelpIcon;
