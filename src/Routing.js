import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<h1>Welcome Home 🎉</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;