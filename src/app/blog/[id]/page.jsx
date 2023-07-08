import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
// import { notFound } from "next/navigation";


const BlogPost = async ({ params }) => {
 
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>tytuł</h1>
          <p className={styles.desc}>
            inna treść
          </p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src=""
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         tutaj będzie treść
        </p>
      </div>
    </div>
  );
};

export default BlogPost;