import { useState } from "react";
import Section from "@/components/layout/Section/Section";
import Title from "@/components/ui/Title/Title";
import Button from "@/components/ui/Button/Button";
import img1 from "@/assets/testimg/img-1.jpg";
import img2 from "@/assets/testimg/img-2.png";
import img3 from "@/assets/testimg/img-3.png";
import img4 from "@/assets/testimg/img-4.png";
import img5 from "@/assets/testimg/img-5.png";
import img6 from "@/assets/testimg/img-6.png";
import img7 from "@/assets/testimg/img-7.png";
import img8 from "@/assets/testimg/img-8.png";
import "./Test.scss";

const questions = [
  {
    id: 1,
    title: "Какая недвижимость вас интересует?",
    options: [
      { id: "a", label: "Квартиры", image: img1 },
      { id: "b", label: "Пентхаусы", image: img2 },
    ],
  },
  {
    id: 2,
    title: "Какая планировка вам подходит?",
    options: [
      { id: "a", label: "Студия", image: img3 },
      { id: "b", label: "1-2 спальни ", image: img4 },
      { id: "c", label: "3-4 спальни", image: img5 },
    ],
  },
  {
    id: 2,
    title: "Какую площадь объекта вы рассматриваете?",
    options: [
      { id: "a", label: "26 м² — 100 м²", image: img6 },
      { id: "b", label: "100 м² — 150 м² ", image: img7 },
      { id: "c", label: "150 м² — 192 м²", image: img8 },
    ],
  },
  // Добавь ещё вопросы при необходимости
];

export default function Test() {
  const [step, setStep] = useState(0); // 0 — до начала
  const [selectedOption, setSelectedOption] = useState({});
  const [messenger, setMessenger] = useState("");
  const [phone, setPhone] = useState("");

  const startTest = () => setStep(1);

  const handleOptionSelect = (optionId) => {
    setSelectedOption((prev) => ({ ...prev, [step]: optionId }));
  };

  const handleNext = () => {
    if (step < questions.length) {
      setStep((prev) => prev + 1);
    } else {
      setStep("result"); // Переход к блоку с номером и мессенджером
    }
  };

  const handleSubmit = () => {
    // можно отправить данные, если потребуется
    // reset всё
    setStep(0);
    setSelectedOption({});
    setMessenger("");
    setPhone("");
  };

  if (step === 0) {
    return (
      <Section className="section-test">
        <div className="test">
          <div className="test__main">
            <Title size="l" weight="bold">
              Какая квартира <br /> подойдет именно вам?
            </Title>
            <div className="test__main-text">
              <p>
                Ответьте на 4 вопроса, чтобы подобрать <br /> идеальный вариант
                недвижимости
              </p>
            </div>
            <Button color="white" onClick={startTest}>
              Пройти тест
            </Button>
            <div className="test__main-img"></div>
          </div>
        </div>
      </Section>
    );
  }

  if (step === "result") {
    return (
      <Section className="section-test">
        <div className="test-result">
          <Title size="l" weight="bold">
            Подобрали 4 варианта недвижимости <br /> по вашим параметрам. Куда
            их прислать?
          </Title>
          <div className="test-result__messengers">
            <button
              className={`messenger-btn ${
                messenger === "whatsapp" ? "active" : ""
              }`}
              onClick={() => setMessenger("whatsapp")}
            >
              WhatsApp
            </button>
            <button
              className={`messenger-btn ${
                messenger === "telegram" ? "active" : ""
              }`}
              onClick={() => setMessenger("telegram")}
            >
              Telegram
            </button>
          </div>
          <input
            className="test-result__input"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button
            color="white"
            className="test-form-btn"
            onClick={handleSubmit}
            disabled={!phone || !messenger}
          >
            Получить варианты
          </Button>
        </div>
      </Section>
    );
  }

  const question = questions[step - 1];

  return (
    <Section className="section-test">
      <div className="test-question">
        <Title size="m" weight="bold">
          {question.title}
        </Title>
        <div className="test-options">
          {question.options.map((opt) => (
            <div
              key={opt.id}
              className={`test-option ${
                selectedOption[step] === opt.id ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect(opt.id)}
            >
              <img src={opt.image} alt={opt.label} />
              <div className="label">{opt.label}</div>
              {selectedOption[step] === opt.id && (
                <div className="checkmark">✔</div>
              )}
            </div>
          ))}
        </div>
        <Button
          color="white"
          className="test-next-btn"
          onClick={handleNext}
          disabled={!selectedOption[step]}
        >
          {step < questions.length ? "Дальше" : "Продолжить"}
        </Button>
      </div>
    </Section>
  );
}
