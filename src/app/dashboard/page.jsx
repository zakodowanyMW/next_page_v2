"use client";
import React, { useEffect, useState } from 'react'
import styles from "./page.module.css";
import useSWR from 'swr';

function Dasgboard() {
  
  // STARY SPOSÓB POBIERANIA DANYCH
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  
  // useEffect(()=>{
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });

  //     if (!res.ok) {
  //       setError(true);
  //     }
  //     const data = await res.json();
  //     setIsLoading(true);
  //     setData( data);
  //   }
  //   getData();
  // }, []);
  // console.log(data)


  // NOWY SPOSÓB POBIERANIA DANYCH PO STRONIE KLIENTA W NEXT.JS
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);
  console.log(data);

  return (
    <div className={styles.container}>
      Dasgboard
    </div>
  )
}

export default Dasgboard