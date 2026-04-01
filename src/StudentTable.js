import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function Table1() {
  const [show, setShow] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
const[token,setToken]=useState(""); 
  // Separate States
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  // const API = "https://nodeapi-1-jguo.onrender.com";
const API = "http://127.0.0.1:5000";
  useEffect(() => {
    setToken(sessionStorage.getItem("token") || "");  
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(`${API}/getdata`);
    const data = await res.json();
    setStudentList(data.data);
  };

  // Open Add Form
  const addStudent = () => {
    setId("");
    setName("");
    setCourse("");
    setEmail("");
    setStatus("");
    setIsEdit(false);
    setShow(true);
  };

  // Open Edit Form
  const handleEdit = (item) => {
    setId(item.id);
    setName(item.name);
    setCourse(item.course);
    setEmail(item.email);
    setStatus(item.status);
    setIsEdit(true);
    setShow(true);
  };

  const saveStudent = async () => {
    const studentData = {
      id: parseInt(id),
      name,
      course,
      email,
      status
    };

    if (isEdit) {
      await fetch(`${API}/updatedata/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData)
      });
    } else {
      await fetch(`${API}/insertdata`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData)
      });
    }

    setShow(false);
    getData();
  };

  const deleteStudent = async (item) => {
    let optionapi={
      method: "DELETE"
    }
    await fetch(`${API}/deletedata/${item.id}`, );
    getData();
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h3>Student Record</h3>
        <Button variant="success" onClick={addStudent}>
          Add Student
        </Button>
      </div>

      <Table bordered hover>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.course}</td>
              <td>{item.email}</td>
              <td>{item.status}</td>
              <td>
                <Button
                  size="sm"
                  variant="outline-primary"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </Button>{" "}
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => deleteStudent(item)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEdit ? "Edit Student" : "Add Student"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="mb-2">
            <label>ID</label>
            <input
              type="number"
              value={id}
              disabled={isEdit}
              onChange={(e) => setId(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label>Course</label>
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label>Status</label>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="form-control"
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
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
