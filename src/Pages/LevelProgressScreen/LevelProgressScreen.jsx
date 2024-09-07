import React, { useEffect, useState } from "react";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

const getGradeDescription = (grade) => {
  if (grade === "X") return "کودک هنوز این بازی را انجام نداده!!!";
  if (grade <= 1) return "ضعیف: نیاز به تلاش و تمرین بیشتر";
  if (grade <= 5) return "پایین: پیشرفت نیاز دارد";
  if (grade <= 10) return "متوسط: قابل قبول اما قابل بهبود";
  if (grade <= 15) return "خوب: کارکرد خوب";
  return "عالی: عملکرد فوق‌العاده";
};

const convertGameNameToPersian = (name) => {
  switch (name) {
    case "CountingGameGrade":
      return "بازی شمارش";
    case "GuessNextNumberGrade":
      return "بازی حدس عدد بعدی";
    case "GuessPerviousNumberGrade":
      return "بازی حدس عدد قبلی";
    case "SumGameGrade":
      return "بازی جمع";
    case "SubtractionGameGrade":
      return "بازی تفریق";
    default:
      return "بازی ناشناخته";
  }
};

const LevelProgressScreen = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const data = {
      CountingGameGrade: localStorage.getItem("CountingGameGrade") ? parseInt(localStorage.getItem("CountingGameGrade")) : "X",
      GuessNextNumberGrade: localStorage.getItem("GuessNextNumberGrade") ? parseInt(localStorage.getItem("GuessNextNumberGrade")) : "X",
      GuessPerviousNumberGrade: localStorage.getItem("GuessPerviousNumberGrade") ? parseInt(localStorage.getItem("GuessPerviousNumberGrade")) : "X",
      SumGameGrade: localStorage.getItem("SumGameGrade") ? parseInt(localStorage.getItem("SumGameGrade")) : "X",
      SubtractionGameGrade: localStorage.getItem("SubtractionGameGrade") ? parseInt(localStorage.getItem("SubtractionGameGrade")) : "X",
    };

    const formattedSteps = Object.entries(data).map(([key, value]) => ({
      grade: value,
      description: getGradeDescription(value),
      gameName: convertGameNameToPersian(key),
    }));

    setSteps(formattedSteps);
  }, []);

  const Step = ({ grade, description, gameName }) => (
    <div className="flex flex-col items-center w-full gap-8 animate-fade-in">
      <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full text-4xl font-extrabold shadow-lg transform transition-transform hover:scale-110">
        {grade}
      </div>
      <p className="text-center text-gray-800 text-xl font-semibold">{gameName}</p>
      <p className="text-center text-gray-600 text-lg">{description}</p>
    </div>
  );

  return (
    <ContentWrapper>
      <div className="p-6 h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-[#34999c]">
        <header className="text-white text-3xl font-bold mb-6 mt-4">
          لیست نمرات
        </header>
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-[90%] h-[50%] border border-gray-200 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-around">
            {steps.map((step, index) => (
              <div key={index} className="flex-1">
                <Step grade={step.grade} description={step.description} gameName={step.gameName} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default LevelProgressScreen;
