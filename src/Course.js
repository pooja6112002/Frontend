function Course(props) {
  return (
    <div className="course-card">
      <img src={props.img} alt="course" className="course-img" />
      <h2>Name: {props.name}</h2>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default Course;


