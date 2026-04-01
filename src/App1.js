import Header from "./Header";
import Footer from "./Footer";
import "./Mystyle.css";

function App() {
  let a=10;
  let b=20;
  let c=a+b;
function sum()
{
  b=40;
  c=a+b;
  alert("ok button clicked"+c)
}
  return (
    <div className="App">
      <Header />

      <main className="main">
        <h1>Welcome to My webpage {c}</h1>
        <p>This is page content</p>
        
        <button onClick={sum}>Click Me</button>
      </main>

      <Footer />
    </div>
  );
}

export default App;


 