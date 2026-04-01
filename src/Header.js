import "./Mystyle.css"
import Student from "./Student";
function Header()
{
    return(
        <div className="header">
            <h1>I am header </h1>
            <Student name="manan" course="full stack" />

            <Student name="vansh" course="full stack" />
        </div>
    )
}


export default Header;