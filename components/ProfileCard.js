import styles from "@/styles/ContactUs.module.css"
import Image from "next/image"

export default function ProfileCard(prop){
    return(
        <>
        <div className={styles.Card}>
            <div className={styles.ImageHolder}>
                <Image src={prop.data.Url} width={1000} height={1000} alt={"image"}/>
            </div>
            <div className={styles.Name}>
                {prop.data.Name}
            </div>
            <div className={styles.Position}>
                {prop.data.Position}
            </div>
        </div>
        </>
    )
};