import React from 'react'
import './Header.css'
import './responsive.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Auth from "../AuthComponent/Auth";


function Header() {

   const [HeaderContent, setHeaderContent] = useState();


   useEffect(() => {

      setInterval(() => {
         if (localStorage.getItem("role") == "admin") {
            setHeaderContent(

               <div className="header_section">
                  <div className="">
                     <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="logo" href="index.html"><img src="assets/images/logo2.png" /></a>
                        <h1 id="AdminHeading">Hello Admin</h1>
                        <h2 style={{ "color": "#edc107", "top": "15px" }}>{localStorage.getItem("email")}</h2>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                 <a className="nav-link"><Link style={({ "text-transform": "none", "fontSize": "20px", "position": "relative", "left": "30px", "top": "15px" })} to='/admin'>AdminHome</Link></a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link"><Link style={({ "text-transform": "none", "fontSize": "20px", "position": "relative", "left": "30px", "top": "15px" })} to='/manageusers'>ManageUsers</Link></a>
                              </li>



                              <div class="dropdown" style={{ "position": "relative", "top": "20px", "left": "20px" }}>
                                 <button style={{ "backgroundColor": "#021239" }} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonAdmin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Category
                                 </button>
                                 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item"
                                       className="nav-link" id='hover-a'><Link style={{ "color": "#021239" }} to='/addcategory'>AddCategory</Link></a>
                                    <a class="dropdown-item"
                                       className="nav-link" id='hover-a'><Link style={{ "color": "#021239", }} to='/addsubcategory'>AddSubCategory</Link></a>


                                 </div>
                              </div>
                              &nbsp;&nbsp;
                              <div class="dropdown" style={{ "position": "relative", "top": "20px", "left": "20px" }}>
                                 <button style={{ "backgroundColor": "#021239" }} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonAdmin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Setting
                                 </button>
                                 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item"
                                       className="nav-link" id='hover-a'><Link style={{ "color": "#021239" }} to='/epadmin'>EditProfile</Link></a>
                                    <a class="dropdown-item"
                                       className="nav-link" id='hover-a'><Link style={{ "color": "#021239", }} to='/cpadmin'>ChangePassword</Link></a>


                                 </div>
                              </div>

                              <li className="nav-item">
                                 <a className="nav-link"><Link style={({ "text-transform": "none", "fontSize": "20px", "position": "relative", "left": "30px", "top": "15px" })} to='./logout'>Logout</Link></a>
                              </li>
                           </ul>
                           <div className="search_icon"><a href="#"><img src="assets/images/Logo1.png" /></a></div>
                        </div>
                     </nav>
                  </div>
               </div>

            );
         }
         else if (localStorage.getItem("role") == "user") {
            setHeaderContent(
               <div className="header_section">
                  <div className="">
                     <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="logo" href="index.html"><img src="assets/images/logo2.png" /></a>
                        <h1 id='userHeading'>Welcome <br/>{localStorage.getItem("name")} </h1>
                        {/* <h2 style={{"color":"#edc107"}}></h2> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                 <a className="nav-link"><Link to='/user'>Home</Link></a>

                              </li>
                              <li className="nav-item">
                                 <a className="nav-link"><Link to='/searchtender'>SearchTenders</Link></a>
                              </li>

                              <div class="dropdown" style={{ "position": "relative", "top": "20px", "left": "20px" }}>
                                 <button style={{ "backgroundColor": "#021239" }} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    AddProduct
                                 </button>
                                 <div class="dropdown-menu">
                                    <a class="dropdown-item"
                                       className="nav-link" id='hover-a'><Link style={{ "color": "#021239","text-transform":"small" }} to='/product'>ProducTitle</Link></a>
                                    <a class="dropdown-item"
                                       className="nav-link" id='hover-a'><Link style={{ "color": "#021239", }} to='/addcategoryproduct'>ProductCategory</Link></a>
                                       <a class="dropdown-item"
                                       className="nav-link" id='hover-a'><Link style={{ "color": "#021239", }} to='/addsubcategoryproduct'>ProductSubCategory</Link></a>


                                 </div>
                              </div>
                              &nbsp;&nbsp;
                              <div class="dropdown" style={{ "position": "relative", "top": "20px", "left": "20px" }}>
                                 <button style={{ "backgroundColor": "#021239" }} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Setting
                                 </button>
                                 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item"
                                       className="nav-link" id='hover-a'><Link style={{ "color": "#021239" }} to='/epadmin'>EditProfile</Link></a>
                                    <a class="dropdown-item"
                                       className="nav-link" id='hover-a'><Link style={{ "color": "#021239", }} to='/cpadmin'>ChangePassword</Link></a>


                                 </div>
                              </div>


                              <li className="nav-item">
                                 <a className="nav-link"><Link to='./logout'>logout</Link></a>

                              </li>

                           </ul>
                           <div className="search_icon"><a href="#"><img src="assets/images/Logo1.png" /></a></div>
                        </div>
                     </nav>
                  </div>
               </div>);
         }
         else {
            setHeaderContent(

               <div className="header_section">
                  <div className="">
                     <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="logo" href="index.html"><img src="assets/images/logo2.png" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                 <a className="nav-link"><Link to='/'>Home</Link></a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link"><Link to='/about'>About</Link></a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link"><Link to='/contact'>Contact</Link></a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link"><Link to='./service'>Services</Link></a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link"><Link to='./register'>Register</Link></a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link"><Link to='./login'>Login</Link></a>
                              </li>
                           </ul>
                           <div className="search_icon"><a href="#"><img src="assets/images/Logo1.png" /></a></div>
                        </div>
                     </nav>
                  </div>
               </div>


            );
         }
      }, 1000);

   }, []);



   return (
      <>
         <Auth />
         {HeaderContent}
      </>
   );
}

export default Header;
