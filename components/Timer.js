import Script from "next/script";
import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
import { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const countdownDiv = document.getElementById("countdown");
    const Launching = document.getElementById("Launching");

    startTimer();

    function startTimer() {
      var deadline = new Date("Feb 24, 2023 09:00:00").getTime();
      var x = setInterval(function () {
        var now = new Date().getTime();
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        Launching.style.display = "block";
        countdownDiv.innerHTML = `
            <span>${days}  D : </span>
            <span>${hours}  H : </span> 
            <span>${minutes}  M : </span>
            <span>${seconds}  S </span>
            `;
        if (t < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 0);
    }
  });

  return (
    <>
      <div className={inter.className + " " + styles.timer}>
        <div className={styles.launchingOn} id="Launching">
          Launching On
        </div>

        <div className={styles.countdown + " countdown "} id="countdown"></div>
      </div>
      <Script src="./js/homepage.js" strategy="afterInteractive"></Script>
    </>
  );
};

export default Timer;
