import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Blog.module.css";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { posts: data },
  };
}

export default function blog({ posts }) {
  return (
    <>
      <Head>
        <title>Mirzaq Blog | Blog Posts</title>
        <meta name="keywords" content="blog" />
      </Head>
      <div>
        <h1>Halaman Blog</h1>

        {posts.map((post) => (
          <article key={post.id} className={styles.post}>
            <Link
              href={
                "/blog/" +
                String(post.title)
                  .toLowerCase()
                  .replace(/[^a-zA-Z\s+]/g, "")
                  .replace(/\s+/g, "-")
              }
            >
              <a>
                <h1>{post.title}</h1>
              </a>
            </Link>
            <p> {post.body} </p>
          </article>
        ))}
      </div>
    </>
  );
}
