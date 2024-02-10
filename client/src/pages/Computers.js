/************************************************************
*                       COMPUTERS                           *
*                                                           *
*    The Computers page combines the ComputerFilter and     *
*    ComputerList components, using useState to define      *
*    which computers to display in the list based on the    *
*    filters.                                               *
*                                                           *
************************************************************/


import "./Computers.css";
import { useState } from "react";
import ComputerList from "../components/ComputerList";
import ComputerFilter from "../components/ComputerFilter";

export default function Computers() {

  const [computers, setComputers] = useState([]);

  return (
    <div className="page-wrapper">
      <div id="page-body-computers" className="page-body">
        <ComputerFilter setFilteredComputers={setComputers}></ComputerFilter>
        <ComputerList computers={computers}></ComputerList>
      </div>
    </div>
  )
}