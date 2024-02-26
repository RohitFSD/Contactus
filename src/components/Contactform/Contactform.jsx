import Button from "../Button/Button";
import styles from "./Contactform.module.css"
import { MdMessage } from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';
const Contactform = () => {

  const onSubmit=(event)=>{
    event.preventDefault();
  }; 
  return (
    <section className={styles.Container}>
      <div className={styles.Contactform}>
        <div className={styles.topbtn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
        <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
         </div>
         <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>
         <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name"><b>Name</b></label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email"><b>E-Mail</b></label>
            <input type="email" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text"><b>Text</b></label>
            <textarea name="name" rows="12"/>
          </div>
          <div style={{display:"flex",justifyContent: "end", width:472,}}>
          <Button text="Submit"/>
          </div>
         </form>
      </div>
      
      <div className={styles.Contact_images}>
        <img src="service.png" alt="service image" />
      </div>
    </section>
  );
};

export default Contactform
