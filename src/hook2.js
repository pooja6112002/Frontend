import { useState, useEffect } from "react";
import Table1 from "./StudentTable";

function App() {
  const [studentList, setStudentList] = useState([]);

  
  const getData = () => {
    fetch("https://nodeapi-1-jguo.onrender.com/getdata")
      .then((res) => res.json())
      .then((data) => setStudentList(data.message))
      .catch((err) => console.log(err));
  };

   useEffect(() => {
    getData();
  }, []);


  const deleteData = (item) => {
    fetch(
      "https://nodeapi-1-jguo.onrender.com/deletedata/" + item.id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        getData(); 
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Student List</h1>
     

      {studentList.map((student) => (
        <div key={student.id}>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>

          
          <button onClick={() => deleteData(student)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
