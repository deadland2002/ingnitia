import styles from "@/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  var open = false;

  const handleHamburger = (event) =>{
    const parent = document.getElementById("options");
    if(!open){
      parent.classList.add(styles.collapse);
      open = true;
    }else{
      parent.classList.remove(styles.collapse);
      open = false;
    }
  }
  return (
    <>
      <div className={styles.navbar}>

      <Image
            className={styles.logo} 
            src={"/img/logo.png"}
            width={1000}
            height={1000}
            alt="logo"
            />


          <li className={styles.hamburger} onClick={handleHamburger} id="hamburger">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVR4nO3aOwrCQBiF0QFXo+LafVTqpkTtbK4ErLRyTPAXz1lAEuZCpvlaAwAAAAAA+GNJlkl2Sc7hU8MZbpMsesdYJbl+/Bk8G8501TPI8eVRjOXw7hizJLfRXs+z4WxnBvnVQfyyJrd/7wJxqU/p0nWpP0ZZJNkkOU36if/hlGSdZN41BgAAAAAAAAAA9FG/j0r9XpT6vSD1ezHq92LU78Wo3wtRvxehfgcAAAAAAAAA4BvU76NSvxelfi9I/V6M+r0Y9Xsx6vdC1O9FqN8BAAAAAIBGa3dzrLjHogbwCQAAAABJRU5ErkJggg==" />
          </li>

        <ul id="options">

          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/ComingSoon">About</Link>
          </li>
          <li>
            <Link href="/Event">Events</Link>
          </li>
          <li>
            <Link href="/ComingSoon">Sponsors</Link>
          </li>
          <li>
            <Link href="/Gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/ContactUs">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
