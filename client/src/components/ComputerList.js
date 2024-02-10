/************************************************************
*                       COMPUTER LIST                       *
*                                                           *
*   The component renders a list of filtered computers,     *
*   where each element of the list is a separate component. *
*   The mobile version includes a button to display         *
*   a hidden sidebar of available filters (the              *
*   ComputerFilter component), which uses FilterContext     *
*   to share data between components without having to pass *
*   the data explicitly through each level of the component *
*   tree.                                                   *
*                                                           *
************************************************************/


import "./ComputerList.css"
import { useContext } from "react";
import ComputerItem from "./ComputerItem";
import { GlobalContext } from "./ContextProvider";
import { FaArrowUp } from "react-icons/fa";

export default function ComputerList({computers}) {

  const { openFilter, setOpenFilter } = useContext(GlobalContext);

  if (computers.length === 0) {
    return (
      <div id="computer-list" className="center-center">
        <button id="show-filter-btn" onClick={() => setOpenFilter(true)}>Všetky filtre</button>
        <p className="empty-result">Požiadavky nespĺňa žiadny počítač.</p>
        <button id="scroll-top-list-btn" onClick={() => document.getElementsByTagName("html").item(0).scrollTop = 0}><FaArrowUp size={20}></FaArrowUp></button>
        <div className={openFilter ? "bg-overlay" : null}></div>
      </div>
    )
  }

  return (
      <div id="computer-list">
        <button id="show-filter-btn" onClick={() => setOpenFilter(true)}>Všetky filtre</button>
          {computers.map(computer => (
            <ComputerItem computer={computer} key={computer.computer_id}></ComputerItem>
          ))}
        <button id="scroll-top-list-btn" onClick={() => document.getElementsByTagName("html").item(0).scrollTop = 0}><FaArrowUp size={20}></FaArrowUp></button>
        <div className={openFilter ? "bg-overlay" : null}></div>
      </div>
  )
}