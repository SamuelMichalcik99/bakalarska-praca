/************************************************************
*                          HOME                             *
*                                                           *
*    React application with routes to different             *
*    pages/components. Each "Route" component maps a URL    *
*    path to a specific component to render. When the URL   *
*    changes, React Router updates the rendered component   *
*    accordingly. It also imports Header, Footer, MyToast   *
*    and pages such as Home, Computers, DetailComputer,     *
*    Compare, Help, and Contact.                            *
*                                                           *
************************************************************/


import React from "react";
import { Route, Routes} from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Computers from "./pages/Computers"
import DetailComputer from "./pages/DetailComputer"
import Compare from "./pages/Compare"
import Help from "./pages/Help"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import MyToast from "./components/MyToast"

export default function App() {
  return (
    <>
      <Header/>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/computers" element={<Computers/>}></Route>
          <Route path="/computers/:id" element={<DetailComputer/>}></Route>
          <Route path="/compare" element={<Compare/>}></Route>
          <Route path="/help" element={<Help/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route> 
          <Route path="*" element={<NotFound/>}></Route>
	  </Routes>    

      <MyToast/>
      <Footer/>
    </>
  );
}
