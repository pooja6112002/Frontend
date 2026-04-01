import { useState,useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

function Table1() {
  const [showForm, setShowForm] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const[data,setData]=useState(10);
   const[count,setCount]=useState(20);
   const[studentList,setstudentList]=useState([])
   
// useEffect(() => {
//   console.log("for count component mounted");
//  if(count<100)
//    setCount(count+1);
  
// },[count]);

// useEffect(() => {
//   console.log("datamounted");

// },[data]);

// useEffect(() => {
//   console.log("message use effect");

// });

 useEffect(() => {
console.log(" use effect empty");
   getdata();
 },[]);
function getdata()
{
    fetch("https://nodeapi-1-jguo.onrender.com/getdata")
    .then(response => response.json())
      .then(result => setstudentList(result.message))
      .catch(error => console.error(error));
}
  // const studentList = [
  //   { id: 1, name: "Aarav", age: 15, course: "10th" },
  //   { id: 2, name: "Diya", age: 14, course: "9th" },
  //   { id: 3, name: "Kabir", age: 16, course: "11th" },
  //   { id: 4, name: "Saanvi", age: 15, course: "10th" },
  //   { id: 5, name: "Rohan", age: 13, course: "8th" },
  //   { id: 6, name: "Ishita", age: 14, course: "9th" },
  //   { id: 7, name: "Vivaan", age: 16, course: "11th" },
  //   { id: 8, name: "Aanya", age: 15, course: "10th" },
  //   { id: 9, name: "Arjun", age: 13, course: "8th" },
  //   { id: 10, name: "Meera", age: 14, course: "9th" }
  // ];

  
  const toggleForm = () => {
  setEditStudent({
    id: "",
    name: "",
    course: "",
    email: "",
    status: ""
  });
  setShowForm(true);
};


  
  const handleEdit = (student) => {
    setEditStudent(student);
    setShowForm(true);
  };

  const cancelForm = () => {
    setEditStudent(null);
    setShowForm(false);
  };

  const saveStudent = () => {
  if (!editStudent) {
    alert("Please enter student details");
    return;
  }

  postData(editStudent);
  alert("Student saved successfully!");
  setShowForm(false);
};

  
  const postData=((student)=>{
  alert("data saved");
console.log(student);
let optionapi={
  method:"POST",
  headers:{ "Content-Type":"application/json"},
  body: JSON.stringify({
      id: parseInt(student.id),
      name: student.name,
      course: student.course,
      email: student.email,
      status: student.status
    })
  
}

fetch("https://nodeapi-1-jguo.onrender.com/insertdata",optionapi)
    .then(response => response.json())
      .then(result => {
        console.log(result);
        getdata();
      })
      .catch(error => console.error(error));
})

const deleteData=((item)=>{
console.log(item);
let optionapi={
  method:"DELETE",
  headers:{ "Content-Type":"application/json"},
  body:''
}

fetch("https://nodeapi-1-jguo.onrender.com/deletedata/"+item.id,optionapi)
    .then(response => response.json())
      .then(result => {
        console.log(result);
        getdata();
      })
      .catch(error => console.error(error));
})





  return (
    <div >
      
     
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Student Record{data}</h3><br/>
       
       

        <Button variant="success" onClick={toggleForm}>
          Add Student
        </Button>
      </div>
       <button onClick={()=>{setData(data+1)}}>data increment</button> &nbsp;
       <button onClick={()=>{setCount(count+10)}}>count increment</button>
 <h2>{count}</h2>
      
      <Table >
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>E-mail</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              
              <td>{student.course}</td>
              <td>{student.email}</td>
              <td>{student.status}</td>
              

              <td>
                <Button
                  size="sm"
                  variant="outline-primary"
                  className="me-2"
                  onClick={() => handleEdit(student)}
                >
                  Edit
                </Button>
                <Button size="sm" variant="outline-danger"  onClick={()=>deleteData(student)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      
       <Modal show={showForm} onHide={cancelForm} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editStudent?.id ? "Edit Student" : "Add Student"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Roll No</Form.Label>
              <Form.Control
                type="number"
                value={editStudent?.id || ""}
                onChange={(e) =>
                  setEditStudent({
                    ...editStudent,
                    id: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editStudent?.name || ""}
                onChange={(e) =>
                  setEditStudent({
                    ...editStudent,
                    name: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="text"
                value={editStudent?.course || ""}
                onChange={(e) =>
                  setEditStudent({
                    ...editStudent,
                    course: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={editStudent?.email || ""}
                onChange={(e) =>
                  setEditStudent({
                    ...editStudent,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                value={editStudent?.status || ""}
                onChange={(e) =>
                  setEditStudent({
                    ...editStudent,
                    status: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={cancelForm}>
            Cancel
          </Button>
          <Button variant="success" onClick={saveStudent}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
}

export default Table1;
