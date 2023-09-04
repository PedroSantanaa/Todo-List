import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Login, { PayloadToken } from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { useAuth } from "./context/Auth";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
