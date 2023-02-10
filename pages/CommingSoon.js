import Navbar from "@/components/navbar";
import Head from "next/head";
import styles from "@/styles/CommingSoon.module.css"
const CommingSoon=()=>{
    return(
        <>
            <Head>
                
            </Head>
            <Navbar/>

            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <h1>
                        Comming Soon
                    </h1>
                </div>
            </div>
        </>
    )
};
export default CommingSoon;