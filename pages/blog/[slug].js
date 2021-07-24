import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((post) => {
    return {
      params: {
        slug: post.title
          .toString()
          .toLowerCase()
          .replace(/[^a-zA-Z\s+]/g, "")
          .replace(/\s+/g, "-"),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const resFull = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataFull = await resFull.json();

  let singleId = null;

  for (let i = 0; i < dataFull.length; i++) {
    if (
      dataFull[i].title
        .toString()
        .toLowerCase()
        .replace(/[^a-zA-Z\s+]/g, "")
        .replace(/\s+/g, "-") == slug
    ) {
      singleId = dataFull[i].id;
    }
  }

  const resPost = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + singleId
  );
  const dataPost = await resPost.json();

  return {
    props: {
      post: dataPost,
    },
  };
};

export default function detail({ post }) {
  return (
    <>
      <Head>
        <title>Mirzaq Blog | Post Details</title>
        <meta name="keywords" content="blog" />
      </Head>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
