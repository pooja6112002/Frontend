import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentTable from "./StudentTable";
import HeaderB from "./HeaderB";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import "./Mystyle.css";
import Studentnew from "./Studentnew";
import Product from "./Product";
import Teacher from "./Teacher";
import Dashboard from "./Dashboard";
import Course from "./Course";



function App() {
  return (
    <Router>
      <HeaderB companyname="Softech Infoways" />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Studentnew" element={<Studentnew />} />
          <Route path="/product" element={<Product />} />

          
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="home" element={<h2>Welcome Dashboard</h2>} />
            <Route path="student" element={<StudentTable />} />
            <Route path="teacher" element={<Teacher />} />
            <Route path="course" element={<Course />} />
          </Route>
        


        </Routes>
      </main>
    </Router>
  );
}

export default App;










 