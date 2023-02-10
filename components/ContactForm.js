import styles from "@/styles/ContactUs.module.css";
import Image from "next/image";

const ContactForm = () => {
  return (
    <>
      <div className={styles.WrapperContact}>
        <div className={styles.ContactFormWrapper}>
          <div className={styles.details}>
            <h3>Feel Free to Contact Us</h3>
          </div>

          <div className={styles.details}>
            <p>Phone No </p>
            <span>9999999999</span>
          </div>

          <div className={styles.details}>
            <p>Email </p>
            <span>test@gmail.com</span>
          </div>

          <div className={styles.details}>
            <p>Address </p>
            <span>
              Kanpur - Agra - Delhi, NH2, Bhauti, Kanpur, Uttar Pradesh 209305
            </span>
          </div>
        </div>

        <div className={styles.FillForm}>
          <form action="/api/Thankyou">
            <div className="form-control">
              <input type="text" required="" pattern="[a-zA-Z]" placeholder="hi there"/>
              <label>
                <span style={{transitionDelay: "0ms"}}>N</span>
                <span style={{transitionDelay: "100ms"}}>a</span>
                <span style={{transitionDelay: "200ms"}}>m</span>
                <span style={{transitionDelay: "300ms"}}>e</span>
              </label>
            </div>

            <div className="form-control">
              <input type="password" required="" pattern="[a-zA-Z]" placeholder="hi there"/>
              <label>
                <span style={{transitionDelay: "0ms"}}>E</span>
                <span style={{transitionDelay: "100ms"}}>-</span>
                <span style={{transitionDelay: "200ms"}}>M</span>
                <span style={{transitionDelay: "300ms"}}>a</span>
                <span style={{transitionDelay: "400ms"}}>i</span>
                <span style={{transitionDelay: "500ms"}}>l</span>
              </label>
            </div>
            <button type="Submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
