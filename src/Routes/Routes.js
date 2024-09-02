import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LevelProgressScreen from "../Pages/LevelProgressScreen/LevelProgressScreen";
import LearnNumbers from "../Pages/LearnNumbers/LearnNumbers";
import Login from "../Pages/Login/Login"; 
import GamesList from "../Pages/GamesList/GamesList";
import NotFound from "../Pages/NotFound/NotFound";
import NumberX from "../Pages/LearnNumbers/NumberX";
import CountingGame from "../Pages/LearnNumbers/CountingGame";
import GuessNextNumberGame from "../Pages/LearnNumbers/GuessNextNumberGame";
import GuessPreviousNumberGame from "../Pages/LearnNumbers/GuessPreviousNumberGame";
import SumGame from "../Pages/LearnNumbers/SumGame";
import SubtractionGame from "../Pages/LearnNumbers/SubtractionGame";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/level-progress-screen",
    element: <LevelProgressScreen />,
  },
  {
    path: "/games-list",
    element: <GamesList />,
  },
  {
    path: "/learn-numbers",
    element: <LearnNumbers />,
    children: [
      {
        path: ":title",
        element: <NumberX />,
      },
    ],
  },
  {
    path: "/counting-game",
    element: <CountingGame />,
  },
  {
    path: "/guess-next-number-game",
    element: <GuessNextNumberGame />,
  },
  {
    path: "/guess-previous-number-game",
    element: <GuessPreviousNumberGame />,
  },
  {
    path: "/sum-game",
    element: <SumGame />,
  },
  {
    path: "/subtraction-game",
    element: <SubtractionGame />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
