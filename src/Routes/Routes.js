import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LevelProgressScreen from "../Pages/LevelProgressScreen/LevelProgressScreen";
import LearnShapes from "../Pages/LearnShapes/LearnShapes";
import LearnNumbers from "../Pages/LearnNumbers/LearnNumbers";
import Puzzle from "../Pages/Puzzles/Puzzle";
import Patterns from "../Pages/Patterns/Patterns";
import Login from "../Pages/Login/Login";
import GameDetails from "../Pages/GameDetails/GameDetails";
import LevelSelectionScreen from "../Pages/LevelSelectionScreen/LevelSelectionScreen";
import NotFound from "../Pages/NotFound/NotFound";
import NumberX from "../Pages/LearnNumbers/NumberX";

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
    path: "/level-selection-screen",
    element: <LevelSelectionScreen />,
  },
  {
    path: "/game-details",
    element: <GameDetails />,
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
    path: "/learn-shapes",
    element: <LearnShapes />,
  },
  {
    path: "/puzzle",
    element: <Puzzle />,
  },
  {
    path: "/patterns",
    element: <Patterns />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
