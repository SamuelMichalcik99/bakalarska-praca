/************************************************************
*                          FOOTER                           *
*                                                           *
*   This code represents a Footer component with company    *
*   information, icon, and a copyright bar. Email and       *
*   phone number allow for instant interaction.             *
*                                                           *
************************************************************/

import "./Footer.css"

export default function Footer() {
  return (
    <><footer id="footer-section">
      <div id="max-width-footer">
          <div className="footer-info">
            <p>IČO: 53520858</p>
            <p>DIČ: 1124007830</p>
            <p>Samuel Michalčík - MIDOTECH</p>
          </div>
          <div id="icon-container">
          <img id="footer-icon" src={"images/icon.jpg"} alt="Logo"></img>
          </div>
          <div className="footer-info">
            <address>
              <ul>
                <li className="footer-contact-item"><a className="footer-contact-link" href="mailto:info@midotech.sk">info@midotech.sk</a></li>
                <li className="footer-contact-item"><a className="footer-contact-link" href="tel:+421910492862">+421 910 492 862</a></li>
              </ul>
            </address>
          </div>
        </div>
      </footer>
      <footer id="footer-bar">
        <p>&copy; 2022 MIDOTECH </p>
      </footer></>
  )
}
