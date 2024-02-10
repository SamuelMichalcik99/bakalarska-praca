/************************************************************
*                          NOT FOUND                        *
*                                                           *
*    The component (page) displays whenever user visits     *
*    non-existing page. It represents custom 404 error      *
*    (not found) page.					    *
*                                                           *
************************************************************/

import "./Home.css"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div id="page-body-home" className="page-body">
      <div className="home-intro">
        <h1 className="home-title">Stránka nebola nájdená.</h1>
        <h2 className="home-subtitle">
          <span className="orange-span">Chyba 404.</span>  
        </h2>
        <h2 className="home-subtitle-mobile">
          <span className="orange-span">Chyba 404.</span>
        </h2>
        <Link to="/" className="home-intro-btn">Späť na hlavnú stránku</Link>
      </div>
    </div>
  )
}
