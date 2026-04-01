import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductProps from "./ProductProps";

function Product() {
  // const API = "https://testapi-4-4qfr.onrender.com/products";
  const API = "http://127.0.0.1:5000";
  useEffect(() => {
    getData();
  }, []);


  const [productList, setProductList] = useState([]);
  const [show, setShow] = useState(false);

  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setProductList(data);
  };

  const addProduct = () => {
    setId(null);
    setName("");
    setPrice("");
    setImage("");
    setBrand("");
    setShow(true);
  };

  const editProduct = (item) => {
    setId(item._id);
    setName(item.name);
    setPrice(item.price);
    setImage(item.image);
    setBrand(item.brand);
    setShow(true);
  };

  const saveProduct = async () => {
    const productData = {
      name: name,
      price: Number(price),
      image: image,
      brand: brand,
      updatedAt:new Date().toISOString()
    };

    if (id !== null) {
      
      await fetch(API + "/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
    } else {
     
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
    }

    getData();
    setShow(false);
    setId(null);
  };

  const deleteProduct = async (deleteId) => {
    await fetch(API + "/" + deleteId, {
      method: "DELETE",
    });

    getData();
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h3>Product List</h3>
        <Button variant="success" onClick={addProduct}>
          Add Product
        </Button>
      </div>
      <ProductProps list={productList} handleedit={editProduct} deletedata={deleteProduct}/>

      <Table bordered hover>
        <thead className="table-dark">
          <tr>
            <th>_ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Brand</th>
            <th>Updated At</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {productList.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.image}</td>
              <td>{item.brand}</td>
              <td>{item.updatedAt ?new Date(item.updatedAt).toLocaleString():""}</td>
              <td>
                <Button
                  size="sm"
                  variant="outline-primary"
                  onClick={() => editProduct(item)}
                >
                  Edit
                </Button>{" "}
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => deleteProduct(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {id !== null ? "Edit Product" : "Add Product"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            className="form-control mb-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            className="form-control mb-2"
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            className="form-control mb-2"
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveProduct}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Product;






