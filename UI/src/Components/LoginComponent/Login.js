import React from 'react'
import './Login.css'
import { _apiURLUser } from '../../apiUrl';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
 
   const navigate = useNavigate();
   const [output, setOutput] = useState();

   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   const handleSubmit = (event) => {
      event.preventDefault();
      var userDetails = { "email": email, "password": password }
      axios.post(_apiURLUser + "login", userDetails).then((response) => {
         //to store user details in local storage
         const responseData = response.data.userDetails;
         localStorage.setItem("token", response.data.token);
         localStorage.setItem("_id", responseData._id);
         localStorage.setItem("name", responseData.name);
         localStorage.setItem("email", responseData.email);
         localStorage.setItem("password", responseData.password);
         localStorage.setItem("mobile", responseData.mobile);
         localStorage.setItem("address", responseData.address);
         localStorage.setItem("city", responseData.city);
         localStorage.setItem("gender", responseData.gender);
         localStorage.setItem("role", responseData.role);
         localStorage.setItem("info", responseData.info);

         responseData.role=="admin"?navigate("/admin"):navigate("/user")
      }).catch((error) => {
         setOutput("Invalid User or Verify your Account")
         setEmail("");
         setPassword("");
      })
   }


   return (
      <>
         <div className="about_section layout_padding">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-6">
                     <div className="about_main">
                        <div className="about_taital"><h1>Login Here!</h1></div>
                        <div className="about_text">
                           <font style={{ "color": "blue" }}>{output}</font>
                           <form onSubmit={handleSubmit} >

                              <div class="form-group">
                                 <label for="email">Email address:</label>
                                 <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} /><br />
                              </div>
                              <div class="form-group">
                                 <label for="pwd">Password:</label>
                                 <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                              </div><br />
                              <button type="submit" class="btn btn-success">Login</button>
                           </form>
                        </div>
                        {/* <div className="about_bt"><a href="#">About More</a></div> */}
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="about_img"><img src="assets/images/about-img.png " /></div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Login;
