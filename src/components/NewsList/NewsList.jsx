import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsItems from "../NewsItems/NewsItems";
import styles from "./styles.module.css";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((items) => {
        return <NewsItems key={items.id} item={items} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)

export default NewsListWithSkeleton;
