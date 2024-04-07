import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/HeaderComponent/Header";
import Bannar from "./Components/BannarComponent/Bannar";
import About from "./Components/AboutComponent/About";
import Service from "./Components/ServiceComponent/Service";
import Register from "./Components/RegisterComponent/Register";
import Verifyuser from "./Components/VerifyuserComponent/Verifyuser";
import Login from "./Components/LoginComponent/Login";
import Carousel from "./Components/carouselComponent/Carousel";
import Philosophy from "./Components/PhilosophyComponent/Philosophy";
import Footer from "./Components/FooterComponent/Footer";
import CopyRight from "./Components/CopyRightComponent/CopyRight";
import AdminHome from "./Components/AdminPanelComponent/AdminPanel";
import ManageUsers from "./Components/ManageUsers/ManageUsers";
import Addcategory from "./Components/AddCategoryComponent/Addcategory";
import AddSubCategory from "./Components/AddSubCategoryComponent/AddSubcategory";
import EPAdmin from "./Components/EPAdminComponent/EPAdmin";
import CPAdmin from "./Components/CPAdminComponent/CPAdmin";
import UserHome from "./Components/UserPanelComponent/UserPanel";
import EPUser from "./Components/EPUserComponent/EPUser";
import CPUser from "./Components/CPUserComponent/CPUser";
import SearchTender from "./Components/SearchTenderComponent/SearchTender";
import ViewsubCate from "./Components/viewsubCateComponent/viewsubCate";
import Logout from "./Components/LogoutComponent/Logout";

function App() {
  return (
    <>
      <Header />
      <Bannar />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Service" element={<Service />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/verifyuser/:email" element={<Verifyuser />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin" element={<AdminHome />}></Route>
        <Route path="/manageusers" element={<ManageUsers />}></Route>
        <Route path="/addcategory" element={<Addcategory />}></Route>
        <Route path="/addsubcategory" element={<AddSubCategory />}></Route>
        <Route path="/epadmin" element={<EPAdmin />}></Route>
        <Route path="/cpadmin" element={<CPAdmin />}></Route>
        <Route path="/user" element={<UserHome />}></Route>
        <Route path="/epuser" element={<EPUser />}></Route>
        <Route path="/cpuser" element={<CPUser />}></Route>
        <Route path="/searchtender" element={<SearchTender />}></Route>
        <Route path="/viewsubCate/:catname" element={<ViewsubCate />}></Route>

        <Route path="/Logout" element={<Logout />}></Route>
      </Routes>

      {/* <Service /> */}
      <Carousel />
      <Philosophy />

      {/* <Login />  */}
      {/* <Register />  */}
      <Footer />
      <CopyRight />
    </>
  );
}

export default App;
