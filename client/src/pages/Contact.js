/************************************************************
*                       CONTACT                             *
*                                                           *
*    There is a contact form on the Contact page that       *
*    allows users to contact the support/company by email.  *
*    When the submit button is clicked, a POST request is   *
*    made to the API endpoint. The user receives a          *
*    notification of the (un)success of the send.           *
*                                                           *
************************************************************/

import "./Contact.css"
import { useState } from "react";
import { SuccessSubmitNotification, WarnSubmitNotification, ErrorNotification } from "../components/MyToast"


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [notes, setNotes] = useState("");

  async function submitForm(e) {
    e.preventDefault();
    if (name && email && subject && notes) {
      const data = {
        name: name,
        email: email,
        subject: subject,
        notes: notes
      }

      try {
        const response = await fetch("https://www.bakalarska-praca.samuelmichalcik.sk/api/submits", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          SuccessSubmitNotification();
          setName("");
          setEmail("");
          setSubject("");
          setNotes("");
        } else {
          ErrorNotification();
        }
      } catch (error) {
        console.log(error);
        ErrorNotification();
      }

    } else {
      WarnSubmitNotification();
      return;
    }
  }

  return (
    <div id="page-body-contact" className="page-body">
      <form className="contact-form" method="post" onSubmit={(e) => submitForm(e)}>
        <h1 className="form-title">Kontaktný formulár</h1>
        <input 
          type="text" 
          id="form-name"
          className="form-input-text" 
          name="form-name" 
          placeholder="*Meno" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          id="form-email"
          className="form-input-text" 
          name="form-email"
          placeholder="*@gmail.com" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="text"
          id="form-subject"
          className="form-input-text" 
          name="form-subject"
          placeholder="*Predmet" 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
        />
        <textarea 
          id="form-notes"
          className="form-input-textarea" 
          name="form-notes"
          placeholder="*Správa" 
          value={notes} 
          onChange={(e) => setNotes(e.target.value)} />
        <button type="submit" className="form-submit-btn">Odoslať</button>
      </form>
    </div>
  )
}
