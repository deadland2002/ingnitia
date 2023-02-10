import Head from "next/head";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { useState } from "react";
import styles from "@/styles/Gallery.module.css"
import GalleryCard from "@/components/GalleryCard";

function Gallery() {
  const Imgurl = process.env.ImageUrl;
  const [data, setData] = useState([]);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      start();
      async function start() {
        const loader = document.getElementById("preloader");
        if (loader) {
          const res = await fetch("http://localhost:3000/api/hello");
          var posts = await res.json();
          posts = posts.result;
          setData(posts);
          loader.style.display = "none";
        }
      }
    }
  }, []);


  return (
    <>
      <Head></Head>
      <Navbar />
      
      <div className="preloader" id="preloader">
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>

        <div className="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>

        <div className="loader">
          <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
          </svg>
        </div>
      </div>




      <div className={styles.GalleryHolder}>
        {data.map((single) => {
          return (<GalleryCard data={single} key={single.id} />)
        })}
      </div>

    </>
  );
}

export default Gallery;
