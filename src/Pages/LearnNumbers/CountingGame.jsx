import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

const CountingGame = () => {
  const [questionNumber, setQuestionNumber] = useState(generateRandomNumber());
  const [options, setOptions] = useState(generateOptions(questionNumber));
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [alertBackgroundColor, setAlertBackgroundColor] = useState("bg-transparent");
  const navigate = useNavigate(); // Add this line to use navigation

  const fruitImages = ["🍎", "🍒", "🍇", "🍉", "🍓", "🍊", "🍍"];

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function generateOptions(correctNumber) {
    const options = new Set();
    options.add(correctNumber);

    while (options.size < 4) {
      options.add(generateRandomNumber());
    }

    return Array.from(options).sort(() => Math.random() - 0.5);
  }

  function handleOptionClick(selectedOption) {
    if (selectedOption === questionNumber) {
      setAlertBackgroundColor("bg-green-300");
      setAlertMessage("آآآفررررین ! 🎉  ");
      setShowAlert(true);
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setAlertBackgroundColor("bg-red-500");
      setAlertMessage("دوباره تلاش کن فرشته کوچولو !! ❌");
      setShowAlert(true);
      setWrongAnswers((prev) => prev + 1);
    }

    setTimeout(() => {
      setShowAlert(false);
      const newQuestionNumber = generateRandomNumber();
      setQuestionNumber(newQuestionNumber);
      setOptions(generateOptions(newQuestionNumber));

      if (correctAnswers + wrongAnswers + 1 === 20) {
        localStorage.setItem("CountingGameGrade", (correctAnswers + 1).toString());
        navigate("/guess-next-number-game");
      }
    }, 2000);
  }

  return (
    <ContentWrapper>
      <div className="LearnNumbers h-full p-10 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-black text-center mb-8 w-full">
          ← بازی شمارش اعداد  →
        </h1>
        <p className="text-2xl font-semibold mb-7 text-center w-full">
          از کودک خود بخواهید تا ابتدا عدد نمایش داده شده در سمت راست تصویر را
          برای شما بخواند و از گزینه‌های سمت چپ تعداد میوه معادل آن را  را انتخاب کند.
        </p>
        <div className="Game flex justify-center items-center w-full h-full relative">
          <div className="bg-blue-100 p-8 rounded-3xl shadow-lg w-full h-full grid grid-cols-2 gap-8">
            <div className="text-9xl font-bold text-[#0D7D81] flex justify-center items-center ">
              {questionNumber}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="flex flex-wrap justify-center items-center p-4 bg-yellow-100 rounded-2xl cursor-pointer transition-transform transform hover:scale-110"
                  onClick={() => handleOptionClick(option)}
                  style={{ minHeight: "100px" }}
                >
                  {Array.from({ length: option }).map((_, i) => (
                    <span key={i} className="text-6xl">
                      {
                        fruitImages[
                          Math.floor(Math.random() * fruitImages.length)
                        ]
                      }
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 right-4 text-xl font-black">
            <p >تعداد تلاش درست : {correctAnswers} 🎉</p>
            <p>تعداد تلاش اشتباه:{""} {wrongAnswers}❌</p>
          </div>
        </div>
        {showAlert && (
          <div className={`alert-popup fixed inset-0 flex items-center justify-center ${alertBackgroundColor} bg-opacity-50`}>
            <div className="bg-white p-6 rounded-xl text-2xl font-bold">
              {alertMessage}
            </div>
          </div>
        )}
      </div>
    </ContentWrapper>
  );
};

export default CountingGame;
