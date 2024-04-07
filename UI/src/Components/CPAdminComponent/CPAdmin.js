

import React, { useEffect } from 'react'
import './CPAdmin.css'
import './responsive.css'
import { _apiURLUser } from '../../apiUrl';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import Auth from '../AuthComponent/Auth';

 function CPAdmin() {

   const [ output , setOutput ] = useState();
   const [ opass , setOldPassword ] = useState(); 
   const [ email , setEmail ] = useState(localStorage.getItem("email"));     
   const [ npass , setNewPassword ] = useState();
   const [ cnpass , setConfirmNewPassword ] = useState();
  

   // useEffect(() => {
   //    var email = localStorage.getItem("email");
   //    axios.get(_apiURLUser+"fetch?email = "+email).then((res) => {
   //       var userDetails = res.data[0];
   //       setName(userDetails.name);
   //       setEmail(userDetails.email);
   //       setMobile(userDetails.mobile);
   //       setAddress(userDetails.address);
   //       setCity(userDetails.city);
   //    }).catch((err) => {
   //       console.log(err)
   //    });
   // },[]);

   const handleSubmit = (event) => {
      event.preventDefault();
      if(opass == localStorage.getItem("password"))
      {
         if(npass == cnpass)
         {
            let updateDetails ={"condition":{"email":email},"set":{"password":cnpass}};
      axios.patch(_apiURLUser+"update",updateDetails).then((res) => {
         updateDetails = res.data[0];
         setOutput("Password Changed Sucessfully, Please Login again...");
         setOldPassword("");
         setNewPassword("");
         setConfirmNewPassword("");
      }).catch((err) => {
         console.log(err);
      });
         }
         else
         {
          setOutput("New & Confirm New Password Mismatch")
          setConfirmNewPassword("");
         }
      }
      else
      setOutput("Invalid Old Password, Please try again");
      
   };

  return (
   
    <>
    {/* <Auth /> */}
       {/* EPAdmin section start */}
       <div className="about_section layout_padding" id='scroll'>
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-6">
                  <div className="about_main" id='scroll1'>
                     <div className="about_taital">Change Password Here!!!</div>
                     <font style={{ "color": "blue" }}>{output}</font>
                        <form onSubmit={handleSubmit} >
                           <div class="form-group">
                              <label for="opass">Old Password:</label>
                              <input type="hidden" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                              <input type="password" class="form-control" value={opass} onChange={e => setOldPassword(e.target.value)} />
                           </div>
                           <div class="form-group">
                              <label for="npass">New Password:</label>
                              <input type="password" class="form-control" value={npass} onChange={e => setNewPassword(e.target.value)} />
                           </div>
                           <div class="form-group">
                              <label for="cnpass">Confirm Password:</label>
                              <input type="password" class="form-control" value={cnpass} onChange={e => setConfirmNewPassword(e.target.value)} />
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
      {/* EPAdmin section end */}
     
    </>
  );
}

export default CPAdmin;
