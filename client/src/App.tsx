import { useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter as RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <RouterProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;
