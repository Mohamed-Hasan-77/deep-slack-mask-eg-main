import QuestionAccordion from "../small-components/QuestionAccordion";
import "./questionsAndAnswers.scss";

// Translations
import { useTranslation } from "react-i18next";

function QuestionsAndAnswers() {
  const { t } = useTranslation();

  return (
    <div className="questions-and-answers-container">
      <h1>{t("curious_to_confident")}</h1>
      <div className="accordion-box">
        <QuestionAccordion />
      </div>
    </div>
  );
}

export default QuestionsAndAnswers;
