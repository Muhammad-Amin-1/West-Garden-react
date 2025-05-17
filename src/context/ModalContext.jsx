import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalData, setModalData] = useState({ isOpen: false, content: null });

  const openModal = (content) => {
    setModalData({ isOpen: true, content });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, content: null });
  };

  return (
    <ModalContext.Provider value={{ modalData, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
