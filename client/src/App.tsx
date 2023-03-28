import { useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter as RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar";

function App() {
  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [isMode, setIsMode] = useState<"dark" | "light">("light");

  const swapMode = () => {
    isMode === "light" ? setIsMode("dark") : setIsMode("light");
  };

  return (
    <div className={`${isMode}`}>
      <div className="dark:bg-dark-1 duration-500 bg-white">
        <RouterProvider>
          <button
            onClick={() => swapMode()}
            className=" dark:text-white absolute"
          >
            SWITCH COLOR
          </button>
          <Navbar isConnected={isConnected} />
          <Routes>{<Route path="/" element={<Home />} />}</Routes>
        </RouterProvider>
      </div>
    </div>
  );
}

export default App;
