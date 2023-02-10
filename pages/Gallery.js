import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/navbar";

function Gallary({ posts }) {
  return (
    <>
      <ul>
        <Head></Head>
        <Navbar/>
        {posts.map((single) => {
          return (
            <>
              <Image src={single} alt={"img"} width={100} height={100} />
            </>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/hello");
  var posts = await res.json();
  posts = posts.result;
  return {
    props: {
      posts,
    },
  };
}

export default Gallary;
