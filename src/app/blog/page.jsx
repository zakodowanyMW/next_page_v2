import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

function Blog() {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testID" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="400" height="250" className={styles.image}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/testID" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="400" height="250" className={styles.image}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog