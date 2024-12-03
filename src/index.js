import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Component/login-page";
import LearnInfo from "./Component/LearnInfo";
import Payments from "./Component/Payments";
import Navbar from "./Component/Navbar";
import Offsets from "./Component/Offsets";
import Projects from "./Component/Projects";
import About from "./Component/About";
import "bootstrap/dist/css/bootstrap.min.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/learninfo" element={<LearnInfo />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/why-carbon" element={<Offsets />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
