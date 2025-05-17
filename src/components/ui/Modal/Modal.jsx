import { useModal } from "@/hooks/useModal.js";
import "./Modal.scss"; // если хочешь стили в отдельный файл
import Title from "../Title/Title";
import Button from "../Button/Button";
import icon from "@/assets/svg/popap-icon.svg";

const Modal = () => {
  const { modalData, closeModal } = useModal();
  if (!modalData.isOpen) return null;

  const color = modalData.content?.color || "green";

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className={`modal modal__${color}`} onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={closeModal}>
          <img src={icon} alt="" />
        </button>
        <div className="modal__container-img">
          {modalData.content?.image && (
            <img
              src={modalData.content.image}
              alt=""
              className="modal__image"
            />
          )}
        </div>
        <div className="modal__form">
          <Title size="s" weight="bold" align="left">
            {modalData.content?.title}
          </Title>
          <div className="modal__form-text">
            <p>PDF, можно скачать прямо сейчас</p>
          </div>
          <input
            className="modal__form-input"
            type="text"
            placeholder="+7 (___) ___-__-__"
          />
          <Button className="modal__form-btn" onClick={closeModal}>
            Получить
          </Button>
          <div className="modal__form-minitext">
            <p>
              Нажимая на кнопку, вы даёте согласие на обработку персональных
              данных и соглашаетесь c политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
