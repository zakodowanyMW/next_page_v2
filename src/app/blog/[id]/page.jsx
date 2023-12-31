import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store' })
  if (!res.ok) {
    return notFound();
  }
  return res.json()
}

export async function generateMetadata({params}){
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
 const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
          {data.content}
          </p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis consequatur accusamus, nihil adipisci aliquid recusandae eveniet! Inventore est voluptatem, voluptatibus voluptate vero ipsam sapiente minus neque? Voluptatem mollitia repellat expedita.
         Nesciunt sapiente magnam neque accusamus, a eaque quas accusantium temporibus esse praesentium fugit quos ipsam earum, corporis incidunt, veniam sunt. Harum maiores cumque hic vero minus ipsam obcaecati totam architecto.
         Dolor fugit enim veritatis vitae suscipit quasi reprehenderit natus, laudantium earum nihil, molestiae vel! Error architecto nulla tempora, magnam quam dolor neque quae assumenda quidem impedit beatae quod. Accusamus, deleniti.
         <br/>
         <br/>
          Nesciunt sapiente magnam neque accusamus, a eaque quas accusantium temporibus esse praesentium fugit quos ipsam earum, corporis incidunt, veniam sunt. Harum maiores cumque hic vero minus ipsam obcaecati totam architecto.
          Dolor fugit enim veritatis vitae suscipit quasi reprehenderit natus, laudantium earum nihil, molestiae vel! Error architecto nulla tempora, magnam quam dolor neque quae assumenda quidem impedit beatae quod. Accusamus, deleniti.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;