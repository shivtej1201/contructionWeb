import React from 'react'
import './Service.css'
import './responsive.css'

function Service() {
  
  return (
    <>
       {/* service section start */}
       <div className="services_section layout_padding" id='scroll'>
         <div className="container">
            <div className="services_taital">Our Services</div>
            <p className="services_text">The TENDER Constructions website has some of the best construction website designs on this list.</p>
         </div>
         <div className="services_section_2 layout_padding">
            <div className="container-fluid padding_0">
               <div className="box_main">
                  <div className="box_left">
                     <div className="box_left_main">
                        <div className="box_left_one">
                           <div className="image_1"><img src="assets/images/img-1.png"/></div>
                        </div>
                        <div className="box_right_one">
                           <div className="icon_1"><img src="assets/images/icon-1.png"/><span className="padding_left_10">architecture  Design</span></div>
                           <p className="long_text">We mentioned the importance of content marketing earlier, and judging from Mosaik Design’s blog,they get the importance as well. </p>
                        </div>
                     </div>
                     <div className="see_bt"><a href="#">See More</a></div>
                  </div>
                  <div className="box_middle">
                     <div className="box_left_main">
                        <div className="padding_10">
                           <div className="icon_1"><img src="assets/images/icon-2.png"/><span className="padding_left_10">architecture  Design</span></div>
                           <p className="long_text">As curators and enablers of any design endeavour, we're committed to working with our clients and collaborators in a seemless & efficient way, to bring value and creativity to the design process</p>
                        </div>
                     </div>
                     <div className="see_bt"><a href="#">See More</a></div>
                  </div>
                  <div className="box_right">
                     <div className="box_left_main">
                        <div className="box_right_one">
                           <div className="icon_1"><img src="assets/images/icon-3.png"/><span className="padding_left_10">architecture  Design</span></div>
                           <p className="long_text">
Created from a belief in the power of collaboration, the art of understanding & the act of cross-disciplinary work </p>
                        </div>
                        <div className="box_left_one">
                           <div className="image_2"><img src="assets/images/img-2.png"/></div>
                        </div>
                     </div>
                     <div className="see_bt"><a href="#">See More</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* service section end */}
    </>
  );
}

export default Service
