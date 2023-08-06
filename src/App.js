import "./App.css";
import { Navbar } from "./components/navbar";
import { Container } from "./components/container";
import { CreateFlashcard } from "./page/HomePage";
import Flashcards from "./page/Flashcards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardsViewer from "./page/CardsViewer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container />
      <Routes>
        <Route path="/" element={<CreateFlashcard />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route
          path="/flashcards/:group_Id/:card_Id"
          element={<CardsViewer />}
        />
      </Routes>
    </Router>
  );
}

export default App;
