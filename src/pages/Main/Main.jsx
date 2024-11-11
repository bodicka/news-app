import { useEffect } from 'react';
import NewsBaner from '../../components/NewsBaner/NewsBaner';
import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';
import { useState } from 'react';
import NewsList from '../../components/NewsList/NewsList';

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews()
        setNews(response.news)
      } 
      catch (error) {
       console.log(error) 
      }
    }
    fetchNews()
  }, [])

  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBaner item={news[1]} /> : null}
      <NewsList news={news} />
    </main>
  )
}
export default Main