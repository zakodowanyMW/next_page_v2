import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function Blog() {
  const data = await getData();
  let data2 = [];
  for (let i = 0; i < data.length; i++) {
    data2.push(data[i]);
  }
  console.log(data2);

  const images = [
    {
      id: 0,
      url: "https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 1,
      url: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/3889987/pexels-photo-3889987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/2086925/pexels-photo-2086925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ]
  const defaultImage = "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className={styles.mainContainer}>
      {data2.map((item, index) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
          <div className={styles.imageContainer}>
            <Image src={(index < 5) ? images[index].url : defaultImage} alt="" width="400" height="250" className={styles.image} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog