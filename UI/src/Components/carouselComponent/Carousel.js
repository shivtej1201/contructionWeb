import React from 'react'
import './Carousel.css'
import './responsive.css'
import { useState, useEffect } from "react";

function Carousel() {
   const [CarouselContent, setCarouselContent] = useState();
   useEffect(() => {
      setInterval(() => {
         if(localStorage.getItem("role") == "admin"){
            setCarouselContent();
         }else if(localStorage.getItem("role") == "user"){
            setCarouselContent(<div className="project_section_3 layout_padding">
            <div className="container">
               <h1 className="project_taital">Our Features Projects</h1>
               <p className="philosophy_text">It is a long established fact that a reader will be distracted by the readable</p>
            </div>
            <div className="project_section_2 layout_padding">
               <div id="my_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="container">
                           <div className="row">
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-4.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-5.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-6.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="container">
                           <div className="row">
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-4.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-5.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-6.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="container">
                           <div className="row">
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-4.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-5.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-6.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="next">
                  <i className="fa fa-arrow-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                  <i className="fa fa-arrow-right"></i>
                  </a>
               </div>
            </div>
         </div>);
         }else{
            setCarouselContent(<div className="project_section_3 layout_padding">
            <div className="container">
               <h1 className="project_taital">Our Features Projects</h1>
               <p className="philosophy_text">It is a long established fact that a reader will be distracted by the readable</p>
            </div>
            <div className="project_section_2 layout_padding">
               <div id="my_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="container">
                           <div className="row">
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-4.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-5.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-6.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="container">
                           <div className="row">
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-4.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-5.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-6.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="container">
                           <div className="row">
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-4.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-5.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                              <div className="col-sm-4">
                                 <div>
                                    <img src="assets/images/img-6.png" className="image_6"/>
                                    <h4 className="reader_text">Reader will be <br/>distracted by the readable</h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="next">
                  <i className="fa fa-arrow-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                  <i className="fa fa-arrow-right"></i>
                  </a>
               </div>
            </div>
         </div>);
         }
      }, 1000);
   },[]);
  return (
    <>
     {CarouselContent}
    </>
  );
}

export default Carousel;