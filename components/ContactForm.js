import styles from "@/styles/ContactUs.module.css";
import Image from "next/image";

const ContactForm = () => {
  return (
    <>
    <div className={styles.WrapperContact}>

      <div className={styles.ContactFormWrapper}>
        
        <div className={styles.details}>
          <p>Feel Free to Contact Us</p>
        </div>
        
        <div className={styles.details}>
          <p>Phone No :</p><span>9999999999</span>
        </div>
        
        <div className={styles.details}>
          <p>Email :</p><span>test@gmail.com</span>
        </div>




      </div>

      {/* <div className={styles.FillForm}>

            <form action="/api/Thankyou">
                <button type="Submit">Submit</button>
            </form>

      </div> */}
    </div>
    </>
  );
};

export default ContactForm;
