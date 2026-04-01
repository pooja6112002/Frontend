import Header from "./Header";
import Footer from "./Footer";
import "./Mystyle.css";
import Course from "./Course";
import BasicExample from "./Bootstrap";
import Tab1 from "./Tabs";
import SmallExample from "./Tables";
import BasicExample1 from "./Spinner";
import WithLabelExample from "./progressbar";
import BasicExample2 from "./Placeholder";
import AdvancedExample from "./Pagination";
import TriggerExample from "./Overlay";
import Example from "./Offcanvas";
import Toolbar from "./Navs";





function App() {
  return (
    
    <div >
      <BasicExample />
      <Tab1/>
      <SmallExample />
      <BasicExample1/>
      <WithLabelExample/>
      <BasicExample2/>
      <AdvancedExample/>
      <TriggerExample/>
      <Example/>
      <Toolbar/>
     
      <Header />

      <main className="main">
        <Course 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWr0U3G_UtDWZeeL3poZSGqe2e-2luzAqYA&s"
        name="Pooja" course="React JS" />

        <Course
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-wW1i6Y2KLcFpfLYp6YvniZ5-Yt5LgTKxow&s"
        name="Anjali" course="JavaScript"/>

        <Course
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZFwIgVmhOe6oRtDwl4nWcUGBlwxSXllDUw&s"
        name="Priya" course="Full Stack Development"/>

        <Course
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfGxvJJZpwBEiSpdyuJkwqvkDHMMAOEVwkA&s"
        name="Sneha" course="Node.js" />
      </main>

      <Footer />
    </div>
  );
}

export default App;