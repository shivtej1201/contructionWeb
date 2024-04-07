import React from 'react'
import axios from 'axios';
import { _apiURLUser } from '../../apiUrl';
import{useState,useEffect} from "react"


function ManageUsers() {
    const [userDetails,setuserDetails] = useState([]);
    useEffect(() => {
        axios.get(_apiURLUser+"fetch?role=user").then((result)=>{
            setuserDetails(result.data);
        });
    },[]);

    const ManageUsersStatus = (_id,s) => {
      //  alert(_id+"-------------"+s);
      var updateDetails;
      if(s == "verify"){
         updateDetails={"condition":{"_id":_id},"set":{"status":1}};
         axios.patch(_apiURLUser+"update",updateDetails).then((result) => {
            window.location.reload();
         })
      }
      else if(s == "block"){
         updateDetails={"condition":{"_id":_id},"set":{"status":0}};
         axios.patch(_apiURLUser+"update",updateDetails).then((result) => {
            window.location.reload();
         })
      }else{
         axios.delete(_apiURLUser+"delete/"+_id).then((result) =>{
            window.location.reload();
         })
      }
    }

  return (
    <div>
             {/* AdminHome section start */}
             <div className="about_section layout_padding" id='scroll'>
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12">
                  <div className="about_main">
                     <div className="about_taital">View & Manage Users</div>
                     <table class='table table-bordred'>
                        <tr>
                            <th>UserId</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Gender</th>
                            <th>Info</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                     
                     {
                        userDetails.map((row)=>(
                            <tr>
                                <td>{row._id}</td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.password}</td>
                                <td>{row.mobile}</td>
                                <td>{row.address}</td>
                                <td>{row.city}</td>
                                <td>{row.gender}</td>
                                <td>{row.info}</td>
                                <td>
                                    {row.status == 0 &&
                                    <a style={{"color":"green","cursor":"pointer"}} onClick={()=>{ManageUsersStatus(row._id,"verify")}}>Verify User</a>}
                                    {row.status == 1 &&
                                    <a style={{"color":"orange","cursor":"pointer"}} onClick={()=>{ManageUsersStatus(row._id,"block")}}>Block User</a>}
                                </td>
                                <td><a style={{"color":"red","cursor":"pointer"}} onClick={()=>{ManageUsersStatus(row._id,"delete")}}>Delete User</a></td>
                            </tr>
                        ))
                     }
                     </table>
                  </div>
               </div>
               {/* <div className="col-md-6">
                  <div className="about_img"><img src="assets/images/user1.png"/></div>
               </div> */}
            </div>
         </div>
      </div>
      {/* AdminHome section end */}
    </div>
  )
}

export default ManageUsers;
