import React from 'react'
import './Register.css'
import './responsive.css'
import { useState } from 'react';
import axios from 'axios';
import { _apiURLUser } from '../../apiUrl';

function Register() {
 
   const [ output , setOutput ] = useState();
   const [ name , setName ] = useState();     
   const [ email , setEmail ] = useState();
   const [ password , setPassword ] = useState();
   const [ mobile , setMobile ] = useState();
   const [ address , setAddress ] = useState();
   const [ city , setCity ] = useState();
   const [ gender , setGender ] = useState();

   const handleSubmit = (event) => {
      event.preventDefault();
      var userDetails = {"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
      axios.post(_apiURLUser+"save",userDetails).then((result)=>{
         // console.log(result)
       if(result.data.status)
       setOutput("User Register Successfully");
       else
       setOutput("User Registration Failed")
       
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setAddress("");
        setCity("");
        setGender("");
          
      });
   }

   return (
      <>
         {/* register section start */}
         <div className="about_section layout_padding">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-6">
                     <div className="about_main" id='scroll'>
                        <div className="about_taital"><h2>Register Here!!!</h2></div>
                        <font style={{ "color": "blue" }}>{output}</font>
                        <form onSubmit={handleSubmit} >
                           <div class="form-group">
                              <label for="name">Name:</label>
                              <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />
                           </div>
                           <div class="form-group">
                              <label for="email">Email address:</label>
                              <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                           </div>
                           <div class="form-group">
                              <label for="pwd">Password:</label>
                              <input type="password" class="form-control" value={password}
                              onChange={e => setPassword(e.target.value)} />
                           </div>
                           <div class="form-group">
                              <label for="mobile">Mobile:</label>
                              <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
                           </div>
                           <div class="form-group">
                              <label for="address">Address:</label>
                              <textarea rows="5" class="form-control" value={address} onChange={e => setAddress(e.target.value)}></textarea>
                           </div>
                           <div class="form-group">
                              <label for="city">City:</label>
                              <select class="form-control" value={city} onChange={e => setCity(e.target.value)} >
                                 <option>Select City</option>
                                 <option>Indore</option>
                                 <option>Ujjain</option>
                                 <option>Bhopal</option>
                              </select>
                           </div>
                           <div class="form-group">
                              <label for="gender">Gender:</label>
                              Male <input type="radio" value="male" name="gender"
                                 onChange={e => setGender(e.target.value)} />
                              &nbsp;&nbsp;
                              Female <input type="radio" value="female" name="gender"
                                 onChange={e => setGender(e.target.value)} />
                              &nbsp;&nbsp;
                           </div>
                           <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="about_img"><img src="assets/images/about-img.png" /></div>
                  </div>
               </div>
            </div>
         </div>
         {/* register section end */}

      </>
   );
}

export default Register;
