

import React from 'react'
import './SearchTender.css'
import './responsive.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _apiURLCategory } from '../../apiUrl';
import { Link } from 'react-router-dom';

function SearchTender() {

   const [CDetails, setCategoryDetails] = useState([]);

   useEffect(() => {
      axios.get(_apiURLCategory + "fetch").then((result) => {
         setCategoryDetails(result.data);
      });
   }, []);

   return (

      <>
         {/* <Auth /> */}
         {/* UserHome section start */}
         <div className="about_section layout_padding">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-6">
                     <div className="about_main" id='scroll1'>
                        <div className="about_taital">Category List

                           <div id='category_main'>
                              {
                                 CDetails.map(
                                    ele => {
                                       const image = '/assets/upload/caticon/' + ele.caticonnm;
                                       const path = "/viewsubCate/" + ele.catnm;
                                       return (
                                          <Link to={path}>
                                             <div className='category_part'>
                                                <img src={image} height='100' width='150' />
                                                <br />
                                                <b><h6>{ele.catnm}</h6></b>
                                             </div>
                                          </Link>
                                       )
                                    }
                                 )
                              }
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6">
                     <div className="about_img"><img src="assets/images/usercategory.png" /></div>
                  </div>
               </div>
            </div>
         </div>
         {/* UserHome section end */}

      </>
   );
}

export default SearchTender;
