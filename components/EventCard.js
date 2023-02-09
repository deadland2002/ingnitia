import Image from "next/image";
import style from "@/styles/EventCard.module.css";

const EventCard = (props) => {
  return (
    <>
      <main className={style.pageContent}>
        <div
          className={style.card}
          style={{ backgroundImage: `url("${props.data.Url}")` }}
        >
          <div className={style.content}>
            <h2 className={style.title}>{props.data.Title}</h2>
            <p className={style.copy}>{props.data.Desc}</p>
            <a href="https://google.co.in" target="_blank">
              <button className={style.btn}>Register</button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default EventCard;
