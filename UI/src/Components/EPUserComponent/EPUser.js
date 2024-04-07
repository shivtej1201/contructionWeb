

import React, { useEffect } from 'react'
import './EPUser.css'
import './responsive.css'
import { _apiURLUser } from '../../apiUrl';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import Auth from '../AuthComponent/Auth';

 function EPUser() {

   const [ output , setOutput ] = useState();
   const [ name , setName ] = useState();     
   const [ email , setEmail ] = useState();
   const [ mobile , setMobile ] = useState();
   const [ address , setAddress ] = useState();
   const [ city , setCity ] = useState();
   const [ gender , setGender ] = useState();

   useEffect(() => {
      var email = localStorage.getItem("email");
      axios.get(_apiURLUser+"fetch?email = "+email).then((res) => {
         // var userDetails = res.data[0];
         // setName(userDetails.name);
         // setEmail(userDetails.email);
         // setMobile(userDetails.mobile);
         // setAddress(userDetails.address);
         // setCity(userDetails.city);
         // setGender(userDetails.gender);
      }).catch((err) => {
         console.log(err)
      });
   },[]);

   const handleSubmit = (event) => {
      event.preventDefault();
      let updateDetails ={"condition":{"email":email},"set":{"name":name, "mobile":mobile,"address":address,"city":city,"gender":gender }};
      axios.patch(_apiURLUser+"update",updateDetails).then((res) => {
         updateDetails = res.data[0];
         setOutput("Profile Edit Successfully...")
         setName("");
         setEmail("");
         setMobile("");
         setAddress("");
         setCity("");
         setGender("");
      }).catch((err) => {
         console.log(err);
      });
   };

  return (
   
    <>
    {/* <Auth /> */}
       {/* EPUser section start */}
       <div className="about_section layout_padding" id='scroll'>
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-6">
                  <div className="about_main" id='scroll1'>
                     <div className="about_taital">Edit Profile Here!!!</div>
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
                  <div className="about_img"><img src="assets/images/about-img.png"/></div>
               </div>
            </div>
         </div>
      </div>
      {/* EPUser section end */}
     
    </>
  );
}

export default EPUser;
