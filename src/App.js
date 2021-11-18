import "./App.css";
import Homepage from "./containers/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./containers/homepage.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Service from "./components/Service";
import Contact from "./containers/Contact";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
