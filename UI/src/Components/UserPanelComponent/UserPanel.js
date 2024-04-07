

import React from 'react'
import './UserPanel.css'
import './responsive.css'
// import Auth from '../AuthComponent/Auth'
 function UserHome() {

  return (
   
    <>
    {/* <Auth /> */}
       {/* UserHome section start */}
       <div className="about_section layout_padding" id='scroll'>
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-6">
                  <div className="about_main" id='scroll1'>
                     <div className="about_taital">UserHome Information</div>
                     <p className="about_text">For nearly a century, Tender has been committed to Building with the Indian Spirit: People, Projects, and Communities. The tender Family of Companies is comprised of four entities and  firms across india. With more than 300 team members and 3 offices, our 100% employee-owned enterprise is on a mission to transform the construction industry through innovation and increased efficiencies in the building process.</p>
                     <div className="about_bt"><a href="#">About More</a></div>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="about_img"><img src="assets/images/about-img.png"/></div>
               </div>
            </div>
         </div>
      </div>
      {/* UserHome section end */}
     
    </>
  );
}

export default UserHome;
