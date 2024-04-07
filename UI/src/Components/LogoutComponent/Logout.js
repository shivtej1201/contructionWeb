import React from 'react'
import{Navigate} from "react-router-dom";

function Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem('password');
    localStorage.removeItem("mobile");
    localStorage.removeItem('address');
    localStorage.removeItem("city");
    localStorage.removeItem("gender");
    localStorage.removeItem('role');
    localStorage.removeItem("info");
  return (
    <div>
      <Navigate to = "/login" />
    </div>
  )
}

export default Logout
