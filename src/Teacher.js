function Teacher(props) {
   
     
    return (
        <div>
           {
            props.teachers.map((item) => (
                <h3>{item.name}</h3>
            ))          
           }
        </div>
    );
}


export default Teacher;