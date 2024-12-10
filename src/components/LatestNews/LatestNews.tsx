import { useGetLatestNewsApiQuery } from "../../store/servises/newsApi";
import BannersList from "../BanersList/BanersList";
import styles from "./styles.module.css";

const LatestNews = () => {
  const {data, isLoading} = useGetLatestNewsApiQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
