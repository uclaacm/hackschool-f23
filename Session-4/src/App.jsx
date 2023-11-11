import React from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";
import Doggos from "./pages/Doggos";
import Cattos from "./pages/Cattos";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doggos" element={<Doggos />} />
        <Route path="/cattos" element={<Cattos />} />
      </Routes>
    </BrowserRouter>
  );
}
