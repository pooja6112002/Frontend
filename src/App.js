import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeaderB from "./HeaderB";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import "./Mystyle.css";
import Studentnew from "./Studentnew";
import Product from "./Product";
import Teacher from "./Teacher";

function App() {
  const teacherName = [
    {
    
    "name":"John Doe"},
    {
      "name":"Jane Smith",
    },
    {
      "name":"Gagan",
    }
    ]; // Example teacher name
  return (
    <Router>
      {/* <Teacher teachers={teacherName} /> */}
      <HeaderB companyname="Softech Infoways"  />


      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Studentnew" element={<Studentnew />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;








 