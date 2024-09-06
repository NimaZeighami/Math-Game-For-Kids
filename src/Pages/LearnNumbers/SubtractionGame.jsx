import React, { useEffect, useState } from "react";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";

const SubtractionGame = () => {
  const [questionEquation, setQuestionEquation] = useState(generateRandomEquation());
  const [options, setOptions] = useState(generateOptions(questionEquation.result));
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [alertBackgroundColor, setAlertBackgroundColor] = useState("bg-transparent");

  const navigate = useNavigate()
  useEffect(() => {
    if (wrongAnswers + correctAnswers === 20) {
      // Save to local storage
      localStorage.setItem("SubtractionGameGrade", correctAnswers);

      navigate("/level-progress-screen");
    }
  }, [wrongAnswers, correctAnswers, navigate]);

  const fruitImages = ["🍎", "🍒", "🍇", "🍉", "🍓", "🍊", "🍍"];

  function generateRandomNumber(max = 10) {
    return Math.floor(Math.random() * max) + 1;
  }

  function generateRandomEquation() {
    let num1, num2, result;
    do {
      num1 = generateRandomNumber();
      num2 = generateRandomNumber();
      // Ensure num1 is greater than or equal to num2 to avoid negative results
      if (num1 < num2) [num1, num2] = [num2, num1];
      result = num1 - num2;
    } while (result < 0); // Ensure the result is not negative

    return { num1, num2, result };
  }

  function generateOptions(correctNumber) {
    const options = new Set();
    options.add(correctNumber);

    while (options.size < 4) {
      let option = generateRandomNumber(10);
      if (option >= 0 && option <= 10) {
        options.add(option);
      }
    }

    return Array.from(options).sort(() => Math.random() - 0.5);
  }

  function handleOptionClick(selectedOption) {
    if (selectedOption === questionEquation.result) {
      setAlertBackgroundColor("bg-green-300");
      setAlertMessage("آآآفررررین ! 🎉  ");
      setShowAlert(true);
      setCorrectAnswers(correctAnswers + 1);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      const newQuestionEquation = generateRandomEquation();
      setQuestionEquation(newQuestionEquation);
      setOptions(generateOptions(newQuestionEquation.result));
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

  return (
    <ContentWrapper>
      <div className="LearnNumbers h-full p-10 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-black text-center mb-8 w-full">
          ← بازی تفریق →
        </h1>
        <p className="text-2xl font-semibold mb-7 text-center w-full">
          از کودک خود بخواهید تا ابتدا معادله نمایش داده شده در تصویر را
          برای شما بخواند و گزینه معادل حاصل تفریق آن را انتخاب کند.
        </p>
        <div className="Game flex justify-center items-center w-full h-full relative">
          <div className="bg-blue-100 p-8 rounded-3xl shadow-lg w-full h-full grid grid-cols-2 gap-8">
            <div className="text-9xl font-bold text-[#0D7D81] flex justify-center items-center ">
              {`${questionEquation.num2} - ${questionEquation.num1}`}
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
            <p>تعداد تلاش اشتباه: {wrongAnswers} ❌</p>
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

export default SubtractionGame;
