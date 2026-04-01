import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function Table1() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);
  const Cancel = () => setShowForm(false);
  const Save = () => {
    alert("Student saved successfully!");
    setShowForm(false);
  };

  return (
    <div className="container mt-4">
    
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Student Record</h3>
        <Button variant="success" onClick={toggleForm}>
           Add Student
        </Button>
      </div>

     
      {showForm && (
        <div className="card mb-4 p-3">
          <Form>
            <div className="row align-items-end">
              <div className="col-md-2 mb-2">
                <Form.Control type="number" placeholder="Roll No" />
              </div>
              <div className="col-md-3 mb-2">
                <Form.Control type="text" placeholder="Name" />
              </div>
              <div className="col-md-2 mb-2">
                <Form.Control type="number" placeholder="Age" />
              </div>
              <div className="col-md-3 mb-2">
                <Form.Control type="text" placeholder="Course" />
              </div>
              <div className="col-md-2 mb-2 d-flex gap-2">
                <Button variant="primary" onClick={Save}>
                  Save
                </Button>
                <Button variant="secondary" onClick={Cancel}>
                  Cancel
                </Button>
              </div>
            </div>
          </Form>
        </div>
      )}
    
      <Table >
        <thead className="table-dark">
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="align-middle">
            <td>1</td>
            <td>Rita</td>
            <td>21</td>
            <td>BTech (CSE)</td>
            <td>
              <div className="d-flex gap-2">
                <Button size="sm" variant="outline-primary"> Edit</Button>
                <Button size="sm" variant="outline-danger"> Delete</Button>
              </div>
            </td>
          </tr>
          <tr className="align-middle">
            <td>2</td>
            <td>John</td>
            <td>22</td>
            <td>BTech (ME)</td>
            <td>
              <div className="d-flex gap-2">
                <Button size="sm" variant="outline-primary"> Edit</Button>
                <Button size="sm" variant="outline-danger"> Delete</Button>
              </div>
            </td>
          </tr>
          <tr className="align-middle">
            <td>3</td>
            <td>Vicky</td>
            <td>20</td>
            <td>BTech (CE)</td>
            <td>
              <div className="d-flex gap-2">
                <Button size="sm" variant="outline-primary"> Edit</Button>
                <Button size="sm" variant="outline-danger">Delete</Button>
              </div>
            </td>
          </tr>
          <tr className="align-middle">
            <td>4</td>
            <td>Mohan</td>
            <td>21</td>
            <td>BTech (CSE)</td>
            <td>
              <div className="d-flex gap-2">
                <Button size="sm" variant="outline-primary"> Edit</Button>
                <Button size="sm" variant="outline-danger"> Delete</Button>
              </div>
            </td>
          </tr>
          <tr className="align-middle">
            <td>5</td>
            <td>Priya</td>
            <td>20</td>
            <td>BTech (CSE)</td>
            <td>
              <div className="d-flex gap-2">
                <Button size="sm" variant="outline-primary"> Edit</Button>
                <Button size="sm" variant="outline-danger">Delete</Button>
              </div>
            </td>
          </tr>
          <tr className="align-middle">
            <td>6</td>
            <td>Reena</td>
            <td>20</td>
            <td>BTech (CSE)</td>
            <td>
              <div className="d-flex gap-2">
                <Button size="sm" variant="outline-primary"> Edit</Button>
                <Button size="sm" variant="outline-danger"> Delete</Button>
              </div>
            </td>
          </tr>
          <tr className="align-middle">
            <td>7</td>
            <td>Siya</td>
            <td>21</td>
            <td>BTech (CSE)</td>
            <td>
              <div className="d-flex gap-2">
                <Button size="sm" variant="outline-primary">Edit</Button>
                <Button size="sm" variant="outline-danger"> Delete</Button>
              </div>
            </td>
          </tr>
          <tr className="align-middle">
            <td>8</td>
            <td>Mohan</td>
            <td>21</td>
            <td>BTech (CSE)</td>
            <td>
              <div className="d-flex gap-2">
                <Button size="sm" variant="outline-primary"> Edit</Button>
                <Button size="sm" variant="outline-danger">Delete</Button>
              </div>
            </td>
          </tr>
          <tr className="align-middle">
            <td>9</td>
            <td>Karan</td>
            <td>21</td>
            <td>BTech (CSE)</td>
            <td>
              <div className="d-flex gap-2">
                <Button size="sm" variant="outline-primary"> Edit</Button>
                <Button size="sm" variant="outline-danger"> Delete</Button>
              </div>
            </td>
          </tr>
          <tr className="align-middle">
            <td>10</td>
            <td>Siya</td>
            <td>21</td>
            <td>BTech (CSE)</td>
            <td>
              <div className="d-flex gap-2">
                <Button size="sm" variant="outline-primary"> Edit</Button>
                <Button size="sm" variant="outline-danger"> Delete</Button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
      
    </div>
  );
}

export default Table1;

