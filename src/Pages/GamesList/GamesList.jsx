import React from "react";
import {
  Apple,
  Calculator,
  Plus,
  Minus,
  ArrowUp10,
  ArrowDown10,
} from "lucide-react";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

const games = [
  {
    name: "یادگیری اعداد",
    icon: <Apple size={100} />,
    color: "bg-green-300",
    path: "/learning-numbers",
  },
  {
    name: "بازی شمارش",
    icon: <Calculator size={100} />,
    color: "bg-blue-300",
    path: "/counting-game",
  },
  {
    name: "حدس عدد بعدی",
    icon: <ArrowUp10 size={100} />,
    color: "bg-purple-300",
    path: "/guess-next-number",
  },
  {
    name: "حدس عدد قبلی",
    icon: <ArrowDown10 size={100} />,
    color: "bg-red-300",
    path: "/guess-previous-number",
  },
  {
    name: "بازی جمع",
    icon: <Plus size={100} />,
    color: "bg-yellow-300",
    path: "/sum-game",
  },
  {
    name: "بازی تفریق",
    icon: <Minus size={100} />,
    color: "bg-orange-300",
    path: "/subtraction-game",
  },
];

const GamesList = () => {
  return (
    <ContentWrapper>
      <div className="h-full p-10 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-black text-center mb-20 w-full">
          انتخاب بازی
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {games.map((game, index) => (
            <a
              key={index}
              href={game.path}
              className={`flex flex-col items-center justify-center p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105 ${game.color}`}
            >
              <div className="mb-4 text-6xl">{game.icon}</div>
              <h2 className="text-4xl font-semibold text-center">
                {game.name}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default GamesList;
