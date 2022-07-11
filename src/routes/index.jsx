import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import Home from "../pages/home";
import DashBoard from "../pages/dashboard";
import RecipePage from "../pages/recipePage";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path = "/receita/:recipeName" element={<RecipePage/>}/>
    </Routes>
  );
}
