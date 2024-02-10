/************************************************************
*                          HOME                             *
*                                                           *
*    The component (page) displays introductory information *
*    and navigation to the list of computers.               *
*                                                           *
************************************************************/

import "./Home.css"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div id="page-body-home" className="page-body">
      <div className="home-intro">
        <h1 className="home-title">Kvalitná PC zostava<br/>za férovú cenu ?</h1>
        <h2 className="home-subtitle">
          <span className="orange-span">VYFILTRUJ </span>- 
          <span className="creamy-span"> POROVNAJ </span>- 
          <span className="success-span"> VYBER!</span>
        </h2>
        <h2 className="home-subtitle-mobile">
          <span className="orange-span">VYFILTRUJ </span>
          <span className="creamy-span"> POROVNAJ </span>
          <span className="success-span"> VYBER!</span>
        </h2>
        <h2 className="home-subtitle-welcome">Vitaj na stránke MIDOTECH.</h2>
        <Link to="/computers" className="home-intro-btn">Zobraziť počítače</Link>
      </div>
    </div>
  )
}