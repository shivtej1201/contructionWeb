import React from 'react'
import './Philosophy.css'
import './responsive.css'
import { useState,useEffect } from 'react';

function Philosophy() {
   const [PhilosophyContent, setPhilosophyContent] = useState();
   useEffect(()=>{
      setInterval(()=>{
         if(localStorage.getItem("role") == "admin"){
            setPhilosophyContent();
         }else if(localStorage.getItem("role") == "user"){
            setPhilosophyContent( <div className="philosophy_section layout_padding">
         <div className="container">
            <h1 className="philosophy_taital">Our Philosophy</h1>
            <p className="philosophy_text">It is a long established fact that a reader will be distracted by the readable</p>
         </div>
         <div className="philosophy_section_2 layout_padding">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-6 padding_0">
                     <div className="philosophy_box_main">
                        <div className="philosophy_box">
                           <div className="philosophy_left">
                              <h1 className="number_text">01</h1>
                           </div>
                           <div className="philosophy_right">
                              <h3 className="quick_text">Quick in Response</h3>
                           </div>
                        </div>
                        <div className="philosophy_box">
                           <div className="philosophy_left">
                              <h1 className="number_text">02</h1>
                           </div>
                           <div className="philosophy_right">
                              <h3 className="quick_text">Satisfaction Guarantee</h3>
                           </div>
                        </div>
                        <div className="philosophy_box">
                           <div className="philosophy_left">
                              <h1 className="number_text">03</h1>
                           </div>
                           <div className="philosophy_right">
                              <h3 className="quick_text">Expert & Professional</h3>
                           </div>
                        </div>
                        <div className="philosophy_box">
                           <div className="philosophy_left">
                              <h1 className="number_text">04</h1>
                           </div>
                           <div className="philosophy_right">
                              <h3 className="quick_text">Professional Approach</h3>
                           </div>
                        </div>
                        <div className="philosophy_box">
                           <div className="philosophy_left">
                              <h1 className="number_text">05</h1>
                           </div>
                           <div className="philosophy_right">
                              <h3 className="quick_text">High Quality Work</h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 padding_0">
                     <div className="image_7"><img src="assets/images/img-7.png"/></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
     );
         }else{
            setPhilosophyContent( <div className="philosophy_section layout_padding">
         <div className="container">
            <h1 className="philosophy_taital">Our Philosophy</h1>
            <p className="philosophy_text">It is a long established fact that a reader will be distracted by the readable</p>
         </div>
         <div className="philosophy_section_2 layout_padding">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-6 padding_0">
                     <div className="philosophy_box_main">
                        <div className="philosophy_box">
                           <div className="philosophy_left">
                              <h1 className="number_text">01</h1>
                           </div>
                           <div className="philosophy_right">
                              <h3 className="quick_text">Quick in Response</h3>
                           </div>
                        </div>
                        <div className="philosophy_box">
                           <div className="philosophy_left">
                              <h1 className="number_text">02</h1>
                           </div>
                           <div className="philosophy_right">
                              <h3 className="quick_text">Satisfaction Guarantee</h3>
                           </div>
                        </div>
                        <div className="philosophy_box">
                           <div className="philosophy_left">
                              <h1 className="number_text">03</h1>
                           </div>
                           <div className="philosophy_right">
                              <h3 className="quick_text">Expert & Professional</h3>
                           </div>
                        </div>
                        <div className="philosophy_box">
                           <div className="philosophy_left">
                              <h1 className="number_text">04</h1>
                           </div>
                           <div className="philosophy_right">
                              <h3 className="quick_text">Professional Approach</h3>
                           </div>
                        </div>
                        <div className="philosophy_box">
                           <div className="philosophy_left">
                              <h1 className="number_text">05</h1>
                           </div>
                           <div className="philosophy_right">
                              <h3 className="quick_text">High Quality Work</h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 padding_0">
                     <div className="image_7"><img src="assets/images/img-7.png"/></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
     );
         }
      },1000)
   },[]);
  return (
    <>

{PhilosophyContent}      
    </>
  );
}

export default Philosophy
