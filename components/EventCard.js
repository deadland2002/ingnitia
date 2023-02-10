import Image from "next/image";
import style from "@/styles/EventCard.module.css";

const EventCard = (props) => {
  return (
    <>
      <main className={style.pageContent + " fadein"}>
        <div
          className={style.card + " fadein" }
          style={{ backgroundImage: `url("${props.data.Url}")` }}
        >
          <div className={style.content + " fadein"}>
            <h2 className={style.title + " fadein" }>{props.data.Title}</h2>
            <p className={style.copy + " fadein" }>{props.data.Desc}</p>
            <a href="https://google.co.in" target="_blank">
              <button className={style.btn + " fadein" }>Register</button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default EventCard;
