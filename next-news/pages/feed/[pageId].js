/* eslint-disable @next/next/no-img-element */

import styles from '../../styles/Feed.module.css';
import { useRouter } from 'next/router';
import { Navbar } from '../../components/navbar';
  

export const Feed = ({ pageNumber, articles }) => {
    console.log(pageNumber, articles)
    const router = useRouter();

    return (
        <div className='page-container'>
            <Navbar/>
            <div className={styles.main}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.post}>
                        <h1 onClick={() => (window.location.href = article.url)}>{ article.title }</h1>
                        <p>{ article.description }</p>
                        {!!article.urlToImage && <img src={article.urlToImage} alt="news-feed"/>}
                    </div>
                ))}
            </div>

            <div className={styles.paginator}>
                <div
                 onClick={() => {
                    if (pageNumber > 1) {
                      router.push(`/feed/${pageNumber - 1}`).then(() => window.scrollTo(0,0));
                    }
                 }}
                 className={pageNumber === 1 ? styles.disabled : styles.active}>
                    Previous Page
                </div>

                <div>#{ pageNumber }</div>

                <div
                 onClick={() => {
                    if (pageNumber < 5) {
                      router.push(`/feed/${pageNumber + 1}`).then(() => window.scrollTo(0,0));
                    }
                 }}
                 className={pageNumber === 5 ? styles.disabled : styles.active}>
                    Next Page
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.pageId;

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
      return {
        props: {
          articles: [],
          pageNumber: 1,
        },
      }; 
    }

    // https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=0d374d79e5b541138403906c3748a317
    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
          },
        },
      );
//   .then(res => res.json());
      const apiJson = await apiResponse.json();
      console.log(apiJson)
    
    
    //   const { articles } = apiResponse;
    const { articles } = apiJson;
    
      return {
        props: {
          articles: articles,
          pageNumber: Number.parseInt(pageNumber),
        },
      };
};

export default Feed;