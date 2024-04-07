import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


function Logout() {

  const Navigate = useNavigate();


  useEffect(() => {
    var path = window.location.pathname;
    if (path == "/admin" || path == "/manageusers" || path == "/addcategory" || path == "/addsubcategory") {
      if (!localStorage.getItem("token") || localStorage.getItem("role") != "admin")
        Navigate("/logout");
    }
    else if(path=="/user"){
          if(localStorage.getItem('token') || localStorage.getItem("role")!="user")
          Navigate("/logout");
       }
       else{
        if(localStorage.getItem("role")=="admin")
        Navigate("/admin");
       else if(localStorage.getItem("role")=="user")
        Navigate("/user");
        else{
          Navigate("/")
        }
       }
   
  }, []);
  return (
    <div>

    </div>

  )
}

export default Logout
