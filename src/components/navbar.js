import { Link, useNavigate} from "react-router-dom";

const Navbar = () =>{
    let navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/')
        

    };
    return(
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">          
            <div class="collapse navbar-collapse d-flex justify-content-end pr-3" id="navbarNav">
                <ul class="navbar-nav"> 
                <li class="nav-item">
                    <Link to="/" class="nav-link  ">Home</Link>                   
                </li>            
                <li class="nav-item">
                    <Link to="sign-in" class="nav-link  ">Login</Link>                   
                </li>
                <li class="nav-item">
                    <button  class="nav-link" onClick={logout}>Logout</button>                   
                </li> 
                <li class="nav-item">
                    <Link to="sign-up" class="nav-link  ">Register</Link>                   
                </li>                
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

//today i will study about session and cookies and use it in the project