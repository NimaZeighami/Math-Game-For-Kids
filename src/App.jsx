import { RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { Routes } from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={Routes} />
      <Login />
    </div>
  );
}

export default App;
