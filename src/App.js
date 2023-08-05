import "./App.css";
import { Navbar } from "./components/navbar";
import { Container } from "./components/container";
import { CreateFlashcard } from "./page/HomePage";
import Flashcards from "./page/Flashcards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Container />
      <Routes>
        <Route path="/" element={<CreateFlashcard />} />
        <Route path="/flashcards" element={<Flashcards />} />
      </Routes>
    </Router>
  );
}

export default App;
