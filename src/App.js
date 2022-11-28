import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import Userpage from "./components/userDetails";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
            

            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userpage" element={<Userpage />} />
            </Routes>

      </div>
    </Router>
  );
}

export default App;