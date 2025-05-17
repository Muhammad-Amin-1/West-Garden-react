import AboutPage from "@/pages/AboutPage/AboutPage";
import { ModalProvider } from "@/context/ModalContext";
import Modal from "@/components/ui/Modal/Modal";

export default function App() {
  return (
    <ModalProvider>
      <AboutPage />
      <Modal />
    </ModalProvider>
  );
}