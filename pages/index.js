import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import Script from "next/script";
import Timer from "@/components/Timer";
import { useEffect } from "react";
import stylesNav from "@/styles/navbar.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./css/logosvg.css" />
      </Head>
      <Image
            className={stylesNav.logo} 
            src={"/img/logo.png"}
            width={1000}
            height={1000}
            alt="logo"
            />
      <Navbar />
      <div className={styles.Hero_text}>
        <svg
          id="logo"
          width="265"
          height="51"
          viewBox="0 0 265 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo"
        >
          <path
            d="M7.63523 2.45454V1.95454H7.13523H1.49887H0.998871V2.45454V49V49.5H1.49887H7.13523H7.63523V49V2.45454ZM56.1793 17.1553L56.2919 17.5H56.6546H62.4727H63.0754L62.9641 16.9077C62.5296 14.5951 61.7366 12.4853 60.5826 10.5825C59.4314 8.6692 57.991 7.02585 56.2626 5.65522C54.5488 4.26898 52.5961 3.2041 50.4086 2.45918C48.2302 1.69701 45.8867 1.31818 43.3818 1.31818C40.3338 1.31818 37.5288 1.88326 34.974 3.02048C32.422 4.15642 30.2118 5.79116 28.3466 7.92055C26.4799 10.0518 25.0402 12.6265 24.0219 15.6352L24.0214 15.6366C23.0165 18.6358 22.5182 22.0013 22.5182 25.7273C22.5182 30.6943 23.392 35.0144 25.1589 38.672L25.1596 38.6736C26.9395 42.3261 29.4245 45.158 32.617 47.1514L32.6179 47.152C35.8277 49.1464 39.5426 50.1364 43.7455 50.1364C47.5139 50.1364 50.8706 49.3481 53.8021 47.7577L53.8029 47.7572C56.7477 46.1524 59.0574 43.8896 60.7245 40.9762C62.4114 38.055 63.2455 34.6327 63.2455 30.7273V25.7273V25.2273H62.7455H45.0182H44.5182V25.7273V30.7273V31.2273H45.0182H56.7723C56.6669 33.6425 56.1133 35.7479 55.1249 37.5556L55.1243 37.5567C54.0322 39.5662 52.508 41.1186 50.5457 42.2233C48.6006 43.3118 46.3388 43.8636 43.7455 43.8636C40.9535 43.8636 38.4547 43.1743 36.2357 41.802C34.0239 40.4342 32.2581 38.4128 30.9451 35.7131C29.6383 33.0261 28.9727 29.7042 28.9727 25.7273C28.9727 21.7497 29.631 18.427 30.9233 15.7394C32.2223 13.0381 33.9593 11.017 36.1259 9.65015C38.3009 8.27802 40.7154 7.59091 43.3818 7.59091C45.0185 7.59091 46.5114 7.81204 47.8647 8.24858C49.2211 8.68613 50.4259 9.31849 51.4832 10.1441L51.4858 10.1461C52.5611 10.9744 53.4854 11.978 54.2589 13.1601L54.2588 13.1602L54.2629 13.1661C55.0526 14.3361 55.6923 15.6647 56.1793 17.1553ZM116.208 2.45454V1.95454H115.708H110.163H109.663V2.45454V38.1492L84.664 2.16925L84.5149 1.95454H84.2534H78.7989H78.2989V2.45454V49V49.5H78.7989H84.4352H84.9352V49V13.397L109.843 49.2851L109.992 49.5H110.253H115.708H116.208V49V2.45454ZM139.523 2.45454V1.95454H139.023H133.386H132.886V2.45454V49V49.5H133.386H139.023H139.523V49V2.45454ZM153.678 7.45454V7.95454H154.178H168.315V49V49.5H168.815H174.451H174.951V49V7.95454H189.088H189.588V7.45454V2.45454V1.95454H189.088H154.178H153.678V2.45454V7.45454ZM210.323 2.45454V1.95454H209.823H204.186H203.686V2.45454V49V49.5H204.186H209.823H210.323V49V2.45454ZM229.433 49.5H229.786L229.904 49.1673L234.465 36.3182H252.582L257.144 49.1673L257.262 49.5H257.615H263.524H264.24L263.993 48.8277L246.902 2.2822L246.782 1.95454H246.433H240.615H240.266L240.145 2.2822L223.055 48.8277L222.808 49.5H223.524H229.433ZM243.524 10.8006L250.452 30.3182H236.595L243.524 10.8006Z"
            stroke="white"
          />
        </svg>

        <Timer />
      </div>
    </>
  );
}
