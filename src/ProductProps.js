function ProductProps(props) {
  return (
    <>
      {props.list.map((item) => (
        <div key={item._id}>
          <h5>{item.name}</h5>
          <button onClick={() => props.handleedit(item)}>Edit</button>
          <button onClick={() => props.deletedata(item._id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default ProductProps;