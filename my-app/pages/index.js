import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import PostsList from "../components/PostsList";
import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";

const Home = ({ posts }) => {
  const [fetchedPosts, setFetchedPosts] = useState([]);

  useEffect(() => {
    if (posts) {
      setFetchedPosts(posts);
    }
  }, [posts]);
  return (
    <Layout fetchedPosts={fetchedPosts} setFetchedPosts={setFetchedPosts}>
      {fetchedPosts && (
        <>
          {" "}
          <PostsList posts={fetchedPosts} />
          <CreatePost
            fetchedPosts={fetchedPosts}
            setFetchedPosts={setFetchedPosts}
          />
        </>
      )}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );
  const posts = await result.json();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
