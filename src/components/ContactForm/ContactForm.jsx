import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import {HiMail} from "react-icons/hi"
import { useState } from "react";

const ContactForm = () => {

  const [name, setName] = useState("test")
  const [email, setEmail] = useState("test@gmail.com")
  const [text, setText] = useState("Text")

  const onSubmit = (event) =>{
    event.preventDefault()
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
  }

  const viaCall = () =>{
    console.log("im from viacall")
  }
  
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
             <Button 
            text = "VIA SUPPORT CHAT"
            icon = {<MdMessage fontSize= "24px" />}
          />
          <Button 
            onClick = {viaCall}
            text = "VIA CALL"
            icon = {<FaPhoneAlt fontSize= "24px" />}
          />
        </div>
        <Button 
            isOutLine = {true}
            text = "VIA EMAIL FORM"
            icon = {<HiMail fontSize= "24px" />}
          />
          <form 
            onSubmit={onSubmit}
          >
            <div className={styles.form_controler}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.form_controler}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.form_controler}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows="8"></textarea>
            </div>
            <div style={{display:"flex",justifyContent:"end"}}>
            <Button
            text = "SUBMIT"
          />
            </div>
            <div>
            {name + "  " + email + "  " + text}
          </div>
          </form>
      </div>
      <div className={styles.contact_image}>
          <img src="./image/contact.svg" alt="contact_imge" />
      </div>
    </section>
  );
};

export default ContactForm;
