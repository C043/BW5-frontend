import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";
import Clienti from "./pages/Clienti";

function App() {
  return (
    <Container>
      <h1 className="mt-3">Bolt - Società Energetica</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clienti/:token" element={<Clienti />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
