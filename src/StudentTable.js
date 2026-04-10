import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function Table1() {
  const [show, setShow] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [token, setToken] = useState("");

  // Form States
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  // const API = "http://127.0.0.1:5000";
  const API = "https://backendnode-1-61e8.onrender.com";

  // ✅ Only ONE useEffect
  useEffect(() => {
    const t = sessionStorage.getItem("token");

    console.log("TOKEN:", t);

    if (t) {
      setToken(t);
      getData(t);
    } else {
      console.log("No token found");
    }
  }, []);

  // ✅ GET DATA (correct token use)
  const getData = async (tok) => {
    if (!tok) return;

    const res = await fetch(`${API}/getdata`, {
      method: "GET",
      headers: {
        Authorization: tok   // ✅ direct token
      }
    });

    const data = await res.json();
    setStudentList(Array.isArray(data.data) ? data.data : []);
  };

  // ADD
  const addStudent = () => {
    setId("");
    setName("");
    setCourse("");
    setEmail("");
    setStatus("");
    setIsEdit(false);
    setShow(true);
  };

  // EDIT
  const handleEdit = (item) => {
    setId(item.id);
    setName(item.name);
    setCourse(item.course);
    setEmail(item.email);
    setStatus(item.status);
    setIsEdit(true);
    setShow(true);
  };

  // SAVE
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
        headers: {
          "Content-Type": "application/json",
          Authorization: token   // ✅ fixed
        },
        body: JSON.stringify(studentData)
      });
    } else {
      await fetch(`${API}/insertdata`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token   // ✅ fixed
        },
        body: JSON.stringify(studentData)
      });
    }

    setShow(false);
    getData(token);
  };

  // DELETE
  const deleteStudent = async (item) => {
    await fetch(`${API}/deletedata/${item.id}`, {
      method: "DELETE",
      headers: {
        Authorization: token   // ✅ fixed
      }
    });

    getData(token);
  };

  return (
   <div className="container-fluid mt-3 px-3">
      <div className="d-flex justify-content-between mb-3">
        <h3>Student Record</h3>
        <Button variant="success" onClick={addStudent}>
          Add Student
        </Button>
      </div>

      
        <Table bordered hover className="w-100">
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

      {/* MODAL */}
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

// import { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Table1() {
//   const [show, setShow] = useState(false);
//   const [studentList, setStudentList] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [token, setToken] = useState("");

//   // Separate States
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [course, setCourse] = useState("");
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState("");

//   const API = "http://127.0.0.1:5000";

// useEffect(() => {
//   const t = sessionStorage.getItem("token");

//   console.log("TOKEN:", t);  // 🔥 debug

//   if (t) {
//     setToken(t);
//     getData(t);   // ✅ correct
//   } else {
//     console.log("No token found");
//   }
// }, []);
//   useEffect(() => {
//   const t = sessionStorage.getItem("token");

//   if (t) {
//     setToken(t);
//     getData(t);   // ✅ only when token exists
//   } else {
//     console.log("No token found");
//   }
// }, []);

//  const getData = async (tok) => {
//   const res = await fetch(`${API}/getdata`, {
    
//       headers: {
//   Authorization: token  
// }
    
//   });

//   const data = await res.json();
//   setStudentList(Array.isArray(data.data) ? data.data : []);
// };

   

//   const addStudent = () => {
//     setId("");
//     setName("");
//     setCourse("");
//     setEmail("");
//     setStatus("");
//     setIsEdit(false);
//     setShow(true);
//   };

//   const handleEdit = (item) => {
//     setId(item.id);
//     setName(item.name);
//     setCourse(item.course);
//     setEmail(item.email);
//     setStatus(item.status);
//     setIsEdit(true);
//     setShow(true);
//   };

//   const saveStudent = async () => {
//     const studentData = {
//       id: parseInt(id),
//       name,
//       course,
//       email,
//       status
//     };

//     if (isEdit) {
//       await fetch(`${API}/updatedata/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`   // 🔥 TOKEN ADDED
//         },
//         body: JSON.stringify(studentData)
//       });
//     } else {
//       await fetch(`${API}/insertdata`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`   // 🔥 TOKEN ADDED
//         },
//         body: JSON.stringify(studentData)
//       });
//     }

//     setShow(false);
//     getData(token);
//   };

//   const deleteStudent = async (item) => {
//     await fetch(`${API}/deletedata/${item.id}`, {
//       method: "DELETE",
//       headers: {
//         "Authorization": `Bearer ${token}`   // 🔥 TOKEN ADDED
//       }
//     });

//     getData(token);
//   };

//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between mb-3">
//         <h3>Student Record</h3>
//         <Button variant="success" onClick={addStudent}>
//           Add Student
//         </Button>
//       </div>

//       <Table bordered hover>
//         <thead className="table-dark">
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Course</th>
//             <th>Email</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {Array.isArray(studentList) &&
//             studentList.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.course}</td>
//                 <td>{item.email}</td>
//                 <td>{item.status}</td>
//                 <td>
//                   <Button
//                     size="sm"
//                     variant="outline-primary"
//                     onClick={() => handleEdit(item)}
//                   >
//                     Edit
//                   </Button>{" "}
//                   <Button
//                     size="sm"
//                     variant="outline-danger"
//                     onClick={() => deleteStudent(item)}
//                   >
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </Table>

//       <Modal show={show} onHide={() => setShow(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {isEdit ? "Edit Student" : "Add Student"}
//           </Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <div className="mb-2">
//             <label>ID</label>
//             <input
//               type="number"
//               value={id}
//               disabled={isEdit}
//               onChange={(e) => setId(e.target.value)}
//               className="form-control"
//             />
//           </div>

//           <div className="mb-2">
//             <label>Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="form-control"
//             />
//           </div>

//           <div className="mb-2">
//             <label>Course</label>
//             <input
//               type="text"
//               value={course}
//               onChange={(e) => setCourse(e.target.value)}
//               className="form-control"
//             />
//           </div>

//           <div className="mb-2">
//             <label>Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//             />
//           </div>

//           <div className="mb-2">
//             <label>Status</label>
//             <input
//               type="text"
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="form-control"
//             />
//           </div>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShow(false)}>
//             Cancel
//           </Button>
//           <Button variant="success" onClick={saveStudent}>
//             Save
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Table1;
