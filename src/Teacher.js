import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function Teacher() {
  const [show, setShow] = useState(false);
  const [teacherList, setTeacherList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [token, setToken] = useState("");

  // Form States
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  // const API = "http://127.0.0.1:5000";
  const API = "https://backendnode-1-61e8.onrender.com";

  // ✅ Load Data
  useEffect(() => {
    const t = sessionStorage.getItem("token");

    if (t) {
      setToken(t);
      getTeachers(t);
    }
  }, []);

  // ✅ GET TEACHERS
  const getTeachers = async (tok) => {
    const res = await fetch(`${API}/getTeachers`, {
      method: "GET",
      headers: {
        Authorization: tok
      }
    });

    const data = await res.json();
    setTeacherList(Array.isArray(data.data) ? data.data : []);
  };

  // ADD
  const addTeacher = () => {
    setId("");
    setName("");
    setSubject("");
    setEmail("");
    setStatus("");
    setIsEdit(false);
    setShow(true);
  };

  // EDIT
  const handleEdit = (item) => {
    setId(item.id);
    setName(item.name);
    setSubject(item.subject);
    setEmail(item.email);
    setStatus(item.status);
    setIsEdit(true);
    setShow(true);
  };

  // SAVE
  const saveTeacher = async () => {
    const teacherData = {
      id: parseInt(id),
      name,
      subject,
      email,
      status
    };

    if (isEdit) {
      await fetch(`${API}/updateTeacher?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        body: JSON.stringify(teacherData)
      });
    } else {
      await fetch(`${API}/addTeacher`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        body: JSON.stringify(teacherData)
      });
    }

    setShow(false);
    getTeachers(token);
  };

  // DELETE
  const deleteTeacher = async (item) => {
    await fetch(`${API}/deleteTeacher?id=${item.id}`, {
      method: "DELETE",
      headers: {
        Authorization: token
      }
    });

    getTeachers(token);
  };

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between mb-3">
        <h3>Teacher Record</h3>
        <Button variant="success" onClick={addTeacher}>
          Add Teacher
        </Button>
      </div>

      {/* TABLE */}
      <Table bordered hover>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {teacherList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.subject}</td>
              <td>{item.email}</td>
              <td>{item.status}</td>
              <td>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </Button>{" "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => deleteTeacher(item)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* MODAL */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEdit ? "Edit Teacher" : "Add Teacher"}
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
            <label>Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
          <Button variant="success" onClick={saveTeacher}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Teacher;


// function Teacher(props) {
   
     
//     return (
//         <div>
//            {
//             props.teachers.map((item) => (
//                 <h3>{item.name}</h3>
//             ))          
//            }
//         </div>
//     );
// }


// export default Teacher;