import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

const GuessNextNumberGame = () => {
  const [questionNumber, setQuestionNumber] = useState(generateRandomNumber());
  const [options, setOptions] = useState(generateOptions(questionNumber));
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [alertBackgroundColor, setAlertBackgroundColor] = useState("bg-transparent");
  
  const navigate = useNavigate(); 

  const fruitImages = ["🍎", "🍒", "🍇", "🍉", "🍓", "🍊", "🍍"];

  function generateRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
  }

  function generateOptions(correctNumber) {
    const nextNumber = correctNumber + 1;
    const options = new Set();
    options.add(nextNumber);

    while (options.size < 4) {
      options.add(generateRandomNumber());
    }

    return Array.from(options).sort(() => Math.random() - 0.5);
  }

  function handleOptionClick(selectedOption) {
    const nextNumber = questionNumber === 10 ? 10 : questionNumber + 1;
    if (selectedOption === nextNumber) {
      setAlertBackgroundColor("bg-green-300");
      setAlertMessage("آآآفررررین ! 🎉  ");
      setShowAlert(true);
      setCorrectAnswers(correctAnswers + 1);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      const newQuestionNumber = generateRandomNumber();
      setQuestionNumber(newQuestionNumber);
      setOptions(generateOptions(newQuestionNumber));
    } else {
      setAlertBackgroundColor("bg-red-500");
      setAlertMessage("دوباره تلاش کن فرشته کوچولو !! ❌");
      setShowAlert(true);
      setWrongAnswers(wrongAnswers + 1);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  }

  useEffect(() => {
    if (wrongAnswers + correctAnswers === 20) {
      // Save to local storage
      localStorage.setItem("GuessNextNumberGrade", correctAnswers);

      navigate("/guess-previous-number-game");
    }
  }, [wrongAnswers, correctAnswers, navigate]);

  return (
    <ContentWrapper>
      <div className="LearnNumbers h-full p-10 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-black text-center mb-8 w-full">
          ← بازی حدس عدد بعدی →
        </h1>
        <p className="text-2xl font-semibold mb-7 text-center w-full">
          از کودک خود بخواهید تا ابتدا عدد نمایش داده شده تصویر را برای شما
          بخواند و گزینه معادل عدد بعدی (یکی بیشتر از عدد نشان داده شده ) را
          انتخاب کند.
        </p>
        <div className="Game flex justify-center items-center w-full h-full relative">
          <div className="bg-blue-100 p-8 rounded-3xl shadow-lg w-full h-full grid grid-cols-2 gap-8">
            <div className="text-9xl font-bold text-[#0D7D81] flex justify-center items-center ">
              {questionNumber}↑
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
            <p>تعداد تلاش درست : {correctAnswers} 🎉</p>
            <p>
              تعداد تلاش اشتباه:{""} {wrongAnswers}❌
            </p>
          </div>
        </div>
        {showAlert && (
          <div
            className={`alert-popup  fixed inset-0 flex items-center justify-center ${alertBackgroundColor} bg-opacity-50`}
          >
            <div className="bg-white p-6 rounded-xl text-2xl font-bold">
              {alertMessage}
            </div>
          </div>
        )}
      </div>
    </ContentWrapper>
  );
};

export default GuessNextNumberGame;
