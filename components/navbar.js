import styles from "@/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
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
        <ul>
          
          <li>
              -
          </li>

          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link href="/commingsoon">About</Link>
          </li>
          <li>
            <Link href="/Event">Events</Link>
          </li>
          <li>
            <Link href="/commingsoon">Sponsors</Link>
          </li>
          <li>
            <Link href="/commingsoon">Gallery</Link>
          </li>
          <li>
            <Link href="/commingsoon">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
