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
            <div className={styles.btnwrap}>
              <div className="form-control">
                <input
                  type="text"
                  required=""
                  pattern="[a-zA-Z]"
                  placeholder="hi there"
                  name="FirstName"
                />
                <label>
                  <span style={{ transitionDelay: "0ms" }}>F</span>
                  <span style={{ transitionDelay: "0ms" }}>i</span>
                  <span style={{ transitionDelay: "0ms" }}>r</span>
                  <span style={{ transitionDelay: "0ms" }}>s</span>
                  <span style={{ transitionDelay: "0ms" }}>t</span>
                  <span style={{ transitionDelay: "0ms" }}></span>
                  <span style={{ transitionDelay: "0ms" }}>N</span>
                  <span style={{ transitionDelay: "0ms" }}>a</span>
                  <span style={{ transitionDelay: "0ms" }}>m</span>
                  <span style={{ transitionDelay: "0ms" }}>e</span>
                </label>
              </div>

              <div className="form-control">
                <input
                  type="password"
                  required=""
                  pattern="[a-zA-Z]"
                  placeholder="hi there"
                  name="SecondName"
                />
                <label>
                  <span style={{ transitionDelay: "0ms" }}>S</span>
                  <span style={{ transitionDelay: "50ms" }}>e</span>
                  <span style={{ transitionDelay: "150ms" }}>c</span>
                  <span style={{ transitionDelay: "200ms" }}>o</span>
                  <span style={{ transitionDelay: "250ms" }}>n</span>
                  <span style={{ transitionDelay: "300ms" }}>d</span>
                  <span style={{ transitionDelay: "350ms" }}></span>
                  <span style={{ transitionDelay: "400ms" }}>N</span>
                  <span style={{ transitionDelay: "450ms" }}>a</span>
                  <span style={{ transitionDelay: "500ms" }}>m</span>
                  <span style={{ transitionDelay: "550ms" }}>e</span>
                </label>
              </div>
            </div>

            <div>
              <div className="form-control">
                <input
                  type="email"
                  required=""
                  pattern="[a-zA-Z]"
                  placeholder="hi there"
                  name="FirstName"
                />
                <label>
                  <span style={{ transitionDelay: "0ms" }}>E</span>
                  <span style={{ transitionDelay: "50ms" }}>-</span>
                  <span style={{ transitionDelay: "150ms" }}>M</span>
                  <span style={{ transitionDelay: "200ms" }}>a</span>
                  <span style={{ transitionDelay: "250ms" }}>i</span>
                  <span style={{ transitionDelay: "250ms" }}>l</span>
                </label>
              </div>
            </div>

            <div className={styles.textareDiv}>
              <span>Describe how we can help you</span>
              <textarea rows={8} defaultValue={"Start Typing..."}></textarea>
            </div>

            <div className="buttons">
              <button className="btn">
                <span></span>
                <p
                  data-start="Register"
                  data-text="Send"
                  data-title="Register"
                ></p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
