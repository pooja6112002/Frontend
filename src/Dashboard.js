import "./Mystyle.css";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      <div style={{
        width: "220px",
        background: "#444f5a",
        color: "white",
        padding: "20px"
      }}>
        <h4>Dashboard</h4>

          <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/dashboard/home" style={{ color: "white" }}>Home</Link></li>
          <li><Link to="/dashboard/student" style={{ color: "white" }}>Student</Link></li>
          <li><Link to="/dashboard/teacher" style={{ color: "white" }}>Teacher</Link></li>
          <li><Link to="/dashboard/course" style={{ color: "white" }}>Course</Link></li>
        </ul>
      </div>

      
      <div style={{
  flex: 1,
  padding: "20px",
  width: "100%",
  minWidth: "0",
  
}}>
  

  <Outlet />
</div>
        

    </div>
  );
}

export default Dashboard;