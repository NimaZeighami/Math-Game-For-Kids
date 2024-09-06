import { StepBackIcon, StepForwardIcon } from "lucide-react";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const NumberX = () => {
  const navigate = useNavigate(); // Initialize useNavigate for redirection
  const numbersFrom1To10 = [
    {
      itSelf: "1",
      persianTitle: "یک",
      imageSource: require("../../Assets/Images/Numbers/1.gif"),
    },
    {
      itSelf: "2",
      persianTitle: "دو",
      imageSource: require("../../Assets/Images/Numbers/2.gif"),
    },
    {
      itSelf: "3",
      persianTitle: "سه",
      imageSource: require("../../Assets/Images/Numbers/3.gif"),
    },
    {
      itSelf: "4",
      persianTitle: "چهار",
      imageSource: require("../../Assets/Images/Numbers/4.gif"),
    },
    {
      itSelf: "5",
      persianTitle: "پنج",
      imageSource: require("../../Assets/Images/Numbers/5.gif"),
    },
    {
      itSelf: "6",
      persianTitle: "شش",
      imageSource: require("../../Assets/Images/Numbers/6.gif"),
    },
    {
      itSelf: "7",
      persianTitle: "هفت",
      imageSource: require("../../Assets/Images/Numbers/7.gif"),
    },
    {
      itSelf: "8",
      persianTitle: "هشت",
      imageSource: require("../../Assets/Images/Numbers/8.gif"),
    },
    {
      itSelf: "9",
      persianTitle: "نه",
      imageSource: require("../../Assets/Images/Numbers/9.gif"),
    },
    {
      itSelf: "10",
      persianTitle: "ده",
      imageSource: require("../../Assets/Images/Numbers/10.gif"),
    },
  ];
  const { title } = useParams();
  const numberData = numbersFrom1To10.find(
    (theNumber) => theNumber.itSelf === title
  );

  return (
    <div>
      {numberData ? (
        <div>
          <img
            src={numberData.imageSource}
            alt={numberData.persianTitle}
            className="w-full h-[500px]"
          />
        </div>
      ) : (
        <p className="text-8xl font-black text-[#DFA448] pt-28 text-center">
          {`برای عدد ${title} آموزش نداریم ):`}
        </p>
      )}
      <div className="Arrows flex flex-row justify-between items-center h-full">
        {title < 10 ? (
          <Link to={`/learn-numbers/${+title + 1}`}>
            <StepForwardIcon color="#DFA448" size={100} />
          </Link>
        ) : (
          <StepForwardIcon color="green" size={100} onClick={()=>{
            navigate("/counting-game")
          }}/>
        )}
        <p className="text-2xl font-semibold">
          {" "}
          برای دیدن آموزش قبلی / بعدی روی فلش مورد نظر کلیک کنید{" "}
        </p>
        {title < 2 ? (
            <StepBackIcon color="gray" size={100} cursor="not-allowed" />
        ) : (
          <Link to={`/learn-numbers/${+title - 1}`}>
            <StepBackIcon color="#DFA448" size={100} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default NumberX;
