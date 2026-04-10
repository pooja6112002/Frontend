import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function Course() {
  const [show, setShow] = useState(false);
  const [courseList, setCourseList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [token, setToken] = useState("");

 
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [fees, setFees] = useState("");
  const [status, setStatus] = useState("");

  const API = "http://127.0.0.1:5000";


  useEffect(() => {
    const t = sessionStorage.getItem("token");

    if (t) {
      setToken(t);
      getCourses(t);
    }
  }, []);

 
  const getCourses = async (tok) => {
    const res = await fetch(`${API}/getCourse`, {
      method: "GET",
      headers: {
        Authorization: tok
      }
    });

    const data = await res.json();
    setCourseList(Array.isArray(data.data) ? data.data : []);
  };


  const addCourse = () => {
    setId("");
    setName("");
    setDuration("");
    setFees("");
    setStatus("");
    setIsEdit(false);
    setShow(true);
  };

  const handleEdit = (item) => {
    setId(item.id);
    setName(item.name);
    setDuration(item.duration);
    setFees(item.fees);
    setStatus(item.status);
    setIsEdit(true);
    setShow(true);
  };

  
  const saveCourse = async () => {
    const courseData = {
      id: parseInt(id),
      name,
      duration,
      fees: parseInt(fees),
      status
    };

    if (isEdit) {
      await fetch(`${API}/updateCourse/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        body: JSON.stringify(courseData)
      });
    } else {
      await fetch(`${API}/addCourse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        body: JSON.stringify(courseData)
      });
    }

    setShow(false);
    getCourses(token);
  };

 
  const deleteCourse = async (item) => {
    await fetch(`${API}/deleteCourse/${item.id}`, {
      method: "DELETE",
      headers: {
        Authorization: token
      }
    });

    getCourses(token);
  };

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between mb-3">
        <h3>Course Record</h3>
        <Button variant="success" onClick={addCourse}>
          Add Course
        </Button>
      </div>

   
      <Table bordered hover>
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Duration</th>
            <th>Fees</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {courseList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.duration}</td>
              <td>{item.fees}</td>
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
                  onClick={() => deleteCourse(item)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEdit ? "Edit Course" : "Add Course"}
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
            <label>Duration</label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label>Fees</label>
            <input
              type="number"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
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
          <Button variant="success" onClick={saveCourse}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Course;
// function Course(props) {
//   return (
//     <div className="course-card">
//       <img src={props.img} alt="course" className="course-img" />
//       <h2>Name: {props.name}</h2>
//       <p>Course: {props.course}</p>
//     </div>
//   );
// }

// export default Course;


