import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login_post } from "../service/apiservice";


// export default class Login extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
    
//   }
//   handleSubmit(e) {
//     let navigate = useNavigate()
//     e.preventDefault();
//     Login_post(this.state).then((response)=>{
//       console.log(response.data,'hit')
//       if(response.data['status'] === 'success'){
//         console.log('hit');

//           return navigate('userDetails')
        
//       }
      
//     })

//   }
//   render() {
//     return (
      
//       <div className="auth-wrapper">
//           <div className="auth-inner">
//       <form onSubmit={this.handleSubmit}>
//         <h3>Sign In</h3>

//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//             onChange={(e) => this.setState({ email: e.target.value })}
//           />
//         </div>

//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             onChange={(e) => this.setState({ password: e.target.value })}
//           />
//         </div>

//         <div className="mb-3">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>

//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           <a href="/sign-up">Sign Up</a>
//         </p>
//       </form></div></div>
//     );
//   }
// }

const Login =() =>{
  const [data,setdata] = useState({
    email:"",
    password:""
  });
  let navigate = useNavigate();
  const handle = (e) => {
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setdata(newdata)
} 
  const submit = (e) => {
    console.log(data);
    Login_post(data).then((response)=>{
      console.log(response.data['data']['token']);
      if (response.data['status'] === 'success'){
          localStorage.setItem('token',response.data['data']['token'])
          navigate('/userpage')
      }
    })
  }

    return (
      
      <div className="auth-wrapper">
          <div className="auth-inner">
      <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
           // value = {data.email}
            onChange={(e) => handle(e)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="password"
           // value={data.password}
            onChange={(e) => handle(e)}
          />
        </div>

        <div className="d-grid">
          <button type="button" className="btn btn-primary" onClick={submit}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-up">Sign Up</a>
        </p>
      </form></div></div>
    );
  }



export default Login;