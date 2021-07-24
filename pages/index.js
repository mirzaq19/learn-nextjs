import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mirzaq Blog | Home</title>
        <meta name="keywords" content="blog" />
      </Head>
      <div>
        <h1 className={styles.title}>Halaman Home</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          corrupti ducimus vero, recusandae at quidem iusto odit ex! Vero quo
          facere dignissimos nostrum, voluptatum totam at dolorum pariatur ab
          iusto eum repellendus ducimus expedita in vel beatae deserunt culpa
          quia perspiciatis! Ipsam voluptatum voluptates animi voluptate dicta
          ducimus.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          corrupti ducimus vero, recusandae at quidem iusto odit ex! Vero quo
          facere dignissimos nostrum, voluptatum totam at dolorum pariatur ab
          iusto eum repellendus ducimus expedita in vel beatae deserunt culpa
          quia perspiciatis! Ipsam voluptatum voluptates animi voluptate dicta
          ducimus.
        </p>
        <Link href="/blog">
          <a className={styles.btn}>Show blog posts</a>
        </Link>
      </div>
    </>
  );
}
