import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Profile from "../components/home-page/profile";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Mansi&apos; Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />   
      </Head>
      <Profile />
      <FeaturedPosts posts={props.posts} />    
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}


export default HomePage;

// 1) Profile => present ourselves
// 2) Featured Posts => output some dummy content (actual posts)