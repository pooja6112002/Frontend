import { useState } from "react";
function Student(props) {
    const [name, setName] = useState("manan");
    function show(){
        alert("Student Name: "+name);
    }
    return(
<div className="backyellow">
    {/* <h1>Student Component {name}</h1> */}
    <h1>Name is {props.name}</h1>
    <h1>Course is {props.course}</h1>
    {/* <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Student Name"/>
    <button onClick={()=>show()}>Show Name</button> */}
</div>

    ) 
    }


export default Student;